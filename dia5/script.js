let listaDeCompras = {
    Frutas: [],
    Laticinios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let continuar = true;

alert("Bem-vindo à lista de compras do supermercado!");

while (continuar) {
    let adicionarItem = prompt("Deseja adicionar um item à lista de compras? (sim/não)");

    if (adicionarItem.toLowerCase() === "sim") {
        let comida = prompt("Qual comida você deseja adicionar?");
        let categoria = prompt(
            "Em qual categoria essa comida se encaixa? Escolha: Frutas, Laticínios, Congelados, Doces ou Outros."
        ).toLowerCase();

        // Adicionar na categoria correspondente
        switch (categoria) {
            case "frutas":
                listaDeCompras.Frutas.push(comida);
                break;
            case "laticínios":
                listaDeCompras.Laticinios.push(comida);
                break;
            case "congelados":
                listaDeCompras.Congelados.push(comida);
                break;
            case "doces":
                listaDeCompras.Doces.push(comida);
                break;
            case "outros":
                listaDeCompras.Outros.push(comida);
                break;
            default:
                alert("Categoria inválida. O item será adicionado em 'Outros'.");
                listaDeCompras.Outros.push(comida);
        }

        // Exibir a lista atualizada
        let listaAtualizada = "Lista de Compras Atual:\n";
        for (let categoria in listaDeCompras) {
            listaAtualizada += `    ${categoria}: ${listaDeCompras[categoria].join(", ") || "Nenhum item"}\n`;
        }
        alert(listaAtualizada);

    } else if (adicionarItem.toLowerCase() === "não") {
        continuar = false;
    } else {
        alert("Resposta inválida. Responda apenas 'sim' ou 'não'.");
    }
}

// Exibindo a lista de compras final
let resultado = "Lista de Compras Final:\n";

for (let categoria in listaDeCompras) {
    resultado += `    ${categoria}: ${listaDeCompras[categoria].join(", ") || "Nenhum item"}\n`;
}

alert("Sua lista de compras foi concluída!");
alert(resultado);
console.log(resultado);
