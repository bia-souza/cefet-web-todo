listaTarefaQuery = document.querySelector('ul#lista-tarefas');

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