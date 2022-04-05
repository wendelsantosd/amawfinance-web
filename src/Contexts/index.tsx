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
    transaction: any
    targetMonth: any
    targetYear: any
    notifications: any
    amount: any
    setUser: React.Dispatch<any>
    setTransaction: React.Dispatch<any>
    setTargetMonth: React.Dispatch<any>
    setTargetYear: React.Dispatch<any>
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
    // eslint-disable-next-line no-unused-vars
    dataTransaction: (id: string) => Promise<any>
    // eslint-disable-next-line no-unused-vars
    updateTransaction: (id: string) => Promise<any>
    listTransactions: () => Promise<any>
    // eslint-disable-next-line no-unused-vars
    createNotification: (id: string) => Promise<any>
    listNotifications: () => Promise<any>
    updateViewedNotification: () => Promise<any>
}

export const Context = createContext<ContextData >(
    {} as ContextData
)

export const ContextProvider = ({ children }: ContextProps) => {
    const [user, setUser] = useState<any>()
    const [transactions, setTransactions] = useState<any>()
    const [transaction, setTransaction] = useState<any>('')
    const [targetMonth, setTargetMonth] = useState(new Date().getMonth())
    const [targetYear, setTargetYear] = useState(new Date().getFullYear())
    const [notifications, setNotifications] = useState<any>()
    const [amount, setAmount] = useState<number>()
    

    useEffect(() => {
        (async () => {
            if (storage.read('user')) {
                setUser(storage.read('user'))
            } else {
                await userData()
            }
        })()
    }, [])

    useEffect(() => {
        listTransactions()
        listNotifications()
    }, [])

    useEffect(() => {
        let _amount = 0
        notifications?.forEach((notification: any) => {
            if (notification.viewed === false) {
                _amount += 1
            }
        })

        setAmount(_amount)
    }, [notifications])

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
                month: targetMonth,
                year: targetYear
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
            await listTransactions()
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
            await listTransactions()
        }

        return result
    }

    const dataTransaction = async (id: string) => {
        const result = await api.request({
            method: 'get',
            route: 'transaction/data',
            query: {
                id,
                userId: storage.read('id')
            }
        })

        if (result?.status === 200) {
            setTransaction(result?.data)
        }
    }

    const updateTransaction = async (id: string) => {
        const result = await api.request({
            method: 'put',
            route: `transaction/update?id=${id}&userId=${user.id}`,
            body: transaction
        })

        if (result?.status === 200) {
            setTransaction(result?.data)
            await listTransactions()
        }

        return result
    }

    const listNotifications = async () => {
        const result = await api.request({
            method: 'get',
            route: '/notification/list-by-user-month-year',
            query: {
                id: storage.read('id'),
                month: targetMonth,
                year: targetYear
            }
        })

        if (result?.status === 200) {
            setNotifications(result?.data) 
        }
    }

    const createNotification = async (id: string) => {
        const result = await api.request({
            method: 'post',
            route: `notification/create?id=${user.id}`,
            query: { id }
        })

        if (result?.status === 201) {
            await listNotifications()
        }

        return result
    }

    const updateViewedNotification = async () => {
        const result = await api.request({
            method: 'patch',
            route: `notification/update-viewed?id=${user.id}`,
        })

        if (result?.status === 200) {
            await listNotifications()
        }

        return result
    }
    
    return <Context.Provider value={{
        signed: user ? true: false, 
        user,
        transactions,
        transaction,
        targetMonth,
        targetYear,
        notifications,
        amount,
        setUser,
        setTransaction,
        setTargetMonth,
        setTargetYear,
        userData,
        userUpdate,
        emailUpdate,
        passwordUpdate,
        createTransaction,
        deleteTransaction,
        dataTransaction,
        updateTransaction,
        listTransactions,
        createNotification,
        listNotifications,
        updateViewedNotification
    }}>
        {children}
    </Context.Provider>
}