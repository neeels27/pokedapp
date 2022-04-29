import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import MusicPlayer from './screens/MusicPlayer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <View style={style.container}>
      <Ionicons />
      <MusicPlayer / >
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#555',
   
  }
})