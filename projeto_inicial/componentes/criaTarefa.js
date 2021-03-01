import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
 
export const handleNovoItem = (evento) => {
    
    evento.preventDefault() // Previne o comportamento padrão do formulário

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] // Pega os itens do localStorage

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataFormatada = data.format('DD/MM/YYYY')

    const dados = {
        valor,
        dataFormatada
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas)) // Armazena os dados no navegador, mesmo depois de atualizar ou fechar a página

    input.value = " "

    carregaTarefa()
}

export const Tarefa = ({valor, dataFormatada}) => {
    // Somente o que for exibir conteúdo/visualização

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}