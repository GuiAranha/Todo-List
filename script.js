window.onload = function () {
    let botaoCriar = document.getElementById('criar-tarefa');
    let lista = document.getElementById('lista-tarefas');

    botaoCriar.addEventListener('click', function(event){
        let conteudo = document.getElementById('texto-tarefa');
        let item = document.createElement('li');
        item.innerText = conteudo.value;
        lista.appendChild(item);
        conteudo.value = "";
    });

    lista.addEventListener('click', function(event){

        for ( let i = lista.firstElementChild; i !== null; i = i.nextElementSibling){
            if(i.style.background = "rgb(128, 128, 128)"){
                i.style.background = "white";
            }
        }
        event.target.style.background = "rgb(128, 128, 128)";
    });
};