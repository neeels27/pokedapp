import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { showMessage } from 'react-native-flash-message'

const MusicContext = createContext({
    favlist: [],
    setFavlist: () => {},
    addOrRemoveToFavlist: () => {},
})

export const MusicContextProvider = ({ children }) => {
    const [favlist, setFavlist] = useState([])

    const hydrateFavList = async () => {
        const favlistExist = await AsyncStorage.getItem('favlist')
        favlistExist && setFavlist(JSON.parse(favlistExist))
    }

    useEffect(() => {
        hydrateFavList()
    }, [])

    useEffect(() => {
        AsyncStorage.setItem('favlist', JSON.stringify(favlist))
    }, [favlist])

    const addOrRemoveToFavlist = music => {
        const alreadyFavlisted = favlist.findIndex(el => el.id === music.id)

        if (alreadyFavlisted !== -1) {
            setFavlist(favlist.filter(el => el.id !== music.id))
            showMessage({
                message: 'Retiré de la favorite list',
                type: 'info',
            })
        } else {
            setFavlist([...favlist, music])
            showMessage({
                message: 'Ajouté de la favorite list',
                type: 'info',
            })
        }
    }

    const context = {
        favlist,
        setFavlist,
        addOrRemoveToFavlist,
    }
    return <MusicContext.Provider value={context}>{children}</MusicContext.Provider>
}

export default MusicContext
