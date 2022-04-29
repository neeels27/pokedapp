import { FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native'
import React, { useContext } from 'react'
import styled from 'styled-components'
import MusicContext from '../../contexts/MusicContext'
import { Button } from '../../components/Button'

const Favoris = ({ navigation }) => {
    const { favlist } = useContext(MusicContext)

    return (
        <Container>
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
                    <TextFav>Vous n'avez rien en favlist</TextFav>
                </View>
            )}
        </Container>
    )
}

export default Favoris

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #222831;
    display: flex;
    justify-content: center;
    padding-horizontal: 20px;
`

const TextFav = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`
