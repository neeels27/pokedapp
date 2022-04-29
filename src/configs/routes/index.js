import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabBar from './TabBar'
import Details from '../../screens/Details/Details'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={({ route }) => ({
                        headerStyle: {
                            backgroundColor: '#222831',
                        },
                        headerBackTitle: 'Retour',
                        headerTintColor: '#ff7675',
                        title: route.params.musicTitle,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
