import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoverMusic = ({ imgUri }) => {
    return (
        <View style={[style.imageWrapper, style.elevation]}>
            <Image source={imgUri} style={style.musicImage} />
        </View>
    )
}

const style = StyleSheet.create({
    imageWrapper: {
        width: 300,
        height: 340,
        marginBottom: 25,
    },

    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    elevation: {
        elevation: 5,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
})

export default CoverMusic
