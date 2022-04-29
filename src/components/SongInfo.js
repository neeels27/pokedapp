import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styled from 'styled-components'

const SongInfo = ({ title, artist }) => {
    return (
        <View>
            <SongContent>{title}</SongContent>
            <SongContent>{artist}</SongContent>
        </View>
    )
}

const SongContent = styled.Text`
    text-align: center;
    color: #eeeeee;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #eeeeee;
`

export default SongInfo
