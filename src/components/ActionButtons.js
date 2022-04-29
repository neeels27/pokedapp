import { View, StyleSheet, Dimensions, TouchableOpacity, Share } from 'react-native'
import React, { useContext } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'

import MusicContext from '../contexts/MusicContext'

const { width } = Dimensions.get('window')

const ActionButtons = ({ music }) => {
    const { favlist, addOrRemoveToFavlist } = useContext(MusicContext)

    const alreadyFavlisted = favlist.filter(el => el.id === music.id)

    const onShare = async () => {
        try {
            await Share.share({
                title: 'PokeDApp',
                message: `Partagez la musique ${music.title} à vos amis 😀`,
            })
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <View style={style.bottomContainer}>
            <View style={style.bottomIconWrapper}>
                <TouchableOpacity onPress={() => addOrRemoveToFavlist(music)}>
                    {alreadyFavlisted.length > 0 ? (
                        <Ionicon name="heart" size={30} color="#ff7675" />
                    ) : (
                        <Ionicon name="heart-outline" size={30} color="#ff7675" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onShare()}>
                    <Ionicon name="share-outline" size={30} color="#ff7675" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    bottomContainer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#393E46',
        borderWitdh: 1,
    },

    bottomIconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})

export default ActionButtons
