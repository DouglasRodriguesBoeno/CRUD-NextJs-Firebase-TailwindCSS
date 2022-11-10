import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
       text-white
    `}>
      
      <Layout title="Cadastro Next">
        <span>
          Conteudo
        </span>
      </Layout>
    </div>
  )
}
