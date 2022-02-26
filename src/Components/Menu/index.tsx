import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { IoPerson } from 'react-icons/io5'
import { MdInsertChart, MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { Container, Option } from './menu.styles'

interface MenuProps {
    page: string
}

export const Menu = ({ page }: MenuProps) => {
    const navigate = useNavigate()

    return <Container>
        <Option
            isActive={page === 'profile'}
            onClick={() => navigate('/profile')}
        >
            <IoPerson className='icon-belongs-menu'/>
            <p>Dados Pessoais</p>
        </Option>
        <Option
            isActive={page === 'transactions'}
            onClick={() => navigate('/transactions')}
        >
            <AiFillDollarCircle className='icon-belongs-menu'/>
            <p>Transações</p>
        </Option>
        <Option
            isActive={page === 'charts'}
            onClick={() => navigate('/charts')}
        >
            <MdInsertChart className='icon-belongs-menu'/>
            <p>Gráficos</p>
        </Option>
        <Option
            isActive={page === 'logout'}
            onClick={() => navigate('/')}
        >
            <MdLogout className='icon-belongs-menu'/>
            <p>Sair</p>
        </Option>

        <p className='text-amaw'>Amaw Finance 2022</p>
    </Container>
}