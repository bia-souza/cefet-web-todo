listaTarefaQuery = document.querySelector('ul#lista-tarefas');
botaoAdicionaQuery = document.querySelector('#incluir-nova-tarefa');

let tarefas = [
	{
		nome: 'Comprar leite',
		categoria: 'compras',
		marcado: false
	},
	{
		nome: 'Escutar chimbinha',
		categoria: 'lazer',
		marcado: true
	}
];

function insereTarefaNaPagina(tarefa) {
	let tarefaEl = document.createElement("li");
	tarefaEl.classList.add('item-tarefa');
	tarefaEl.classList.add(`categoria.${tarefa.categoria}`);
;	if(tarefa.marcado === true){
		tarefaEl.classList.add('marcado');
	}
	tarefaEl.innerHTML = tarefa.nome;
	listaTarefaQuery.appendChild(tarefaEl);
}

listaTarefaQuery.innerHTML = '';
for(tarefa of tarefas){
	insereTarefaNaPagina(tarefa);
}

function criaTarefa() {
	nomeQuery = document.querySelector('#nova-tarefa-nome');
	categoriaQuery = document.querySelector('#nova-tarefa-categoria');
	tarefa = {
		nome: `${nomeQuery.value}`,
		categoria: `${categoriaQuery.selectedIndex.value}`,
		marcado: false
	}
	tarefas.push(tarefa);
	insereTarefaNaPagina(tarefa);
	nomeQuery.value = '';
	nomeQuery.focus();
}

botaoAdicionaQuery.addEventListener('click', criaTarefa);