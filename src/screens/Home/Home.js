import { StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styled from 'styled-components'

import songs from '../../model/Data'

import { Button } from '../../components/Button'

const Home = ({ navigation }) => {
    return (
        <Container>
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
        </Container>
    )
}

export default Home

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #222831;
    padding-horizontal: 20px;
`
