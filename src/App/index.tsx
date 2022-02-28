import React from 'react'

import { AuthContext } from '../Contexts/auth.context'
import { Router } from '../routes'
import { GlobalStyle } from './global.styles'

const App = () =>
    <AuthContext.Provider value={{ signed: true }}>
        <Router />
        <GlobalStyle />
    </AuthContext.Provider>

export default App
