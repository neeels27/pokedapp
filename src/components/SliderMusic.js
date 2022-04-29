import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
import React from 'react'

const SliderMusic = () => {
    return (
        <View>
            <Slider
                style={style.progressBar}
                value={5}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor="#ff7675"
                minimimTrackTintColor="red"
                maximumTrackTintColor="#2980b9"
                onSlidingComplete={() => {}}
            />

            {/* music progress durations */}

            <View style={style.progressBarLevelDurations}>
                <Text style={style.progressBarLabelText}> 00:00</Text>
                <Text style={style.progressBarLabelText}> 3:00</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
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
})

export default SliderMusic
