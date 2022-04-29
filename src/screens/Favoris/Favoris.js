import { FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native'
import React, { useContext } from 'react'

import MusicContext from '../../contexts/MusicContext'
import { Button } from '../../components/Button'

const Favoris = ({ navigation }) => {
    const { favlist } = useContext(MusicContext)

    return (
        <SafeAreaView style={style.container}>
            {favlist.length > 0 ? (
                <FlatList
                    data={favlist}
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
            ) : (
                <View>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                        Vous n'avez rien en favlist
                    </Text>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Favoris

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
})
