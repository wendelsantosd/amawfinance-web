import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { Header } from '../../Components/Header'
import { ContainerPasswordInput, Form, PrimaryButton, PrimaryContainer, TextHeaderForm } from '../../styles/utils.styles'

export const AlterPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    return <PrimaryContainer>
        <Header isAuth={false}/>
        <Form>
            <TextHeaderForm>Alterar Senha</TextHeaderForm>

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
            </ContainerPasswordInput>

            <PrimaryButton
                type='submit'
            >
                ALTERAR
            </PrimaryButton>
        </Form>
    </PrimaryContainer>
}