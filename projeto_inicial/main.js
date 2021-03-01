// Função de execução imediata: serve para encapsular o código
//        (()=>{
//          escopo;
//        })()
// Precisa desses () no final para indicar que está executando a função

// ( () => {
  
  import BotaoConclui from './componentes/concluiTarefa.js'
  import BotaoDeleta from './componentes/deletaTarefa.js'

  const criarTarefa = (evento) => {

  evento.preventDefault()

  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value

  const tarefa = document.createElement('li')
  tarefa.classList.add('task') // Adiciona a classe chamada task na li
  const conteudo = `<p class="content">${valor}</p>`

  tarefa.innerHTML = conteudo

  tarefa.appendChild(BotaoConclui())
  tarefa.appendChild(BotaoDeleta())
  lista.appendChild(tarefa) // Insere a tarefa(li) na lista(ul)

  input.value = " " // Limpa a caixa de texto do input

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

// })()