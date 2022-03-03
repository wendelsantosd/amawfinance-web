import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import { AlterPassword } from '../Pages/AlterPassword'
import { Charts} from '../Pages/Charts'
import { Login } from '../Pages/Login'
import { Profile } from '../Pages/Profile'
import { RecoverPassword } from '../Pages/RecoverPassword'
import { Register } from '../Pages/Register'
import { Transactions } from '../Pages/Transactions'
import storage from '../services/storage'

const isAuth = storage.read('token')
console.log(isAuth)

export const Router = () =>
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/alter-password/:token' element={<AlterPassword />} />
            <Route path='/charts' element={<Charts/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/recover-password' element={<RecoverPassword />} />
            <Route path='/register' element={<Register />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path="/" element={isAuth ? <Transactions /> : <Login />}/>
        </Routes>
    </BrowserRouter>
