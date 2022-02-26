import React from 'react'
import { BsFillCameraFill } from 'react-icons/bs'

import noAvatar from '../../assets/images/no_avatar.jpg'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Board, Container, Content, ProfilePicture } from './profile.styles'

export const Profile = () => {
    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'profile'}/>
            <Board>
                <ProfilePicture>
                    <img src={noAvatar} alt='Sem foto de perfil' />
                    <BsFillCameraFill className='camera-icon'/>
                </ProfilePicture>
            </Board>
        </Content>
    </Container>
}