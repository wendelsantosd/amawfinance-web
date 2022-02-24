import React from 'react'

import { Header } from '../../Components/Header'
import { Container, Form } from './login.style'

export const Login = () => {
    return <Container>
        <Header />
        <Form className='animate-up'>
            <p className='title'>Entrar</p>
            <p className='question'>Não tem uma conta ? <span>Clique aqui.</span></p>
            
            <label htmlFor='email' className='sr-only'>E-mail</label>
            <input 
                id='email'
                placeholder='E-mail'
            />

            <label htmlFor='password' className='sr-only'>E-mail</label>
            <input 
                id='password'
                placeholder='Senha'
                type='password'
            />

            <button
                type='submit'
            >
                ENTRAR
            </button>

            <button>
                ENTRAR COM A GOOGLE
            </button>
        </Form>
    </Container>
}