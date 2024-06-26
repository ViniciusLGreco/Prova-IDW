document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('campo_email').value;
    const senha = document.getElementById('campo_senha').value;
    
    const emailValido = 'usuario@exemplo.com';
    const senhaValida = 'senha123';
    
    if (email === emailValido && senha === senhaValida) {
        window.location.href = 'menu.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});


