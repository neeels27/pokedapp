import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components'

const CoverMusic = ({ imgUri }) => {
    return (
        <ImageWrapper>
            <MusicImage source={imgUri} />
        </ImageWrapper>
    )
}

const ImageWrapper = styled.View`
    width: 300px;
    height: 340px;
    margin-bottom: 25px;
    elevation: 5deg,
    shadowColor: #ccc;
    shadow-offset: {
        width: 5px;
        height: 5px;
    },
    shadow-opacity: 0.5px;
    shadow-radius: 3.84px;
`

const MusicImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    shadowOffset: {
        width: 5px;
        height: 5px;
    },
`
export default CoverMusic
