import React from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close.svg'
import { Container } from './profilePictureModal.styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export const ProfilePictureModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
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
            <h2>Alterar Foto de Perfil</h2>

            <div>
                <button className='yes'>Sim</button>
                <button className='no'>Não</button>
            </div>
        </Container>
    </Modal>
}