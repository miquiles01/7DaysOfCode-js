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
    let acao = prompt(
        "Deseja adicionar ou remover um item da lista de compras? (digite 'adicionar', 'remover' ou 'sair')"
    ).toLowerCase();

    if (acao === "adicionar") {
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

    } else if (acao === "remover") {
        let categoriasDisponiveis = Object.keys(listaDeCompras).filter(
            (categoria) => listaDeCompras[categoria].length > 0
        );

        if (categoriasDisponiveis.length === 0) {
            alert("Não há itens na lista para remover.");
            continue;
        }

        let categoria = prompt(
            `De qual categoria você deseja remover um item? Escolha: ${categoriasDisponiveis.join(", ")}`
        );

        if (!categoriasDisponiveis.includes(categoria)) {
            alert("Categoria inválida ou sem itens.");
            continue;
        }

        let itensNaCategoria = listaDeCompras[categoria];
        let itemARemover = prompt(
            `Esses são os itens da categoria ${categoria}: ${itensNaCategoria.join(", ")}.\nQual deles você deseja remover?`
        );

        let index = itensNaCategoria.indexOf(itemARemover);

        if (index !== -1) {
            itensNaCategoria.splice(index, 1);
            alert(`"${itemARemover}" foi removido da categoria ${categoria}.`);
        } else {
            alert(`"${itemARemover}" não foi encontrado na categoria ${categoria}.`);
        }

    } else if (acao === "sair") {
        continuar = false;
    } else {
        alert("Opção inválida. Digite 'adicionar', 'remover' ou 'sair'.");
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
