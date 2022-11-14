import React, { useState } from "react"
import Cliente from '../core/Cliente'
import Button from "./Button"
import Entry from "./Entry"

interface formProps {
    cliente: Cliente
    modifyCliente?: (cliente: Cliente) => void
    cancelClient?: () => void
}

export default (props: formProps) => {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entry readOnly
                    text="Codigo"
                    value={id}
                    className="mb-4" />
            ) : false}

            <Entry
                value={nome}
                text='Nome'
                modifyValue={setNome}
                className="mb-4"
            />

            <Entry
                value={idade}
                type='number'
                text='Idade'
                modifyValue={setIdade}
            />

            <div className={`
                flex justify-end mt-5
            `}>
                <Button color="blue" className={`
                    mr-2
                `} onClick={() => props.modifyCliente?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancelClient}>Cancelar</Button>
            </div>
        </div>
    )
}