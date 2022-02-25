import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { MessageSendEmail } from '../../Components/MessageSendEmail'
import { ContainerPasswordInput, PrimaryButton, PrimaryInput, TextHeaderForm, TextQuestion, Form, PrimaryContainer } from '../../styles/utils.styles'


export const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [successRegister, setSuccessRegister] = useState(false)
    const navigate = useNavigate()

    return <PrimaryContainer>
        <Header />
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
                    placeholder='Nome'
                />
            
                <label htmlFor='email' className='sr-only'>E-mail</label>
                <PrimaryInput
                    id='email'
                    placeholder='E-mail'
                />

                <label htmlFor='password' className='sr-only'>Senha</label>
                <ContainerPasswordInput>
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

                <label htmlFor='confirm-password' className='sr-only'>Confirmar senha</label>
                <ContainerPasswordInput>
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
                </ContainerPasswordInput>

                <PrimaryButton
                    type='submit'
                >
                REGISTRAR
                </PrimaryButton>

                <TextQuestion className='question'>Já tem uma conta? 
                    <span onClick={() => navigate('/')}> Clique aqui.</span>
                </TextQuestion>
            </Form>
        }
    </PrimaryContainer>
}