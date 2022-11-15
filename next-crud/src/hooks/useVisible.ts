import { useState } from "react";

export default function useVisible() {
    const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisible('tabela')
    const exibirFormulario = () => setVisible('form')

    return {
        formularioVisivel: visible === 'form',
        tabelaVisivel: visible === 'tabela',
        exibirTabela,
        exibirFormulario
    }
}