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

    const [transaction, setTransaction] = useState({
        description: '',
        amount: 0,
        type: 'income'
    })

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
                onChange={event => {
                    const _transaction = transaction
                    _transaction.description = event.target.value
                    setTransaction(_transaction)
                }}
            />

            <label htmlFor='amount' className='sr-only'>Valor</label>
            <input
                id='amount'
                type='number'
                placeholder='Valor'
                onChange={event => {
                    const _transaction = transaction
                    _transaction.amount = Number(event.target.value)
                    setTransaction(_transaction)
                }}
            />

            {/* <label htmlFor='installments' className='sr-only'>Parcelas</label>
            <input 
                id='installments'
                type='number'
                placeholder='Parcelas'
            /> */}

            <TransactionTypeContainer>
                <RadioBox
                    type='button'
                    onClick={() => {
                        const _transaction = transaction
                        _transaction.type = 'income'
                        setTransaction(_transaction)
                        setType('income')
                    }}
                    isActive={type === 'income'}
                    activeColor='green'
                >
                    <span>Receita</span>
                    <img src={IncomeIcon} alt='Receita' />
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => {
                        const _transaction = transaction
                        _transaction.type = 'expense'
                        setTransaction(_transaction)
                        setType('expense')
                    }}
                    isActive={type === 'expense'}
                    activeColor='red'
                >
                    <span>Despesa</span>
                    <img src={ExpenseIcon} alt='Despesa' />
                </RadioBox>
            </TransactionTypeContainer>

            <button 
                onClick={()=> console.log(transaction)}
                className='button'
            >
                SALVAR
            </button>
        </Container>
    </Modal>
}

// const convertCurrencyToNumber= () => {
//     console.log(amount)
//     let _amount = amount.split('R$ ')[1]

//     if (_amount.includes('.')) {
//         _amount = _amount.replace(/\./g, '')
//     }

//     _amount = _amount.replace(',','.')
        
//     const _newAmount = Number(_amount)
        
//     return _newAmount
// }