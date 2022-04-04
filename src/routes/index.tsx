import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import { AlterPassword } from '../Pages/AlterPassword'
import { Charts} from '../Pages/Charts'
import { Login } from '../Pages/Login'
import { Notifications } from '../Pages/Notifications'
import { Profile } from '../Pages/Profile'
import { RecoverPassword } from '../Pages/RecoverPassword'
import { Register } from '../Pages/Register'
import { Transactions } from '../Pages/Transactions'
import storage from '../services/storage'

const isAuth = storage.read('token')


const PrivateRoute = ({ children, redirectTo }: any) => {
    const isAuthenticated = storage.read('token') !== null

    return isAuthenticated ? children : <Navigate to={redirectTo} />
}


export const Router = () =>
    <BrowserRouter>
        <Routes>
            <Route
                path="/profile"
                element={
                    <PrivateRoute redirectTo="/">
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route
                path="/charts"
                element={
                    <PrivateRoute redirectTo="/">
                        <Charts />
                    </PrivateRoute>
                }
            />
            <Route
                path="/transactions"
                element={
                    <PrivateRoute redirectTo="/">
                        <Transactions />
                    </PrivateRoute>
                }
            />
            <Route
                path="/notifications"
                element={
                    <PrivateRoute redirectTo="/">
                        <Notifications />
                    </PrivateRoute>
                }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/alter-password/:token' element={<AlterPassword />} />
            <Route path='/recover-password' element={<RecoverPassword />} />
            <Route path='/register' element={<Register />} />
            <Route path="/" element={isAuth ? <Transactions /> : <Login />}/>
        </Routes>
    </BrowserRouter>
