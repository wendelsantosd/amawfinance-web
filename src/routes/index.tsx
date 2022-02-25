import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { AlterPassword } from '../Pages/AlterPassword'
import { Login } from '../Pages/Login'
import { RecoverPassword } from '../Pages/RecoverPassword'
import { Register } from '../Pages/Register'

export const Router = () =>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/alter-password' element={<AlterPassword />} />
            <Route path='/recover-password' element={<RecoverPassword />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
