import React, { useContext, useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import CloseIcon from '../../assets/icons/close.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ExpenseIcon from '../../assets/icons/outcome.svg'
import { Context } from '../../Contexts'
import { Loading } from '../../styles/utils.styles'
import { Container, RadioBox, TransactionTypeContainer } from './transactionModal.styles'

interface EditTransactionModalProps {
    isOpen: boolean
    transactionId: string
    onRequestClose: () => void
}


export const EditTransactionModal = ({ isOpen, onRequestClose, transactionId}: EditTransactionModalProps) => {
    const { transaction, setTransaction, updateTransaction } = useContext(Context)
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setType(transaction.type)
    }, [transaction])


    const submit = async () => {
        setLoading(true)
        const result = await updateTransaction(transactionId)

        if (result?.status === 200) {
            setLoading(false)
            onRequestClose()
        } else {
            setLoading(false)
            toast.error('Ocorreu um erro ao editar transação.')
        }
    }

    return <Modal
        id='edit-transaction-modal'
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
    >
        <ToastContainer
            theme='colored'
            style={{ top: '13%' }}
        />
        <button
            disabled={loading}
            onClick={onRequestClose}
            className='react-modal-close'
        >
            <img src={CloseIcon} alt='Ícone de fechar' />
        </button>
        <Container>
            <h2>Editar transação</h2>

            <label htmlFor='description' className='sr-only'>Descrição</label>
            <input 
                id='description'
                placeholder='Descrição'
                defaultValue={transaction?.description}
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
                defaultValue={transaction?.amount}
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
                    id='btn-income'
                    disabled={loading}
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
                    id='btn-expense'
                    disabled={loading}
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
                id='btn-edit-transaction'
                disabled={loading}
                className='button'
                onClick={submit}
            >
                {loading ?
                    <Loading>
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'} />
                    </Loading>
                    :
                    'SALVAR'
                }
            </button>
        </Container>
    </Modal>
}

// const convertCurrencyToNumber= () => {
//     let _amount = amount.split('R$ ')[1]

//     if (_amount.includes('.')) {
//         _amount = _amount.replace(/\./g, '')
//     }

//     _amount = _amount.replace(',','.')
        
//     const _newAmount = Number(_amount)
        
//     return _newAmount
// }