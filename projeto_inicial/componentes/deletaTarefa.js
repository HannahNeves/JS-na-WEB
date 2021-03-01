const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button')

  botaoDeleta.innerText = 'deletar'

  botaoDeleta.addEventListener('click', deletarTarefa)

  return botaoDeleta
}

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target

  const tarefaCompleta = botaoDeleta.parentElement

  tarefaCompleta.remove() // Remove o elemento da árvore

  return botaoDeleta
}

export default BotaoDeleta
// Transforma o código JS em um módulo
// Também serve para encapsular