document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('campo_nome').value;
    const email = document.getElementById('campo_email').value;
    const senha = document.getElementById('campo_senha').value;
    const senhaConfirm = document.getElementById('campo_senha_confirm').value;

    const mensagemErro = document.getElementById('mensagem-erro');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'none';

    if (senha !== senhaConfirm) {
        mensagemErro.textContent = 'As senhas não correspondem.';
        mensagemErro.style.display = 'block';
        return;
    }

    if (!nome || !email || !senha || !senhaConfirm) {
        mensagemErro.textContent = 'Todos os campos são obrigatórios.';
        mensagemErro.style.display = 'block';
        return;
    }
    mensagemSucesso.style.display = 'block';
    window.location.href = 'index.html';
});
