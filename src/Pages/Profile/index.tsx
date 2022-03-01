import React, { useContext, useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import noAvatar from '../../assets/images/no_avatar.jpg'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { ProfilePictureModal } from '../../Components/profilePictureModal'
import { Context } from '../../Contexts'
import { Board, Container, Content, Form, ProfilePicture } from './profile.styles'

export const Profile = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false)
    const { user } = useContext(Context)

    const handleCloseProfilePictureModal = () => {
        setIsProfilePictureModalOpen(false)
    }

    return <Container>
        <Header isAuth/>
        <Content>
            <ProfilePictureModal 
                isOpen={isProfilePictureModalOpen}
                onRequestClose={handleCloseProfilePictureModal}
            />
            <Menu page={'profile'}/>
            <Board>
                <ProfilePicture>
                    <img src={noAvatar} alt='Sem foto de perfil' />
                    <BsFillCameraFill 
                        className='camera-icon'
                        onClick={() => setIsProfilePictureModalOpen(true)}
                    />
                </ProfilePicture>
                <Form>
                    <label htmlFor='name'>Nome:</label>
                    <input
                        id='name'
                        defaultValue={user?.name}
                    />
                    <label htmlFor='phone'>Telefone:</label>
                    <input
                        id='phone'
                        defaultValue={user?.phone}
                    />
                    <button>
                        SALVAR
                    </button>

                    <label htmlFor='email'>E-mail:</label>
                    <input
                        id='email'
                        defaultValue={user?.email}
                    />
                    <label htmlFor='confirm-email'>E-mail:</label>
                    <input
                        id='confirm-email'
                        placeholder='Confirme seu e-mail para alterar.'
                    />
                    <button>
                        ALTERAR E-MAIL
                    </button>

                    <label htmlFor='password'>Senha</label>
                    <div>
                        <input
                            id='password'
                            placeholder='Nova Senha'
                            type={showPassword ? 'text' : 'password'}
                            className='input-password'
                        />

                        {showPassword ?
                            <FaEyeSlash 
                                className='eye-icon'
                                onClick={() => setShowPassword(false)}
                            />
                            :
                            <FaEye 
                                className='eye-icon'
                                onClick={() => setShowPassword(true)}
                            />
                        }
                    </div>

                    <label htmlFor='confirm-password'>Confirmar senha</label>
                    <div>
                        <input
                            id='confirm-password'
                            placeholder='Confirmar Senha'
                            type={showPassword ? 'text' : 'password'}
                            className='input-password'
                        />

                        {showPassword ?
                            <FaEyeSlash 
                                className='eye-icon'
                                onClick={() => setShowPassword(false)}
                            />
                            :
                            <FaEye 
                                className='eye-icon'
                                onClick={() => setShowPassword(true)}
                            />
                        }
                    </div>
                    <button>
                        ALTERAR SENHA
                    </button>
                </Form>
            </Board>
        </Content>
    </Container>
}