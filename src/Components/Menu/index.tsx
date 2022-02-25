import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { IoPerson } from 'react-icons/io5'
import { MdInsertChart, MdLogout } from 'react-icons/md'

import { Container, Option } from './menu.styles'

interface MenuProps {
    page: string
}

export const Menu = ({ page }: MenuProps) => {
    console.log(page === 'profile')
    return <Container>
        <Option
            isActive={page === 'profile'}
        >
            <IoPerson className='icon-belongs-menu'/>
            <p>Dados Pessoais</p>
        </Option>
    </Container>
}