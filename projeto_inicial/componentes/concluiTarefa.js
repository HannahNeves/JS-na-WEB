const BotaoConclui = () => {
  const botaoConclui = document.createElement('button')

  botaoConclui.classList.add('check-button')
  botaoConclui.innerText = "concluir"

  botaoConclui.addEventListener('click', concluirTarefa)

  return botaoConclui
}

const concluirTarefa = (evento) => {
  // evento == botaoConclui do código da main.js
  const botaoConclui = evento.target // Serve para descobrir qual elemento foi clicado (???)

  const tarefaCompleta = botaoConclui.parentElement // O parent do botaoConclui é a tarefa(li)

  tarefaCompleta.classList.toggle('done') // .toggle: quando clicar, vai executar o código CSS .task.done (junção das classes: tarefa e a criada agora)
}

export default BotaoConclui
// Transforma o código JS em um módulo
// Também serve para encapsular