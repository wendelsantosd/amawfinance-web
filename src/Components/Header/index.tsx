import React from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import { Container, DataLogo } from './header.styles'

export const Header = () => {
    const navigate = useNavigate()

    return <Container>
        <DataLogo
            onClick={() => navigate('/')}    
        >
            <img src={Logo} alt='Logo Amaw' />
            <p>Amaw Finance</p>
        </DataLogo>
    </Container>
}