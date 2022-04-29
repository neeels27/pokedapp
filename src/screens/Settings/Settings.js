import { Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Settings = () => {
    return (
        <SafeAreaView style={style.container}>
            <Text>Réglage</Text>
        </SafeAreaView>
    )
}

export default Settings

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
})
