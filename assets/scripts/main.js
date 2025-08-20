//-------------Valores---------------

const frete = 10.00;
//---------conversor euro

const conversaoEuro = 6.50

//------------Dados do usuario---------------
let cliente1 = {
    nameCompleto: "João Silva",
    age: 25,
    phone: "1234-5678",
    address: "Rua A, 123",
    fidelityPoints: 5
}

let cliente2 = {
    nameCompleto: "Maria da Oliveira",
    age: 30,
    phone: "9876-5432",
    address: "Rua B, 456",
    fidelityPoints: 3
}

let cliente3 = {
    nameCompleto: "Lucas Junior",
    age: 28,
    phone: "4567-8901",
    address: "Rua C, 789",
    fidelityPoints: 4
}

const usuarios = [cliente1, cliente2, cliente3];


console.log(cliente3.nameCompleto)
//----------------Dados do usuario---------------


//---------------Dados dos Produtos--------------------
let produto1 = {
    name: "Pão",
    price: 2.5,
    quantity: 100,
    category: "Pães"
};

let produto2 = {
    name: "Bolo de Fubá",
    price: 15.00,
    quantity: 5,
    category: "Cakes"
};

let produto3 = {
    name: "Queijo Mineiro",
    price: 12.00,
    quantity: 20,
    category: "Cheeses"
};


let produtos = [produto1, produto2, produto3];

//----------------Dados dos produtos---------------


//-----------------Pedido----------------

let pedido = {
    cliente: cliente1.nameCompleto,
    product: produto1.name,
    qtd: 12,
    price: produto1.price,
};
let subtotal = pedido.qtd * pedido.price;


console.log(pedido);
console.log(`O valor total do pedido é: R\$ ${subtotal}`);


//desconto de quantidade
function calcularDesconto(pedido) {
    let desconto = 0;
    if (pedido.qtd > 10) {
        desconto = 0.15; // 15% de desconto
    }
    else if (pedido.qtd > 5) {
        desconto = 0.05; // 5% de desconto
    } else if (pedido.qtd > 3) {
        desconto = 0.02; // 2% de desconto
    }
    return pedido.price * pedido.qtd * desconto;
}


console.log("Desconto aplicado: R$ " + calcularDesconto(pedido).toFixed(2));

//Valor com desconto
let novoValor = subtotal - calcularDesconto(pedido);
console.log("Novo valor: R$ " + novoValor.toFixed(2));

//desconto fidelidade
function fidelidadeDesconto (novoValor) {           //pega o valor de novo valor, no caso 25,50
    if (cliente1.fidelityPoints >= 1) {             //se o cliente tiver pontos de fidelidade, aplica eles
        let desconto = cliente1.fidelityPoints;     //o valor de desconto se torna igual aos pontos de fidelidade do cliente
        return novoValor - desconto;                //desconta o valor do produto final. no caso, 1 real por ponto
    }
    return 0;                                       //se não tiver pontos de fidelidade, não aplica desconto
}

cliente1.fidelityPoints = 0;                 //zera os pontos de fidelidade após uso


console.log("Valor com desconto de fidelidade: R$ " + fidelidadeDesconto(novoValor).toFixed(2));

let valorcomFrete = fidelidadeDesconto(novoValor) + frete;
console.log("o valor do frete é: R$ " + frete);
console.log("Valor total com frete: R$ " + valorcomFrete.toFixed(2));

let convertToEuro = valorcomFrete / conversaoEuro;
console.log("Valor total em Euro: € " + convertToEuro.toFixed(2));

cliente1.fidelityPoints + 1; //adiciona 1 ponto de fidelidade ao cliente após a compra

let notaFiscal = {
    cliente: cliente1.nameCompleto,
    produtos: [produto1.name],
    quantidade: pedido.qtd,
    subtotal: subtotal,
    desconto: calcularDesconto(pedido),
    total: novoValor,
    frete: frete,
    totalComFrete: valorcomFrete,
    totalEmEuro: convertToEuro.toFixed(2),
}

console.log(notaFiscal);

console.log("Nota Fiscal: ");
console.log("Cliente: " + notaFiscal.cliente);
console.log("Produtos: " + notaFiscal.produtos.join(", ") + " (" + notaFiscal.quantidade + ")"  );
console.log("Subtotal: R$ " + notaFiscal.subtotal.toFixed(2));
console.log("Desconto: R$ " + notaFiscal.desconto.toFixed(2));
console.log("Total: R$ " + notaFiscal.total.toFixed(2));
console.log("Frete: R$ " + notaFiscal.frete.toFixed(2));
console.log("Total com Frete: R$ " + notaFiscal.totalComFrete.toFixed(2));
console.log("Total em Euro: € " + notaFiscal.totalEmEuro);
console.log("Pontos de Fidelidade: " + cliente1.fidelityPoints);

// Objeto Cliente: nome, endereço, telefone e pontosDeFidelidade ---feito

// no mínimo 3 objetos de produtos ---feito

// 1 lista de produtos com os objetos de produtos ---feito

// objeto pedido: nomeDoCLiente, quantidade, valorDoProduto, ---feito

// calcular o valor do pedido --feito

// objeto Compra: nomeDoCLiente, quantidade, valorDoProduto, subtotal, valorFinal, valorPago, troco

// quando uma compra for realizada adicione 1 ponto de fidelidade ao cliente

// criar a função de converter a moeda de real para euro



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function buscarProduto(nomeProdutoBuscado) {
    // iterar a lista
    // pegar o nome de cada produto da lista
    // usar o ou o .includes ou o === para comprar o nome do produto com o nome do produto buscado
    // retornar o produto encontrado
    // ou retornar dizendo que o produto não foi encontrando se ele não existir dentro da lista
}




/*
Tarefas:
Formatar nomes com primeira letra maiúscula 
Formatar valores como R$ 10,50
Criar códigos de produtos (ex: PAO001)
Mensagens de boas-vindas personalizadas 
Validar entradas básicas (ex: não vazias, apenas números)
Sistema de busca simples 
Formatar data e hora dos pedidos 
*/

/*
•Criararray de produtos disponíveis
•Criarcarrinho de compras (adicionar/remover)
•Criarlistade clientes frequentes
•Registrar histórico de pedidos do dia
•Implementarfavoritos
•Ranking de produtos mais vendidos
*/