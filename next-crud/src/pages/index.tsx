import React, { use, useState } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'
import Button from '../components/Button'
import Form from '../components/Form'

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

  function saveClient(cliente: Cliente) {
    console.log(cliente)
  }

  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

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
              <Button color='green' className='mb-4'
                onClick={() => setVisible('form')}>
                Novo Cliente</Button>
            </div>
            <Table clientes={clientes}
              clienteDelete={clienteDelete}
              clienteSelection={clienteSelection}></Table>
          </>
        ) : <Form
          cliente={clientes[2]}
          cancelClient={() => setVisible('tabela')}
          modifyCliente={saveClient}
        ></Form>}

      </Layout>
    </div>
  )
}
