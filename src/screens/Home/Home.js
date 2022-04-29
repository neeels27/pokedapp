import { Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <SafeAreaView style={style.container}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
})
