function validarFormulario() {

    //Pegar os dados!

    const nome = document.getElementById('nome_teste').value.trim();
    const cpf = document.getElementById('cpf_teste').value.trim();
    const idade = parseInt(document.getElementById('idade_teste').value, 10);

    //Processar os dados (obrigatoriedades)!

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return;
    } else {
        console.log(nome);
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 digitos');
        return;
    } else {
        console.log(cpf);
    }

    if (!idade) {
        alert('Por favor, preencha sua idade.');
        return;
    } else {
        console.log(idade);
    }

    //Devolver

    alert('Formulário enviado com sucesso')

}