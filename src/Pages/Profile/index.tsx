import React from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Container } from './profile.styles'

export const Profile = () => {
    return <Container>
        <Header isAuth/>
        <Menu />
    </Container>
}