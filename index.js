function saveRecruitInfo() {
    // Obter os valores do formulário
    const primeiroNome = document.getElementById('primeiroNome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const campoEstudo = document.getElementById('campoEstudo').value;
    const anoNascimento = document.getElementById('anoNascimento').value;

    // Calcular a idade com base no ano de nascimento
    const currentYear = new Date().getFullYear();
    const age = currentYear - anoNascimento;

    // Exibir as informações
    document.getElementById('infoNome').innerText = `Nome Completo: ${primeiroNome} ${sobrenome}`;
    document.getElementById('infoCampoEstudo').innerText = `Campo de Estudo: ${campoEstudo}`;
    document.getElementById('infoIdade').innerText = `Idade: ${age} anos`;

    // Tornar a área de resultado visível
    document.getElementById('resultado').style.display = 'block';
}