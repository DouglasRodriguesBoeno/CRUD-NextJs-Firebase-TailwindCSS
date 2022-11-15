import React, { use, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'
import Button from '../components/Button'
import Form from '../components/Form'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos(cliente).then(clientes => {
      setClientes(clientes)
      setVisible('tabela')
    })
  }

  function clienteSelection(cliente: Cliente) {
    setCliente(cliente)
    setVisible('form')
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
    setVisible('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
       text-white
    `}>

      <Layout title="Cadastro Next">
        {visible === 'tabela' ? (
          <>
            <div className={`flex justify-end`}>
              <Button color='blue' className='mb-4'
                onClick={() => newCliente()}>
                Novo Cliente</Button>
            </div>
            <Table clientes={clientes}
              clienteDelete={clienteDelete}
              clienteSelection={clienteSelection}></Table>
          </>
        ) : <Form
          cliente={cliente}
          cancelClient={() => setVisible('tabela')}
          modifyCliente={saveClient}
        ></Form>}

      </Layout>
    </div>
  )
}
