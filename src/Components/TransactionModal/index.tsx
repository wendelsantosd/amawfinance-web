import React, { useState } from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ExpenseIcon from '../../assets/icons/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './transactionModal.styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export const TransactionModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [type, setType] = useState('income')

    return <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
    >
        <button
            onClick={onRequestClose}
            className='react-modal-close'
        >
            <img src={CloseIcon} alt='Ícone de fechar' />
        </button>
        <Container>
            <h2>Cadastrar transação</h2>

            <label htmlFor='description' className='sr-only'>Descrição</label>
            <input 
                id='description'
                placeholder='Descrição'
            />

            <label htmlFor='amount' className='sr-only'>Valor</label>
            <input
                id='amount'
                type='number'
                placeholder='Valor'
            />

            <label htmlFor='installments' className='sr-only'>Parcelas</label>
            <input 
                id='installments'
                type='number'
                placeholder='Parcelas'
            />

            <TransactionTypeContainer>
                <RadioBox
                    type='button'
                    onClick={() => { setType('income') }}
                    isActive={type === 'income'}
                    activeColor='green'
                >
                    <span>Receita</span>
                    <img src={IncomeIcon} alt='Receita' />
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => { setType('expense') }}
                    isActive={type === 'expense'}
                    activeColor='red'
                >
                    <span>Despesa</span>
                    <img src={ExpenseIcon} alt='Despesa' />
                </RadioBox>
            </TransactionTypeContainer>

            <button className='button'>
                SALVAR
            </button>
        </Container>
    </Modal>
}