import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Header } from '../../Components/Header'
import { PrimaryButton } from '../../styles/utils.styles'
import { Container, Form, GoogleButton } from './login.style'


export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return <Container>
        <Header />
        <Form className='animate-up'>
            <p className='title'>Entrar</p>
            <p className='question'>Não tem uma conta? <span>Clique aqui.</span></p>

            <label htmlFor='email' className='sr-only'>E-mail</label>
            <input
                id='email'
                placeholder='E-mail'
                className='input-email'
            />

            <label htmlFor='password' className='sr-only'>E-mail</label>

            <div className='container-input-password'>
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
            </div>

            <p className='question'>Esqueceu sua senha? <span>Clique aqui.</span></p>

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
    </Container>
}