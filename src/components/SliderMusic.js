import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
import React from 'react'
import styled from 'styled-components'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const SliderMusic = () => {
    const progress = useProgress()
    return (
        <View>
            <ProgressBar
                value={ProgressBar.position}
                minimumValue={0}
                maximumValue={progress.duration}
                thumbTintColor="#ff7675"
                minimimTrackTintColor="red"
                maximumTrackTintColor="#2980b9"
                onSlidingComplete={async value => {
                    await TrackPlayer.seekTo(value)
                }}
            />

            <ProgressBarLevelDurations>
                <ProgressBarLabelText>
                    {new Date(progress.position * 1000).toLocaleTimeString().substring(3)}
                </ProgressBarLabelText>
                <ProgressBarLabelText>
                    {new Date((progress.duration - progress.position) * 1000)
                        .toLocaleTimeString()
                        .substring(3)}
                </ProgressBarLabelText>
            </ProgressBarLevelDurations>
        </View>
    )
}

const ProgressBar = styled.Slider`
    width: 350px;
    height: 40px;
    margin-top: 25px;
    flex-direction: row;
`

const ProgressBarLevelDurations = styled.View`
    width: 340px;
    flex-direction: row;
    justify-content: space-between;
`

const ProgressBarLabelText = styled.Text`
    color: #fff;
    font-weight: 500;
`
export default SliderMusic
