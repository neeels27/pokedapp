import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons'
IonIcons.loadFont()

import Home from '../../screens/Home/Home'
import Settings from '../../screens/Settings/Settings'

const Tab = createBottomTabNavigator()

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#222831',
                },
                headerTintColor: '#ff7675',
                tabBarStyle: {
                    backgroundColor: '#222831',
                },
                tabBarActiveTintColor: '#ff7675',
            }}
        >
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
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <IonIcons name="settings-outline" color={color} size={size} />
                    ),
                    title: 'Réglage',
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBar
