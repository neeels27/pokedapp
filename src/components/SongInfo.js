import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SongInfo = ({ title, artist }) => {
    return (
        <View>
            <Text style={[style.songContent, style.songTitle]}>{title}</Text>
            <Text style={[style.songContent, style.songArtist]}>{artist}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    songContent: {
        textAlign: 'center',
        color: '#EEEEEE',
    },
    songTitle: {
        fontsize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#EEEEEE',
    },
})

export default SongInfo
