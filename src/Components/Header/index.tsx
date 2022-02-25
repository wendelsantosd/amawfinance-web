import React from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import noAvatar from '../../assets/images/no_avatar.jpg'
import { Container, DataLogo, Info } from './header.styles'

interface HeaderProps {
    isAuth: boolean
}

export const Header = ({ isAuth }: HeaderProps) => {
    const navigate = useNavigate()

    return <Container>
        <DataLogo
            onClick={() => navigate('/')}    
        >
            <img src={Logo} alt='Logo Amaw' />
            <p>Amaw Finance</p>
        </DataLogo>

        {isAuth ?
            <Info>
                <p>Maria Silva</p>
                <img 
                    src={noAvatar} 
                    alt='Foto de Perfil'
                    className='profile-picture'
                />
            </Info>
            :
            null
        }
    </Container>
}