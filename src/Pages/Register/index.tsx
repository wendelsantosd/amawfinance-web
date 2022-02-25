import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { PrimaryButton } from '../../styles/utils.styles'
import { Container, Form } from './register.style'


export const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    return <Container>
        <Header />
        <Form className='animate-up'>
            <p className='title'>Registre-se</p>

            <label htmlFor='name' className='sr-only'>Nome</label>
            <input
                id='name'
                placeholder='Nome'
                className='input-email'
            />
            
            <label htmlFor='email' className='sr-only'>E-mail</label>
            <input
                id='email'
                placeholder='E-mail'
                className='input-email'
            />

            <label htmlFor='password' className='sr-only'>Senha</label>
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

            <label htmlFor='confirm-password' className='sr-only'>Confirmar senha</label>
            <div className='container-input-password'>
                <input
                    id='confirm-password'
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

            <PrimaryButton
                type='submit'
            >
                REGISTRAR
            </PrimaryButton>

            <p className='question'>Já tem uma conta? 
                <span onClick={() => navigate('/')}>Clique aqui.</span>
            </p>
        </Form>
    </Container>
}