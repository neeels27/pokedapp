import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Ionicon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components'
Ionicon.loadFont()

import SongInfo from '../../components/SongInfo'
import CoverMusic from '../../components/CoverMusic'
import SliderMusic from '../../components/SliderMusic'
import ActionButtons from '../../components/ActionButtons'

const Details = ({ route }) => {
    const { music } = route.params
    const PlayBackState = usePlaybackState()
    const [currentState, setCurrentState] = useState(true)

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
            await TrackPlayer.play()
        } catch (e) {
            console.log(e)
        }
    }
    const togglePlayback = () => {
        if (currentState) {
            setCurrentState(false)
        } else {
            setCurrentState(true)
        }
    }

    const togglePlayback2 = async PlayBackState => {
        const currentTrack = await TrackPlayer.getCurrentTrack()
        if (currentTrack != null) {
            if (PlayBackState == State.Paused) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    useEffect(() => {
        setUpPlayer()

        return () => {
            TrackPlayer.stop()
        }
    }, [])

    return (
        <Container>
            <Maincontainer>
                <CoverMusic imgUri={music.artwork} />
                <SongInfo title={music.title} artist={music.artist} />
                <SliderMusic />

                {/* music controls */}
                <MusicControlsContainer>
                    <TouchableOpacity onPress={() => togglePlayback2(PlayBackState)}>
                        <Ionicon
                            name={PlayBackState === State.Playing ? 'pause-outline' : 'play'}
                            size={60}
                            color="#ff7675"
                        />
                    </TouchableOpacity>
                </MusicControlsContainer>
            </Maincontainer>
            <ActionButtons music={music} />
        </Container>
    )
}

export default Details

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #222831;
`

const Maincontainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const MusicControlsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 45%;
`
