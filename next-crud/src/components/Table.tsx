import React from 'react'
import Cliente from '../core/Cliente'

interface TabelaProps {
    clientes: Cliente[]
}

export default (props: TabelaProps) => {

    function renderHeaderTable() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderData() {
        return (
            props.clientes?.map((cliente, i) => {
                return (
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.idade}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <table>
            <thead>
                {renderHeaderTable()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}