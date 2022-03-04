import React from 'react'

import { ContextProvider } from '../Contexts'
import { Router } from '../routes'
import { GlobalStyle } from './global.styles'

const App = () =>
    <ContextProvider>
        <Router />
        <GlobalStyle />
    </ContextProvider>

export default App
