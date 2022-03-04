import React from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close.svg'
import { Container } from './sureModal.styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
    onRequestDelete: () => Promise<void>
}

export const SureModal = ({ isOpen, onRequestClose, onRequestDelete}: NewTransactionModalProps) => {

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
            <h2>Você tem certeza ?</h2>

            <div>
                <button 
                    className='yes'
                    onClick={() => {
                        onRequestDelete()
                        onRequestClose()
                    }}
                >
                    Sim
                </button>
                <button 
                    className='no'
                    onClick={onRequestClose}
                >
                    Não
                </button>
            </div>
        </Container>
    </Modal>
}