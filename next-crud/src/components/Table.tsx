import React from 'react'
import Cliente from '../core/Cliente'
import { IconEdition, IconTrash } from './Icons'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelection?: (cliente: Cliente) => void
    clienteDelete?: (cliente: Cliente) => void
}

export default (props: TabelaProps) => {

    const showAction = props.clienteDelete || props.clienteSelection

    function renderHeaderTable() {
        return (
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {showAction ? <th className={`text-center p-4`}>Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return (
            props.clientes?.map((cliente, i) => {
                return (
                    <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}>
                        <td className={`text-left p-4`}>{cliente.id}</td>
                        <td className={`text-left p-4`}>{cliente.nome}</td>
                        <td className={`text-left p-4`}>{cliente.idade}</td>
                        {showAction ? renderAction(cliente) : false}
                    </tr>
                )
            })
        )
    }

    function renderAction(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelection ? (
                    <button onClick={() => props.clienteSelection?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2
                    hover:bg-white
                `}>
                        {IconEdition}
                    </button>
                ) : false}

                {props.clienteDelete ? (
                    <button onClick={() => props.clienteDelete?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2
                    hover:bg-white
                `}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden '>
            <thead className={`
                text-gray-100 
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeaderTable()}
            </thead>
            <tbody className={`text-black`}>
                {renderData()}
            </tbody>
        </table>
    )
}