window.onload = function () {
    let botaoCriar = document.getElementById('criar-tarefa');

    botaoCriar.addEventListener('click', function(event){
        let lista = document.getElementById('lista-tarefas');
        let conteudo = document.getElementById('texto-tarefa');
        let item = document.createElement('li');
        item.innerText = conteudo.value;
        lista.appendChild(item);
        conteudo.value = "";
    })
};