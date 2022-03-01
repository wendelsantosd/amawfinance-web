import React, { createContext, ReactNode, useEffect, useState } from 'react'

import api from '../services/api'
import storage from '../services/storage'


interface ContextProps {
    children: ReactNode
}

interface ContextData {
    signed: boolean,
    userData: () => Promise<any>
    user: any
}

export const Context = createContext<ContextData >(
    {} as ContextData
)

export const ContextProvider = ({ children }: ContextProps) => {
    const [user, setUser] = useState<any>()

    useEffect(() => {
        (async () => {
            if (storage.read('user')) {
                setUser(storage.read('user'))
            } else {
                const result = await api.request({
                    method: 'get',
                    route: '/user/data',
                    query: {
                        id: storage.read('id')
                    },
                })

                if (result?.status === 200) {
                    storage.write('user', result.data)
                    setUser(storage.read('user'))
                }
            }
        })()
    }, [])

    const userData = async () => {
        const result = await api.request({
            method: 'get',
            route: '/user/data',
            query: {
                id: storage.read('id')
            },
        })

        if (result?.status === 200) {
            storage.write('user', result.data)
            setUser(storage.read('user'))
        }

        return result
    }
    
    return <Context.Provider value={{
        signed: user ? true: false, 
        user, 
        userData
    }}>
        {children}
    </Context.Provider>
}