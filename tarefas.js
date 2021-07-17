listaTarefaQuery = document.querySelector('ul#lista-tarefas');
botaoAdicionaQuery = document.querySelector('#incluir-nova-tarefa');
itemTarefaQuery = document.querySelectorAll('.item-tarefa');
nomeQuery = document.querySelector('#nova-tarefa-nome');
categoriaQuery = document.querySelector('#nova-tarefa-categoria');
filtroCategoriaQuery = document.querySelector('#filtro-de-categoria');

let tarefas = [
	{
		nome: 'Comprar leite',
		categoria: 'compras',
		realizada: false
	},
	{
		nome: 'Escutar chimbinha',
		categoria: 'lazer',
		realizada: true
	}
];

function insereTarefaNaPagina(tarefa) {
	let tarefaEl = document.createElement("li");
	tarefaEl.classList.add('item-tarefa');
	tarefaEl.classList.add(`categoria.${tarefa.categoria}`);
;	if(tarefa.realizada === true){
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

itemTarefaQuery.forEach(itemTarefa => {
						itemTarefa.addEventListener('click', item => {
								item.currentTarget.classList.toggle('marcado');
								item.currentTarget.realizada = !item.currentTarget.realizada;
							});
						});

nomeQuery.addEventListener('keyup', key => {
								if(key.key === 'Enter'){
									criaTarefa();
								}
							});
function filtrarTarefa(){
	
    let categoria = filtroCategoriaQuery.value;

    for(itemTarefa of itemTarefaQuery){
		if(itemTarefa.classList.contains(`categoria-${categoria}`)){
			itemTarefa.classList.add("retido-no-filtro");
		}
		else{
			itemTarefa.classList.remove("retido-no-filtro");
		}
	}
}

filtroCategoriaQuery.addEventListener('change', filtrarTarefa);