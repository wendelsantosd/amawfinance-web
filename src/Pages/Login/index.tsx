import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import  ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { Header } from '../../Components/Header'
import { ContainerPasswordInput, Form, Loading, PrimaryButton, PrimaryContainer, PrimaryInput, TextHeaderForm, TextQuestion } from '../../styles/utils.styles'
import { GoogleButton } from './login.style'

import 'react-toastify/dist/ReactToastify.css'



export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(credentials)
        toast.error('Deu erro')
    }

    return <PrimaryContainer>
        <ToastContainer
            theme='colored'
            style={{ top: '13%' }}
        />
        <Header isAuth={false} />
        <Form className='animate-up' onSubmit={submit}>
            <TextHeaderForm className='title'>Entrar</TextHeaderForm>
            <TextQuestion className='question'>
                Não tem uma conta?
                <span onClick={() => {
                    if (!loading) navigate('/register')
                }}>
                    {' Clique aqui.'}
                </span>
            </TextQuestion>


            <label htmlFor='email' className='sr-only'>E-mail</label>
            <PrimaryInput
                id='email'
                placeholder='E-mail'
                className='input-email'
                onChange={event => {
                    const _credentials = credentials
                    _credentials.email = event.target.value
                    setCredentials(_credentials)
                }}
            />

            <label htmlFor='password' className='sr-only'>Senha</label>
            <ContainerPasswordInput className='container-input-password'>
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
            </ContainerPasswordInput>

            <TextQuestion className='question'>
                Esqueceu sua senha?
                <span onClick={() => {
                    if (!loading) navigate('/recover-password')
                }}>
                    {' Clique aqui.'}
                </span>
            </TextQuestion>

            <PrimaryButton
                type='submit'
                disabled={loading}
            >   {loading ?
                    <Loading>
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'}  />
                    </Loading>
                    :
                    'ENTRAR'
                }
            </PrimaryButton>

            <GoogleButton>
                <button
                    disabled={loading}
                >
                    ENTRAR COM A GOOGLE
                </button>

                <FcGoogle className='google-icon' />
            </GoogleButton>
        </Form>
    </PrimaryContainer>
}