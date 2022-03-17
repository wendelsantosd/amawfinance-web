import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { IoPerson } from 'react-icons/io5'
import { MdInsertChart, MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import packageInfo from '../../../package.json'
import storage from '../../services/storage'
import { Container, Option } from './menu.styles'

interface MenuProps {
    page: string
}

export const Menu = ({ page }: MenuProps) => {
    const navigate = useNavigate()

    return <Container>
        <Option
            id='option-profile'
            isActive={page === 'profile'}
            onClick={() => navigate('/profile')}
        >
            <IoPerson className='icon-belongs-menu' />
            <p>Meus Dados</p>
        </Option>
        <Option
            id='option-transactions'
            isActive={page === 'transactions'}
            onClick={() => navigate('/transactions')}
        >
            <AiFillDollarCircle className='icon-belongs-menu' />
            <p>Transações</p>
        </Option>
        <Option
            id='option-charts'
            isActive={page === 'charts'}
            onClick={() => navigate('/charts')}
        >
            <MdInsertChart className='icon-belongs-menu' />
            <p>Gráficos</p>
        </Option>
        <Option
            id='option-logout'
            isActive={page === 'logout'}
            onClick={() => {
                storage.clear('all')
                navigate('/login')
            }}
        >
            <MdLogout className='icon-belongs-menu' />
            <p>Sair</p>
        </Option>

        <div className='text-amaw-version'>
            <p>Amaw Finance 2022</p>
            <p>v.{packageInfo.version}</p>
        </div>
    </Container>
}