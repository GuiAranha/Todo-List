window.onload = function () {
    let botaoCriar = document.getElementById('criar-tarefa');
    let botaoRemover = document.getElementById('remover-finalizados');
    let botaoApagar = document.getElementById('apaga-tudo');
    let lista = document.getElementById('lista-tarefas');


    botaoApagar.addEventListener('click', function(event){
        lista.innerHTML = "";
    });

    botaoRemover.addEventListener('click', function(event){
        for (let i = lista.firstElementChild; i !== null; i = i.nextElementSibling){
            if(i.className === "completed"){
                lista.removeChild(i);
                //precisa dessa linha pq depois de remover passa a ser null e sai do for
                i = lista.firstElementChild;
            }
        }
    });

    botaoCriar.addEventListener('click', function(event){
        let item = document.createElement('li');
        let conteudo = document.getElementById('texto-tarefa');
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

    lista.addEventListener('dblclick', function(event){
        if(event.target.className == "completed"){
            event.target.classList.remove("completed");
        }else{
            event.target.classList.add("completed");
        }
    });
};