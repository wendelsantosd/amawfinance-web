import React, { useContext, useState } from 'react'
import ReactLoading from 'react-loading'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import CloseIcon from '../../assets/icons/close.svg'
import noAvatar from '../../assets/images/no_avatar.jpg'
import { Context } from '../../Contexts'
import api from '../../services/api'
import { Loading } from '../../styles/utils.styles'
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
    }

    const handleSubmitDeleteProfilePicture = async () => {
        setLoading(true)

        const result = await api.request({
            method: 'delete',
            route: '/profile-picture/delete',
            query: {
                id: user.id
            }
        })
        
        if (result?.status === 200) {
            toast.success('Imagem removida com sucesso !')
            setLoading(false)
        } else {
            toast.error('Ocorreu um erro ao remover a imagem.')
            setLoading(false)
        }
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
            disabled={loading}
        >
            <img src={CloseIcon} alt='Ícone de fechar' />
        </button>
        <Container>
            <h2>Alterar Foto de Perfil</h2>

            <img src={image ? URL.createObjectURL(image) : noAvatar} alt='foto de perfil' />

            <div>
                {image ? 
                    <button 
                        disabled={loading}
                        className='save flex'
                        onClick={event => {
                            event.preventDefault()
                            submit()
                        }}
                    >
                        {loading ?
                            <Loading>
                                <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'20px'} width={'20px'} />
                            </Loading>
                            :
                            'Salvar'
                        }
                    </button> 
                    : 
                    null
                }
                <button 
                    className='new'
                    disabled={loading}
                >
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
                {!image ? 
                    <button 
                        className='delete flex' 
                        onClick={handleSubmitDeleteProfilePicture}
                    >
                        Apagar Foto
                    </button> 
                    : 
                    null
                }
                {image ? 
                    <button 
                        disabled={loading}
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