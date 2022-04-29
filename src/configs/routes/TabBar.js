import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons'
IonIcons.loadFont()

import Home from '../../screens/Home/Home'
import MusicPlayer from '../../screens/MusicPlayers/MusicPlayer'

const Tab = createBottomTabNavigator()

const TabBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <IonIcons name="home-outline" color={color} size={size} />
                    ),
                    title: 'Accueil',
                }}
            />
            <Tab.Screen
                name="MusicPlayer"
                component={MusicPlayer}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <IonIcons name="music-outline" color={color} size={size} />
                    ),
                    title: 'Music',
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBar
