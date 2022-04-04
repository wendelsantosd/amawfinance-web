import React, { useContext, useState } from 'react'
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Context } from '../../Contexts'
import { EditTransactionModal } from '../EditTransactionModal'
import { SureModal } from '../SureModal'
import { Container } from './transactionsTable.styles'

export const TransactionsTable = () => {
    const { transactions, deleteTransaction, dataTransaction } = useContext(Context)
    const [isSureModalOpen, setIsSureModalOpen] = useState(false)
    const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const handleCloseSureModal = () => {
        setIsSureModalOpen(false)
    }

    const handleCloseEditTransactionModal = () => {
        setIsEditTransactionModalOpen(false)
    }

    const handleSubmitDeleteTransaction = async () => {
        const result = await deleteTransaction(transactionId)

        if (result?.status === 200) {
            toast.success('Transação deletada com sucesso!')
        } else {
            toast.error('Ocorreu um erro ao deltar transação.')
        }
    }

    return <Container>
        <SureModal 
            isOpen={isSureModalOpen}
            onRequestClose={handleCloseSureModal}
            onRequestDelete={handleSubmitDeleteTransaction}
        />
        <EditTransactionModal 
            isOpen={isEditTransactionModalOpen}
            onRequestClose={handleCloseEditTransactionModal}
            transactionId={transactionId}
        />
        <ToastContainer 
            theme='colored'
            style={{ top: '13%'}}
        />
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                {transactions?.map((transaction: any) => 
                    <tr key={transaction.id}>
                        <td>{transaction.description}</td>
                        <td className={transaction.type}>
                            {transaction.type === 'expense' ? '- ' : null}
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}
                        </td>
                        <td>
                            {transaction.category}
                        </td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(transaction.created_at))}
                        </td>
                        <td>
                            <MdEdit
                                id='edit-transaction-icon'
                                className='icon'
                                onClick={async () => {
                                    setTransactionId(transaction.id)
                                    await dataTransaction(transaction.id)
                                    setIsEditTransactionModalOpen(true)
                                }}
                            />
                        </td>
                        <td>
                            <IoMdTrash 
                                id='delete-transaction-icon'
                                className='icon'
                                onClick={() => {
                                    setTransactionId(transaction.id)
                                    setIsSureModalOpen(true)
                                }}
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </Container>
}