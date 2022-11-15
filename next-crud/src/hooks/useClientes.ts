import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useVisible from "./useVisible"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()
    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela } = useVisible()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos(cliente).then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function clienteSelection(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function clienteDelete(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos();
    }

    async function saveClient(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos();
    }

    function newCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        exibirTabela,
        tabelaVisivel,
        saveClient,
        newCliente,
        clienteDelete,
        clienteSelection,
        obterTodos,
        cliente,
        clientes
    }
}