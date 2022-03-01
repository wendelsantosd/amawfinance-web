import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import CloseIcon from '../../assets/icons/close.svg'
import noAvatar from '../../assets/images/no_avatar.jpg'
import { Context } from '../../Contexts'
import api from '../../services/api'
import { Container } from './profilePictureModal.styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export const ProfilePictureModal = ({ isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [image, setImage] = useState<any>()
    const { user } = useContext(Context)
    const [loading, setLoading] = useState(false)

    const submit = async () => {
        setLoading(true)
        // try {
        // const { status } = await api.post(`/profile-picture/create?id=${user.id}`, formData, {
        //     'Content-Type': 'multipart/form-data'
        // })
        if (typeof image !== 'undefined') {
            const formData = new FormData()

            formData.append('file', image)
            
            const result = await api.request({
                method: 'post',
                route: `/profile-picture/create?id=${user.id}`,
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (result?.status === 201) {
                toast.success('Imagem salva com sucesso !')
                setLoading(false)
            } else {
                toast.error('Ocorreu um erro ao salvar imagem.')
                setLoading(false)
            }
        } else {
            toast.warning('Selecione uma imagem.')
            setLoading(false)
        }
            
        // } catch (err: any) {
        //     toast.log('Ocorreu algum erro')
        // }
    }

    return <Modal
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
            onClick={onRequestClose}
            className='react-modal-close'
        >
            <img src={CloseIcon} alt='Ícone de fechar' />
        </button>
        <Container>
            <h2>Alterar Foto de Perfil</h2>

            <img src={image ? URL.createObjectURL(image) : noAvatar} alt='foto de perfil' />

            <div>
                {image ? 
                    <button 
                        className='save'
                        onClick={event => {
                            event.preventDefault()
                            submit()
                        }}
                    >
                    Salvar
                    </button> 
                    : 
                    null
                }
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
                {image ? 
                    <button 
                        className='delete'
                        onClick={() => setImage('')}
                    >
                        Limpar
                    </button> 
                    :
                    null
                }
            </div>
        </Container>
    </Modal>
}