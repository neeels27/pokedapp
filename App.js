import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import SplashScreen from 'react-native-splash-screen'

import StackNavigator from './src/configs/routes'

import { MusicContextProvider } from './src/contexts/MusicContext'

const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <MusicContextProvider>
            <StackNavigator />
            <FlashMessage position="top" />
        </MusicContextProvider>
    )
}

export default App
