import { StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import songs from '../../model/Data'

import { Button } from '../../components/Button'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={songs}
                renderItem={({ item }) => (
                    <Button
                        title={`${item.title} - ${item.artist}`}
                        onPress={() =>
                            navigation.navigate('Details', {
                                music: item,
                            })
                        }
                        style={{ bgColor: '#ff7675' }}
                    />
                )}
                contentContainerStyle={{ marginTop: 10 }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
        paddingHorizontal: 20,
    },
})
