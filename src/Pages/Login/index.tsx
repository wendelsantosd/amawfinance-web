import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { ContainerPasswordInput, Form, PrimaryButton, PrimaryContainer, PrimaryInput, TextHeaderForm, TextQuestion } from '../../styles/utils.styles'
import { GoogleButton } from './login.style'



export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    return <PrimaryContainer>
        <Header />
        <Form className='animate-up'>
            <TextHeaderForm className='title'>Entrar</TextHeaderForm>
            <TextQuestion className='question'>Não tem uma conta? <span onClick={() => navigate('/register')}>Clique aqui.</span></TextQuestion>

            <label htmlFor='email' className='sr-only'>E-mail</label>
            <PrimaryInput
                id='email'
                placeholder='E-mail'
                className='input-email'
            />

            <label htmlFor='password' className='sr-only'>Senha</label>
            <ContainerPasswordInput className='container-input-password'>
                <input
                    id='password'
                    placeholder='Senha'
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
            </ContainerPasswordInput>

            <TextQuestion className='question'>Esqueceu sua senha? <span>Clique aqui.</span></TextQuestion>

            <PrimaryButton
                type='submit'
            >
                ENTRAR
            </PrimaryButton>

            <GoogleButton>
                <button>
                    ENTRAR COM A GOOGLE
                </button>

                <FcGoogle className='google-icon' />
            </GoogleButton>
        </Form>
    </PrimaryContainer>
}