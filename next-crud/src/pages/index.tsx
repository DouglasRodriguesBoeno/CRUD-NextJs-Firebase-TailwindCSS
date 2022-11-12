import React from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'
import Button from '../components/Button'

export default function Home() {
  const clientes = [
    new Cliente('Ana', 45, '1'),
    new Cliente('Diogo', 98, '2'),
    new Cliente('Julia', 67, '3'),
    new Cliente('Anderson', 35, '4'),
    new Cliente('Joao', 15, '5'),
  ]

  function clienteSelection(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteDelete(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
       text-white
    `}>

      <Layout title="Cadastro Next">
        <div className={`flex justify-end`}>
          <Button color='green' className='mb-4'>Novo Cliente</Button>
        </div>
        <Table clientes={clientes}
          clienteDelete={clienteDelete}
          clienteSelection={clienteSelection}></Table>
      </Layout>
    </div>
  )
}
