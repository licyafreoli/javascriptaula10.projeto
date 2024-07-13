document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var novaTarefa = document.getElementById('novaTarefa').value;
    if (novaTarefa.trim() !== "") {
        adicionarTarefa(novaTarefa);
        document.getElementById('novaTarefa').value = '';
    }
});

function adicionarTarefa(tarefaTexto) {
    var listaTarefas = document.getElementById('listaTarefas');

    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    var span = document.createElement('span');
    span.textContent = tarefaTexto;

    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botaoRemover);

    listaTarefas.appendChild(li);
}
