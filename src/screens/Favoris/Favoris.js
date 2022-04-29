import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native'
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
                            title={item}
                            onPress={() =>
                                navigation.navigate('Details', {
                                    musicTitle: item,
                                })
                            }
                            style={{ bgColor: '#ff7675' }}
                        />
                    )}
                    contentContainerStyle={{ marginTop: 10 }}
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <Margin mt={20} mb={20}>
                    <PText>Vous n'avez rien en favlist</PText>
                </Margin>
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
