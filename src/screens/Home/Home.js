import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import { Button } from '../../components/Button'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={style.container}>
            <Button
                title="Something is Going On - Godmode"
                onPress={() =>
                    navigation.navigate('Details', {
                        musicTitle: 'Something is Going On - Godmode',
                    })
                }
                style={{ bgColor: 'red' }}
            />
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
