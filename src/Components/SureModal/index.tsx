import React from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ExpenseIcon from '../../assets/icons/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export const TransactionModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
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
    </Modal>
}