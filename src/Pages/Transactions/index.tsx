import React, { useState } from 'react'

import { Header } from '../../Components/Header'
import { Menu } from '../../Components/Menu'
import { Board, Container, Content } from './transactions.styles'

export const Transactions = () => {
    return <Container>
        <Header isAuth/>
        <Content>
            <Menu page={'transactions'}/>
            <Board>
            </Board>
        </Content>
    </Container>
}