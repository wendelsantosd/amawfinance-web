import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { MessageSendEmail } from '../../Components/MessageSendEmail'
import { Form, PrimaryButton, PrimaryContainer, PrimaryInput, TextHeaderForm, TextQuestion } from '../../styles/utils.styles'


export const RecoverPassword = () => {
    const navigate = useNavigate()
    const [successRecover, setSuccessRecover] = useState(false)

    return <PrimaryContainer>
        <Header isAuth={false} />
        {successRecover ?
            <MessageSendEmail 
                type='recover'
            />
            :
            <Form>
                <TextHeaderForm>Recuperar Senha</TextHeaderForm>
                <PrimaryInput 
                    placeholder='E-mail'
                />

                <PrimaryButton>
                RECUPERAR
                </PrimaryButton>

                <TextQuestion>Login? <span onClick={() => navigate('/')}>Clique aqui.</span></TextQuestion>
            </Form>
        }
    </PrimaryContainer>
}