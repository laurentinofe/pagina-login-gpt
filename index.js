// Função para validar login
document.getElementById('logar').addEventListener('click', function() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const usuarioEncontrado = dados.find(user => user.usuario === usuario && user.senha === senha);

    if (usuarioEncontrado) {
        alert("Login efetuado com sucesso");
    } else {
        alert("Usuário ou senha incorreto");
    }
});

// Função para cancelar (limpar os campos)
document.getElementById('cancelar').addEventListener('click', function() {
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
});

// Função para criar uma nova conta
document.getElementById('criarConta').addEventListener('click', function() {
    const novoUsuario = prompt("Digite o nome do novo usuário:");
    const novaSenha = prompt("Digite a senha do novo usuário:");

    if (novoUsuario && novaSenha) {
        dados.push({ usuario: novoUsuario, senha: novaSenha });
        alert("Conta criada com sucesso!");
    } else {
        alert("Falha ao criar conta. Preencha todos os campos.");
    }
});
