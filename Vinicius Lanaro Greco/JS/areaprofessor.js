const recursos = document.querySelectorAll('.list');

recursos.forEach(function(recurso) {
    recurso.addEventListener('click', function(event) {
        event.preventDefault();
        const recursoNome = recurso.textContent;
        const recursoLink = recurso.getAttribute('href');
        alert(`Você clicou em: ${recursoNome}. Link: ${recursoLink}`);
    });
});


document.getElementById('verificar-respostas').addEventListener('click', function() {
    window.location.href = 'avaliacoes.html';
});

document.getElementById('criar-avaliacao').addEventListener('click', function() {
    window.location.href = 'nova_avaliacao.html';
});

document.getElementById('ver-resultados').addEventListener('click', function() {
    window.location.href = 'resultados.html';
});
