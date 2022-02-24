import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Login } from '../Pages/Login'

export const Router = () =>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    </BrowserRouter>
