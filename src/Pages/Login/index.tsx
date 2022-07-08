import React, { useContext, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Header } from '../../Components/Header'
import { Context } from '../../Contexts'
import api from '../../services/api'
import { ContainerPasswordInput, ErrorMessage, Form, Loading, PrimaryButton, PrimaryContainer, PrimaryInput, TextHeaderForm, TextQuestion } from '../../styles/utils.styles'
import { GoogleButton } from './login.style'





export const Login = () => {
    const { userData } = useContext(Context)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')

    const navigate = useNavigate()

    const validate = () => {
        let _validateEmail = false
        let _validatePassword = false

        if (credentials.email === '' || credentials.email.length < 6 || !credentials.email.includes('@')) {
            setErrorMessageEmail('Preencha corretamente.')
        } else {
            setErrorMessageEmail('')
            _validateEmail = true
        }

        if (credentials.password === '' || credentials.password.length < 4) {
            setErrorMessagePassword('Preencha corretamente.')
        } else {
            setErrorMessagePassword('')
            _validatePassword = true
        }

        return _validateEmail && _validatePassword
    }

    const submit = async () => {
        const isValid = validate()

        if (isValid) {
            setLoading(true)

            const result = await api.request({
                method: 'post',
                route: '/user/auth',
                body: credentials,
                store: true
            })

            if (result?.status === 200) {
                const response = await userData()

                if (response?.status === 200) {
                    navigate('/transactions')
                } else {
                    setLoading(false)
                    toast.error('Não foi possível obter dados.')
                }
            } else {
                setLoading(false)
                toast.error('Usuário ou senha incorretas.')
            }
        }
    }

    const googleSubmit = async (response: any) => {
        const idToken = response.tokenObj.id_token
        const name = response.profileObj.name

        const result = await api.request({
            method: 'post',
            route: '/user/google-auth',
            body: {
                idToken,
                name
            },
            store: true
        })

        if (result?.status === 200) {
            const response = await userData()

            if (response?.status === 200) {
                navigate('/transactions')
            } else {
                toast.error('Não foi possível obter dados.')
            }
        } else {
            toast.error('Ocorreu um erro no login com a Google.')
        }
    }

    const errorGoogleLogin = async (response: any) => {
        console.log(response)
    }

    return <PrimaryContainer>
        <ToastContainer
            theme='colored'
            style={{ top: '13%' }}
        />
        <Header isAuth={false} />
        <Form className='animate-up'>
            <TextHeaderForm className='title'>Entrar</TextHeaderForm>
            <TextQuestion 
                className='question'
            >
                Não tem uma conta?
                <span
                    id='redirect-register'
                    onClick={() => {
                        if (!loading) navigate('/register')
                    }}
                >
                    {' Clique aqui.'}
                </span>
            </TextQuestion>


            <label htmlFor='email' className='sr-only'>E-mail</label>
            <PrimaryInput
                id='email'
                className={errorMessageEmail !== '' ? 'error' : ''}
                placeholder='E-mail'
                onChange={event => {
                    const _credentials = credentials
                    _credentials.email = event.target.value
                    setCredentials(_credentials)
                }}
            />
            {errorMessageEmail !== '' ?
                <ErrorMessage>
                    {errorMessageEmail}
                </ErrorMessage>
                :
                null
            }

            <label htmlFor='password' className='sr-only'>Senha</label>
            <ContainerPasswordInput
                className={errorMessagePassword !== '' ? 'error' : ''}
            >
                <input
                    id='password'
                    placeholder='Senha'
                    type={showPassword ? 'text' : 'password'}
                    className='input-password'
                    onChange={event => {
                        const _credentials = credentials
                        _credentials.password = event.target.value
                        setCredentials(_credentials)
                    }}
                />

                {showPassword ?
                    <FaEye 
                        className='eye-icon'
                        onClick={() => setShowPassword(false)}
                    /> 
                    :
                    <FaEyeSlash 
                        className='eye-icon'
                        onClick={() => setShowPassword(true)}
                    />
                }
            </ContainerPasswordInput>
            {errorMessagePassword !== '' ?
                <ErrorMessage>
                    {errorMessagePassword}
                </ErrorMessage>
                :
                null
            }

            <TextQuestion className='question'>
                Esqueceu sua senha?
                <span 
                    id='redirect-recover-password'
                    onClick={() => {
                        if (!loading) navigate('/recover-password')
                    }}
                >
                    {' Clique aqui.'}
                </span>
            </TextQuestion>

            <PrimaryButton
                id='btn-auth'
                type='submit'
                disabled={loading}
                onClick={event => {
                    event.preventDefault()
                    submit()
                }}
            >
                {loading ?
                    <Loading>
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'} />
                    </Loading>
                    :
                    'ENTRAR'
                }
            </PrimaryButton>

            <GoogleLogin
                clientId='987123219909-tlbchc36o51ahjr96bkbc6rpfekhh4vk.apps.googleusercontent.com'
                render={renderProps =>
                    <GoogleButton>
                        <button
                            id='btn-google-auth'
                            disabled={loading}
                            onClick={event => {
                                event.preventDefault()
                                renderProps.onClick()
                            }}
                        >
                            ENTRAR COM A GOOGLE
                        </button>

                        <FcGoogle className='google-icon' />
                    </GoogleButton>
                }
                onSuccess={googleSubmit}
                onFailure={errorGoogleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </Form>
    </PrimaryContainer>
}