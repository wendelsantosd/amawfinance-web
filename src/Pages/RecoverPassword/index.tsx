import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { Header } from '../../Components/Header'
import { MessageSendEmail } from '../../Components/MessageSendEmail'
import api from '../../services/api'
import { ErrorMessage, Form, PrimaryButton, PrimaryContainer, PrimaryInput, TextHeaderForm, TextQuestion } from '../../styles/utils.styles'

import 'react-toastify/dist/ReactToastify.css'

export const RecoverPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [successRecover, setSuccessRecover] = useState(false)

    const [errorMessageEmail, setErrorMessageEmail] = useState('')

    const validate = () => {
        let _validateEmail = false

        if (email === '' || email.length < 6 || !email.includes('@')) {
            setErrorMessageEmail('Preencha corretamente.')
        } else {
            setErrorMessageEmail('')
            _validateEmail = true
        }

        return _validateEmail
    }

    const submit = async () => {
        const isValid = validate()

        if (isValid) {
            await api.request({
                method: 'get',
                route: '/user/recover-password',
                query: {
                    email
                }
            })

            setSuccessRecover(true)
            toast.success('E-mail enviado !')
        }
    }

    return <PrimaryContainer>
        <ToastContainer
            theme='colored'
            style={{ top: '13%' }}
        />
        <Header isAuth={false} />
        {successRecover ?
            <MessageSendEmail 
                type='recover'
            />
            :
            <Form>
                <TextHeaderForm>Recuperar Senha</TextHeaderForm>

                <label htmlFor='email' className='sr-only'>E-mail</label>
                <PrimaryInput 
                    id='email'
                    className={errorMessageEmail !== '' ? 'error' : ''}
                    placeholder='E-mail'
                    onChange={event => {
                        setEmail(event.target.value)
                    }}
                />
                {errorMessageEmail !== '' ?
                    <ErrorMessage>
                        {errorMessageEmail}
                    </ErrorMessage>
                    :
                    null    
                }

                <PrimaryButton
                    id='btn-recover-password'
                    onClick={event => {
                        event.preventDefault()
                        submit()
                    }}
                >
                    RECUPERAR
                </PrimaryButton>

                <TextQuestion>Login? 
                    <span
                        id='rp-redirect-login'
                        onClick={() => navigate('/login')}
                    >
                        Clique aqui.
                    </span>
                </TextQuestion>
            </Form>
        }
    </PrimaryContainer>
}