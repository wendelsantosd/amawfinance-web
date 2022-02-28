import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { Header } from '../../Components/Header'
import { ContainerPasswordInput, ErrorMessage, Form, PrimaryButton, PrimaryContainer, TextHeaderForm } from '../../styles/utils.styles'

export const AlterPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
    }

    return <PrimaryContainer>
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
                ALTERAR
            </PrimaryButton>
        </Form>
    </PrimaryContainer>
}