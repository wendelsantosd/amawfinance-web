import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import  ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { Header } from '../../Components/Header'
import { MessageSendEmail } from '../../Components/MessageSendEmail'
import api from '../../services/api'
import { ContainerPasswordInput, PrimaryButton, PrimaryInput, TextHeaderForm, TextQuestion, Form, PrimaryContainer, ErrorMessage, Loading } from '../../styles/utils.styles'

import 'react-toastify/dist/ReactToastify.css'


export const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [successRegister, setSuccessRegister] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorMessageName, setErrorMessageName] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')
    const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState('')

    const validate = () => {
        let _validateName = false
        let _validateEmail = false
        let _validatePassword = false
        let _validateConfirmPassword = false

        if (user.name === '') {
            setErrorMessageName('Preencha corretamente.')
        } else {
            setErrorMessageName('')
            _validateName = true
        }

        if (user.email === '' || user.email.length < 6 || !user.email.includes('@')) {
            setErrorMessageEmail('Preencha corretamente.')
        } else {
            setErrorMessageEmail('')
            _validateEmail = true
        }

        if (user.password === '' || user.password.length < 4) {
            setErrorMessagePassword('Preencha corretamente.')
        } else {
            setErrorMessagePassword('')
            _validatePassword = true
        }

        if (confirmPassword === '' || confirmPassword.length < 4) {
            setErrorMessageConfirmPassword('Preencha corretamente.')
        } else if (confirmPassword !== user.password) {
            setErrorMessageConfirmPassword('Senhas não conferem.')
        }else {
            setErrorMessageConfirmPassword('')
            _validateConfirmPassword = true
        }

        return _validateName && _validateEmail && _validatePassword && _validateConfirmPassword
    }

    const submit = async () => {
        const isValid = validate()

        if (isValid) {
            setLoading(true)
            const result = await api.request({
                method: 'post',
                route: '/user/create',
                body: user
            })

            if (result?.status === 201) {
                setLoading(false)
                setSuccessRegister(true)
                toast.success('Conta criada com sucesso!')
            } else if (result?.status === 400) {
                setLoading(false)
                toast.error('E-mail já está em uso.')
            } else {
                setLoading(false)
                toast.error('Ocorreu algum erro.')
            }
        }
    }

    return <PrimaryContainer>
        <ToastContainer
            theme='colored'
            style={{ top: '13%' }}
        />
        <Header isAuth={false}/>
        {successRegister ?
            <MessageSendEmail 
                type='register'
            />
            :
            <Form className='animate-up'>
                <TextHeaderForm>Registre-se</TextHeaderForm>

                <label htmlFor='name' className='sr-only'>Nome</label>
                <PrimaryInput
                    id='name'
                    className={errorMessageName !== '' ? 'error' : ''}
                    placeholder='Nome'
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
            
                <label htmlFor='email' className='sr-only'>E-mail</label>
                <PrimaryInput
                    id='email'
                    className={errorMessageEmail !== '' ? 'error' : ''}
                    placeholder='E-mail'
                    onChange={event => {
                        const _user = user
                        _user.email = event.target.value
                        setUser(_user)
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
                            const _user = user
                            _user.password = event.target.value
                            setUser(_user)
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
                {errorMessagePassword !== '' ?
                    <ErrorMessage>
                        {errorMessagePassword}
                    </ErrorMessage>
                    :
                    null    
                }


                <label htmlFor='confirm-password' className='sr-only'>Confirmar senha</label>
                <ContainerPasswordInput
                    className={errorMessageConfirmPassword !== '' ? 'error' : ''}
                >
                    <input
                        id='confirm-password'
                        placeholder='Confirmar Senha'
                        type={showPassword ? 'text' : 'password'}
                        className='input-password'
                        onChange={event => {
                            setConfirmPassword(event.target.value)
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
                {errorMessageConfirmPassword !== '' ?
                    <ErrorMessage>
                        {errorMessageConfirmPassword}
                    </ErrorMessage>
                    :
                    null    
                }


                <PrimaryButton
                    onClick={event => {
                        event.preventDefault()
                        submit()
                    }}
                    disabled={loading}
                >
                    {loading ?
                        <Loading>
                            <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'}  />
                        </Loading>
                        :
                        'REGISTRAR'
                    }
                </PrimaryButton>

                <TextQuestion className='question'>
                    Já tem uma conta?
                    <span onClick={() => {
                        if (!loading) navigate('/')
                    }}>
                        {' Clique aqui.'}
                    </span>
                </TextQuestion>
            </Form>
        }
    </PrimaryContainer>
}