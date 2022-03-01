import React, { useContext, useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Loading from 'react-loading'
import ReactLoading from 'react-loading'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import noAvatar from '../../assets/images/no_avatar.jpg'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { ProfilePictureModal } from '../../Components/profilePictureModal'
import { Context } from '../../Contexts'
import format from '../../services/format'
import { Board, Container, Content, ErrorMessage, Form, ProfilePicture } from './profile.styles'


export const Profile = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const { user, setUser, userUpdate } = useContext(Context)

    const [errorMessageName, setErrorMessageName] = useState('')
    const [errorMessagePhone, setErrorMessagePhone] = useState('')

    const handleCloseProfilePictureModal = () => {
        setIsProfilePictureModalOpen(false)
    }

    const validateData = () => {
        let _validateName = false
        let _validatePhone = false

        if (user.name === '') {
            setErrorMessageName('Preencha corretamente.')
        } else {
            setErrorMessageName('')
            _validateName = true
        }

        if (user.phone.length === 12 || user.phone.length < 1) {
            setErrorMessagePhone('')
            _validatePhone = true
        } else {
            setErrorMessagePhone('Número inválido.')
        }


        return _validateName && _validatePhone
    }

    const handleSubmitUpdateData = async () => {
        const isValid = validateData()
    }

    return <Container>
        <ToastContainer 
            theme='colored'
            style={{ top: '13%'}}
        />
        <Header isAuth/>
        <Content>
            <ProfilePictureModal 
                isOpen={isProfilePictureModalOpen}
                onRequestClose={handleCloseProfilePictureModal}
            />
            <Menu page={'profile'}/>
            <Board>
                <ProfilePicture>
                    <img src={user?.picture_url ? user?.picture_url : noAvatar} alt='Sem foto de perfil' />
                    <BsFillCameraFill 
                        className='camera-icon'
                        onClick={() => setIsProfilePictureModalOpen(true)}
                    />
                </ProfilePicture>
                <Form>
                    <label htmlFor='name'>Nome:</label>
                    <input
                        id='name'
                        className={errorMessageName !== '' ? 'error' : ''}
                        defaultValue={user?.name}
                        onChange={event => {
                            const _user = user
                            _user.name = event.target.value
                            setUser(_user)
                        }}
                    />
                    {errorMessageName !== '' ?
                        <ErrorMessage>
                            {errorMessageName}
                        </ErrorMessage>
                        :
                        null    
                    }
                    
                    <label htmlFor='phone'>Telefone:</label>
                    <input
                        id='phone'
                        className={errorMessagePhone !== '' ? 'error' : ''}
                        defaultValue={format.phone(user?.phone)}
                        onChange={event => {
                            const _user = user
                            _user.phone = format.getOnlyNumbers(event.target.value)
                            event.target.value = format.phone(event.target.value)
                            setUser(_user)
                        }}
                    />
                    {errorMessagePhone !== '' ?
                        <ErrorMessage>
                            {errorMessagePhone}
                        </ErrorMessage>
                        :
                        null    
                    }

                    <button
                        onClick={event => {
                            event.preventDefault()
                            handleSubmitUpdateData()
                        }}
                    >
                        {loading ?
                            <Loading>
                                <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'} />
                            </Loading>
                            :
                            'SALVAR'
                        }
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
                        {loading ?
                            <Loading>
                                <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'} />
                            </Loading>
                            :
                            'ALTERAR E-MAIL'
                        }
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
                        {loading ?
                            <Loading>
                                <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'} />
                            </Loading>
                            :
                            'ALTERAR SENHA'
                        }
                    </button>
                </Form>
            </Board>
        </Content>
    </Container>
}