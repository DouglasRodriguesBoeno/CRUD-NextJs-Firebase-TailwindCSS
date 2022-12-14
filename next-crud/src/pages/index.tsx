import Layout from '../components/Layout'
import Table from '../components/Table'
import Button from '../components/Button'
import Form from '../components/Form'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const { clienteSelection, clienteDelete, cliente,
    clientes, newCliente, saveClient, tabelaVisivel, exibirTabela } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
       text-white
    `}>

      <Layout title="Cadastro Next">
        {tabelaVisivel ? (
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
          cancelClient={() => exibirTabela()}
          modifyCliente={saveClient}
        ></Form>}

      </Layout>
    </div>
  )
}
