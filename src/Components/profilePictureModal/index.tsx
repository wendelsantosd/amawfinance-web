import React, { useState } from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close.svg'
import noAvatar from '../../assets/images/no_avatar.jpg'
import { Container } from './profilePictureModal.styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export const ProfilePictureModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [image, setImage] = useState<any>()

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

            <img src={image ? URL.createObjectURL(image) : noAvatar} alt='foto de perfil' />

            <div>
                {image ? <button className='save'>Salvar</button> : null}
                <button className='new'>
                    <label htmlFor='upload'>Nova Foto</label>
                    <input
                        id='upload'
                        type='file'
                        accept=".jpg,.jpeg,.png"
                        onChange={event => {
                            event?.target?.files ? setImage(event?.target?.files[0]) : null
                        }}
                    />
                </button>
                {!image ? <button className='delete'>Apagar Foto</button> : null}
            </div>
        </Container>
    </Modal>
}