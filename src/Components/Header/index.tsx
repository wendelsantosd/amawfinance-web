import React from 'react'

import Logo from '../../assets/images/logo.svg'
import { Container, DataLogo } from './header.styles'

export const Header = () => {
    return <Container>
        <DataLogo>
            <img src={Logo} alt='Logo Amaw' />
            <p>Amaw Finance</p>
        </DataLogo>
    </Container>
}