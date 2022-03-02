import React, { createContext, ReactNode, useEffect, useState } from 'react'

import api from '../services/api'
import storage from '../services/storage'


interface ContextProps {
    children: ReactNode
}

interface TransactionProps {
    description: string
    amount: number
    type: string
}
interface ContextData {
    signed: boolean,
    user: any,
    transactions: any
    setUser: React.Dispatch<any>
    userData: () => Promise<any>
    userUpdate: () => Promise<any>
    // eslint-disable-next-line no-unused-vars
    emailUpdate: (email: string) => Promise<any>
    // eslint-disable-next-line no-unused-vars
    passwordUpdate: (password: string) => Promise<any>
    // eslint-disable-next-line no-unused-vars
    createTransaction: (transaction: TransactionProps) => Promise<any>
    // eslint-disable-next-line no-unused-vars
    deleteTransaction: (id: string) => Promise<any>
}

export const Context = createContext<ContextData >(
    {} as ContextData
)

export const ContextProvider = ({ children }: ContextProps) => {
    const [user, setUser] = useState<any>()
    const [transactions, setTransactions] = useState<any>()
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        (async () => {
            if (storage.read('user')) {
                setUser(storage.read('user'))
            } else {
                userData()
            }
        })()
    }, [])

    useEffect(() => {
        listTransactions()
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

    const emailUpdate = async (email: string) => {
        const result = await api.request({
            method: 'get',
            route: '/user/modify-email',
            query: {
                id: user.id,
                email
            }
        })

        return result
    }

    const passwordUpdate = async (password: string) => {
        const result = await api.request({
            method: 'patch',
            route: `/user/modify-password?id=${user.id}`,
            body: {
                password
            }
        })

        return result
    }

    const listTransactions = async () => {
        const result = await api.request({
            method: 'get',
            route: '/transaction/list-by-user-month-year',
            query: {
                id: storage.read('id'),
                month,
                year
            }
        })

        if (result?.status === 200) {
            setTransactions(result?.data)
        }
    }

    const createTransaction = async (transaction: TransactionProps) => {
        const result = await api.request({
            method: 'post',
            route: `transaction/create?id=${user.id}`,
            body: transaction
        })

        if (result?.status === 201) {
            listTransactions()
        }

        return result
    }

    const deleteTransaction = async (id: string) => {
        const result = await api.request({
            method: 'delete',
            route: 'transaction/delete',
            query: {
                id,
                userId: user.id
            }
        })

        if (result?.status === 200) {
            listTransactions()
        }

        return result
    }
    
    return <Context.Provider value={{
        signed: user ? true: false, 
        user,
        transactions,
        setUser,
        userData,
        userUpdate,
        emailUpdate,
        passwordUpdate,
        createTransaction,
        deleteTransaction
    }}>
        {children}
    </Context.Provider>
}