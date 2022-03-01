import { use } from 'echarts/lib/echarts'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

import api from '../services/api'
import storage from '../services/storage'


interface ContextProps {
    children: ReactNode
}

interface ContextData {
    signed: boolean,
    user: any,
    setUser: React.Dispatch<any>
    userData: () => Promise<any>
    userUpdate: () => Promise<any>
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

    const userUpdate = async () => {
        const result = await api.request({
            method: 'put',
            route: `/user/update?id=${user.id}`,
            body: user
        })

        if (result?.status === 200) {
            await userData()
        }

        return result
    }
    
    return <Context.Provider value={{
        signed: user ? true: false, 
        user,
        setUser,
        userData,
        userUpdate
    }}>
        {children}
    </Context.Provider>
}