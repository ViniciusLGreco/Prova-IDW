document.getElementById('campo_cep').addEventListener('change', function() {
    const cep = this.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('CEP inválido. Digite apenas números.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
            } else {
                document.getElementById('campo_rua').value = data.logradouro;
                document.getElementById('campo_bairro').value = data.bairro;
                
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.');
        });
});

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const camposObrigatorios = document.querySelectorAll('.campos[required]');
    let formularioValido = true;

    camposObrigatorios.forEach(function(campo) {
        if (!campo.value.trim()) {
            formularioValido = false;
            alert('Todos os campos são obrigatórios.');
        }
    });

    const campoEmail = document.getElementById('campo_email');
    if (campoEmail.value.trim() && !validarEmail(campoEmail.value.trim())) {
        formularioValido = false;
        alert('Por favor, digite um email válido.');
    }

    const campoTelefone = document.getElementById('campo_telefone');
    if (campoTelefone.value.trim() && !validarTelefone(campoTelefone.value.trim())) {
        formularioValido = false;
        alert('Por favor, digite um número de telefone válido.');
    }

    if (formularioValido) {
        setTimeout(function() {
            alert('Formulário Enviado com Sucesso!');
            document.getElementById('meuFormulario').reset(); 
        }, 1000);
    }
});

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarTelefone(telefone) {
    
    const re = /^\d{10}$/; 
    return re.test(telefone);
}
