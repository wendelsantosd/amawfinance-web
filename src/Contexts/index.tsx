import React, { createContext, ReactNode, useState } from 'react'

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

    const userData = async () => {
        const result = await api.request({
            method: 'get',
            route: '/user/data',
            query: {
                id: storage.read('id')
            },
            noStore: true
        })

        if (result?.status === 200) {
            setUser(result.data)
            storage.write('user', result.data)
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