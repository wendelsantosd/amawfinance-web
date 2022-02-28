import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import  ReactLoading from 'react-loading'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Header } from '../../Components/Header'
import api from '../../services/api'
import { ContainerPasswordInput, ErrorMessage, Form, Loading, PrimaryButton, PrimaryContainer, TextHeaderForm } from '../../styles/utils.styles'

export const AlterPassword = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [errorMessagePassword, setErrorMessagePassword] = useState('')
    const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState('')

    const validate = () => {
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

    const submit = async () => {
        const isValid = validate()

        if (isValid) {
            setLoading(true)
            const result = await api.request({
                method: 'post',
                route: `/user/modify-password-by-recover/${token}`,
                body: {
                    password
                }
            })

            if (result?.status === 200) {
                setLoading(false)
                toast.success('Senha alterada com sucesso!')
                
                setTimeout(() => navigate('/'), 1000)
            } else {
                setLoading(false)
                toast.error('Ocorreu um erro!')
            }
        }
    }

    return <PrimaryContainer>
        <ToastContainer
            theme='colored'
            style={{ top: '13%' }}
        />
        <Header isAuth={false}/>
        <Form>
            <TextHeaderForm>Alterar Senha</TextHeaderForm>

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
                        setPassword(event.target.value)
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
            >
                {loading ?
                    <Loading>
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'}  />
                    </Loading>
                    :
                    'ALTERAR'
                }
            </PrimaryButton>
        </Form>
    </PrimaryContainer>
}