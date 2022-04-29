import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import StackNavigator from './src/configs/routes'

const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <View style={style.container}>
            <StackNavigator />
        </View>
    )
}

export default App

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
    },
})
