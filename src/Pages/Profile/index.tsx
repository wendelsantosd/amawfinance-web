import React, { useContext, useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import ReactLoading from 'react-loading'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import noAvatar from '../../assets/images/no_avatar.jpg'
import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { ProfilePictureModal } from '../../Components/profilePictureModal'
import { Context } from '../../Contexts'
import format from '../../services/format'
import { Loading } from '../../styles/utils.styles'
import { Board, Container, Content, ErrorMessage, Form, ProfilePicture } from './profile.styles'


export const Profile = () => {
    const { user, setUser, userUpdate, emailUpdate, passwordUpdate } = useContext(Context)
    const [showPassword, setShowPassword] = useState(false)
    const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorMessageName, setErrorMessageName] = useState('')
    const [errorMessagePhone, setErrorMessagePhone] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessageConfirmEmail, setErrorMessageConfirmEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')
    const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState('')

    const handleCloseProfilePictureModal = () => {
        setIsProfilePictureModalOpen(false)
    }

    const validateData = () => {
        console.log(user.phone.length)
        let _validateName = false
        let _validatePhone = false

        if (user.name === '') {
            setErrorMessageName('Preencha corretamente.')
        } else {
            setErrorMessageName('')
            _validateName = true
        }

        if (user.phone.length === 11 || user.phone.length < 1) {
            setErrorMessagePhone('')
            _validatePhone = true
        } else {
            setErrorMessagePhone('Número inválido.')
        }


        return _validateName && _validatePhone
    }

    const handleSubmitUpdateData = async () => {
        const isValid = validateData()

        if (isValid) {
            setLoading1(true)
            const result = await userUpdate()

            if (result?.status === 200) {
                toast.success('Alterado com sucesso !')
                setLoading1(false)
            } else {
                toast.error('Ocorreu um erro ao alterar.')
                setLoading1(false)
            }
        }
    }

    const validateEmail = () => {
        let _validateEmail = false
        let _validateConfirmEmail = false

        if (user.email === '' || user.email.length < 6 || !user.email.includes('@')) {
            setErrorMessageEmail('Preencha corretamente.')
        } else {
            setErrorMessageEmail('')
            _validateEmail = true
        }

        if (confirmEmail === '' || confirmEmail.length < 6 || !confirmEmail.includes('@')) {
            setErrorMessageConfirmEmail('Preencha corretamente.')
        } else if (confirmEmail !== user?.email) {
            setErrorMessageConfirmEmail('E-mail não confere.')
        } else {
            setErrorMessageConfirmEmail('')
            _validateConfirmEmail = true
        }

        return _validateEmail && _validateConfirmEmail 
    }

    const handleSubmitUpdateEmail = async () => {
        const isValid = validateEmail()

        if (isValid) {
            await emailUpdate(user?.email)

            toast.success('E-mail enviando para confirmação !')
        }
    }

    const validatePassword = () => {
        let _validatePassword = false
        let _validateConfirmPassword = false


        if (password === '' || password.length < 4) {
            setErrorMessagePassword('Preencha corretamente.')
        } else {
            setErrorMessagePassword('')
            _validatePassword = true
        }

        if (confirmPassword === '' || confirmPassword.length < 4) {
            setErrorMessageConfirmPassword('Preencha corretamente.')
        } else if (confirmPassword !== password) {
            setErrorMessageConfirmPassword('Senhas não conferem.')
        }else {
            setErrorMessageConfirmPassword('')
            _validateConfirmPassword = true
        }

        return _validatePassword && _validateConfirmPassword
    }

    const handleSubmitUpdatePassword = async () => {
        const isValid = validatePassword()

        if (isValid) {
            setLoading2(true)
            const result = await passwordUpdate(password)

            if (result?.status === 200) {
                setLoading2(false)
                toast.success('Senha alterada com sucesso !')
            } else {
                setLoading2(false)
                toast.error('Ocorreu um erro ao alterar a senha.')
            }
        }
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
                        id='camera-icon'
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
                        id='btn-save'
                        disabled={loading1 || loading2}
                        onClick={event => {
                            event.preventDefault()
                            handleSubmitUpdateData()
                        }}
                    >
                        {loading1 ?
                            <Loading>
                                <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'20px'} width={'20px'} />
                            </Loading>
                            :
                            'SALVAR'
                        }
                    </button>

                    <label htmlFor='email'>E-mail:</label>
                    <input
                        id='email'
                        className={errorMessageEmail !== '' ? 'error' : ''}
                        defaultValue={user?.email}
                        onChange={event => {
                            const _user = user
                            _user.email = event.target.value
                            setUser(user)
                        }}
                    />
                    {errorMessageEmail !== '' ?
                        <ErrorMessage>
                            {errorMessageEmail}
                        </ErrorMessage>
                        :
                        null    
                    }

                    <label htmlFor='confirm-email'>Confirmar e-mail:</label>
                    <input
                        id='confirm-email'
                        className={errorMessageConfirmEmail !== '' ? 'error' : ''}
                        placeholder='Confirme seu e-mail para alterar.'
                        onChange={event => setConfirmEmail(event.target.value)}
                    />
                    {errorMessageConfirmEmail !== '' ?
                        <ErrorMessage>
                            {errorMessageConfirmEmail}
                        </ErrorMessage>
                        :
                        null    
                    }

                    <button
                        id='btn-alter-email'
                        disabled={loading1 || loading2}
                        onClick={event => {
                            event.preventDefault()
                            handleSubmitUpdateEmail()
                        }}
                    >
                            ALTERAR E-MAIL
                    </button>

                    <label htmlFor='password'>Senha</label>
                    <div 
                        className={errorMessagePassword !== '' ? 'container-password error' : 'container-password'}
                    >
                        <input
                            id='password'
                            placeholder='Nova Senha'
                            type={showPassword ? 'text' : 'password'}
                            className='input-password'
                            onChange={event => setPassword(event.target.value)}
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
                    {errorMessagePassword !== '' ?
                        <ErrorMessage>
                            {errorMessagePassword}
                        </ErrorMessage>
                        :
                        null    
                    }

                    <label htmlFor='confirm-password'>Confirmar senha</label>
                    <div
                        className={errorMessageConfirmPassword !== '' ? 'container-password error' : 'container-password'}
                    >
                        <input
                            id='confirm-password'
                            placeholder='Confirmar Senha'
                            type={showPassword ? 'text' : 'password'}
                            className='input-password'
                            onChange={event => setConfirmPassword(event.target.value)}
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
                    {errorMessageConfirmPassword !== '' ?
                        <ErrorMessage>
                            {errorMessageConfirmPassword}
                        </ErrorMessage>
                        :
                        null    
                    }

                    <button
                        id='btn-alter-password'
                        disabled={loading1 || loading2}
                        onClick={event => {
                            event.preventDefault()
                            handleSubmitUpdatePassword()
                        }}
                    >
                        {loading2 ?
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