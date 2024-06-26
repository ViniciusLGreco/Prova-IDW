function mostrarNotificacao(mensagem) {
    const notificacao = document.getElementById('notificacao');
    notificacao.textContent = mensagem;
    notificacao.style.display = 'block';

    setTimeout(function() {
        notificacao.textContent = '';
        notificacao.style.display = 'none';
    }, 9000); 
}

setTimeout(function() {
    mostrarNotificacao('Bem-vindo à sua Área do Aluno!');
}, 3000); 

const celulasCalendario = document.querySelectorAll('.calendar td');


const filtro = document.getElementById('filtro');
const listaTarefas = document.getElementById('lista-tarefas');

filtro.addEventListener('change', function() {
    const disciplinaSelecionada = filtro.value;
    listaTarefas.querySelectorAll('li').forEach(function(tarefa) {
        const disciplinaTarefa = tarefa.getAttribute('data-disciplina');
        if (disciplinaSelecionada === 'todos' || disciplinaSelecionada === disciplinaTarefa) {
            tarefa.style.display = 'block';
        } else {
            tarefa.style.display = 'none';
        }
    });
});


const eventos = {
    '2024-06-10': ['Prova de Matemática'],
    '2024-06-15': ['Entrega de Trabalho de História'],
    '2024-06-20': ['Leitura do livro "Dom Casmurro"']
};


const todascelulasCalendario = document.querySelectorAll('.calendar td');


todascelulasCalendario.forEach(function(celula) {
    const data = celula.textContent.trim();
    const key = `2024-06-${data}`; 

    
    if (eventos[key] && eventos[key].length > 0) {
        celula.classList.add('tem-evento'); 
    }

    
    celula.addEventListener('click', function() {
        const eventosDoDia = eventos[key];

        if (eventosDoDia && eventosDoDia.length > 0) {
            const mensagem = `Eventos em ${data}/06/2024:\n- ${eventosDoDia.join('\n- ')}`;
            alert(mensagem);
        } else {
            alert(`Não há eventos programados para o dia ${data}/06/2024.`);
        }
    });
});


