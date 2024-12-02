// Geração do número aleatório entre 0 e 100
const numeroParaAdivinhar = Math.floor(Math.random() * 111); // Número entre 0 e 1002

// Número de tentativas permitidas
const tentativasMaximas = 3;
var tentativas = 0;
var acertou = false;

alert("Bem-vindo ao jogo de adivinhação! Você tem 3 tentativas para acertar o número entre 0 e 100.");

while (tentativas < tentativasMaximas) {
    const chute = parseInt(prompt(`Tentativa ${tentativas + 1}: Qual o seu palpite?`), 10);

    if (chute === numeroParaAdivinhar) {
        alert("Parabéns! Você acertou o número!");
        acertou = true;
        break; // Sai do loop se acertar
    } else {
        alert("Errado! Tente novamente.");
    }

    tentativas++;
}

// Mensagem final
if (!acertou) {
    alert(`Você usou todas as suas tentativas. O número correto era ${numeroParaAdivinhar}.`);
}

alert("Fim do jogo! Obrigado por jogar!");
