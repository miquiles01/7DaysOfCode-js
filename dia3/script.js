// Início do jogo
alert("Bem-vindo ao jogo de escolhas na programação!");

const area = prompt("Você quer seguir para a área de Front-End ou Back-End? Responda com 'Front-End' ou 'Back-End'.");

if (area === "Front-End") {
    const tecnologia = prompt("Você quer aprender React ou Vue?");
    alert(`Ótima escolha! ${tecnologia} é muito popular na área de Front-End.`);
} else if (area === "Back-End") {
    const tecnologia = prompt("Você quer aprender C# ou Java?");
    alert(`Ótima escolha! ${tecnologia} é muito utilizado no Back-End.`);
} else {
    alert("Opção inválida. Por favor, reinicie o jogo e escolha uma área válida.");
}

// Escolha de especialização
const especializacao = prompt("Você quer seguir se especializando na área escolhida ou se desenvolver para se tornar Fullstack? Responda com 'Especializar' ou 'Fullstack'.");

if (especializacao === "Especializar") {
    alert("Você escolheu se especializar! Focar em uma área pode te tornar um expert.");
} else if (especializacao === "Fullstack") {
    alert("Você escolheu se tornar Fullstack! Ser versátil é uma grande vantagem no mercado.");
} else {
    alert("Opção inválida. Considere reiniciar o jogo para tomar uma decisão válida.");
}

// Tecnologias adicionais
let aprenderMais = true;

while (aprenderMais) {
    const tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite o nome da tecnologia ou 'Sair' para encerrar.");
    if (tecnologia.toLowerCase() === "sair") {
        aprenderMais = false;
        alert("Fim do jogo! Continue aprendendo e evoluindo na programação!");
    } else {
        alert(`Interessante! ${tecnologia} é uma excelente tecnologia para aprender.`);
    }
}
