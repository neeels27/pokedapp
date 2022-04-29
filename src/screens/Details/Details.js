import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer, { State } from 'react-native-track-player'
import Ionicon from 'react-native-vector-icons/Ionicons'
Ionicon.loadFont()

import SongInfo from '../../components/SongInfo'
import CoverMusic from '../../components/CoverMusic'
import SliderMusic from '../../components/SliderMusic'
import ActionButtons from '../../components/ActionButtons'

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

    return (
        <SafeAreaView style={style.container}>
            <View style={style.maincontainer}>
                <CoverMusic imgUri={music.artwork} />
                <SongInfo title={music.title} artist={music.artist} />
                <SliderMusic />

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
            <ActionButtons music={music} />
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
    MusicControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },
})
