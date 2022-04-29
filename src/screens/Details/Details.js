import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Share,
} from 'react-native'
import React, { useContext, useEffect } from 'react'
import TrackPlayer, { State } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import Ionicon from 'react-native-vector-icons/Ionicons'
Ionicon.loadFont()

import MusicContext from '../../contexts/MusicContext'
import SongInfo from '../../components/SongInfo'
import CoverMusic from '../../components/CoverMusic'

const { width } = Dimensions.get('window')

const Details = ({ route }) => {
    const { music } = route.params

    const setUpPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer()
            await TrackPlayer.add({
                id: music.id,
                url: music.music,
                title: music.title,
                artist: music.artist,
                artwork: music.artwork,
            })
            TrackPlayer.play()
        } catch (e) {
            console.log(e)
        }
    }
    const togglePlayack = async () => {
        if (State.Paused) {
            await TrackPlayer.play()
        } else {
            await TrackPlayer.pause()
        }
    }

    useEffect(() => {
        setUpPlayer()

        return () => {
            TrackPlayer.stop()
        }
    }, [])

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
        <SafeAreaView style={style.container}>
            <View style={style.maincontainer}>
                <CoverMusic imgUri={music.artwork} />
                <SongInfo title={music.title} artist={music.artist} />

                {/* slider */}
                <View>
                    <Slider
                        style={style.progressBar}
                        value={10}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor="#FFD369"
                        minimimTrackTintColor="#FFD369"
                        maximumTrackTintColor="#fff"
                        onSlidingComplete={() => {}}
                    />

                    {/* music progress durations */}

                    <View style={style.progressBarLevelDurations}>
                        <Text style={style.progressBarLabelText}> 00:00</Text>
                        <Text style={style.progressBarLabelText}> 00:00</Text>
                    </View>
                </View>

                {/* music controls*/}

                <View style={style.MusicControlsContainer}>
                    <TouchableOpacity onPress={() => togglePlayack()}>
                        {State.Paused ? (
                            <Ionicon name="play-outline" size={60} color="#ff7675"></Ionicon>
                        ) : (
                            <Ionicon name="pause-outline" size={60} color="#ff7675"></Ionicon>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('ok')}></TouchableOpacity>
                </View>
            </View>
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
        </SafeAreaView>
    )
}

export default Details

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },

    maincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    progressBar: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    },

    progressBarLevelDurations: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    progressBarLabelText: {
        color: '#fff',
        fontWeight: '500',
    },

    MusicControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },
})
