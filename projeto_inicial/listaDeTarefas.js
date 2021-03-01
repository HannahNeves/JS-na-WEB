const criarTarefa = (evento) => {

  evento.preventDefault();

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;

  const tarefa = document.createElement('li');
  tarefa.classList.add('task') // Adiciona a classe chamada task na li
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;
  lista.appendChild(tarefa); // Insere a tarefa(li) na lista(ul)

  input.value = " "; // Limpa a caixa de texto do input

}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);