import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PrimaryButton, TextHeaderForm } from '../../styles/utils.styles'
import { Container } from './messageSendEmail.styles'

interface MessageSendEmailProps {
    type: string
}

export const MessageSendEmail = ({ type }: MessageSendEmailProps) => {
    const navigate = useNavigate()

    return <Container className='animate-up'>
        <TextHeaderForm>
            E-mail enviado!
        </TextHeaderForm>

        {type === 'register' ?
            <>
                <p>
                    Conta criada com sucesso!
                </p>
                <p>
                    Confirme seu e-mail para fazer login.
                </p>
            </>
            :
            null
        }

        <p>
            Por favor, se necessário, verifique a caixa de spam.
        </p>


        <PrimaryButton
            onClick={() => navigate('/')}
        >
            LOGIN
        </PrimaryButton>
    </Container>
}