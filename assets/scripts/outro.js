
/*1 calc media */

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média é: " + media);

/*temp convert*/

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + " graus Celsius é igual a " + fahrenheit + " graus Fahrenheit.");


/*age verify*/

let idade = 20;
let podeVotar = idade >= 16;
console.log(podeVotar)



let age = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/*full name*/

let primeiroNome = "João";
let sobrenome = "Silva";
let nomeCompleto = primeiroNome + " " + sobrenome;

console.log("Nome completo: " + nomeCompleto);

/* value swap */
let a = "valor um";
let b = "valor dois";
let temp;

console.log(a +" "+ b)
temp = a
a = b;
b = temp;

console.log("a = " + a + ", b = " + b);



let classificarAluno = 5;

if (classificarAluno >= 7) {
    console.log("Aprovado");
}
else if (classificarAluno >= 5 && classificarAluno < 7) {
    console.log("Recuperação");
}

else if (classificarAluno < 5) {
    console.log("Reprovado");
}

for (let i = 1; i <= 10; i++) {
    console.log("Tabuada do " + i);
    
}



let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]);
console.log(frutas.length);

frutas.push("Pitaya");

console.log(frutas);

console.log("Iteração usando o for rudimentar")
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); 
}

console.log("Iteração com o FOR OF")
for (let fruta of frutas) {
    console.log(fruta); 
}

frutas.pop();

console.log(frutas);


frutas.forEach(
    function(fruta) {
        console.log(fruta);
    }
);




let livro = {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    paginas: 150,
    "publicado-em": 1915
}

let nomedoTitulo = livro.titulo;
console.log(nomedoTitulo);
console.log(livro["publicado-em"]);


let cachorro = {
    nome: "Rex",
    raca: "Labrador",
    idade: 3,
    latir: function() {
        console.log("Woof! Woof!");
    },

    boasVindas: function(){
        console.log(`Bom dia! Meu nome é ${this.nome} e eu sou um cachorro da raça ${this.raca}`);
    }
};

cachorro.latir();



console.log(cachorro.nome);

for (let chave in cachorro){
    console.log(`${chave}: ${cachorro[chave]}`)
}


let nome = "cauany nunes";

let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1)

console.log(nomeFormatado);
 
let total = 10.5;

let totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

console.log(totalFormatado);

let dataPedido = new Date();

console.log(dataPedido);

let dataPedidoFormatada = dataPedido.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});

console.log(dataPedidoFormatada);


let nome = " maria da penha josefina "

let nomeSemEspacosExtras = nome.trim()

let nomeFormatado = nomeSemEspacosExtras.charAt(0).toUpperCase() + nomeSemEspacosExtras.slice(1);

console.log(nomeFormatado);

if (nomeFormatado.tolowerCase().includes("maria")) {
    console.log("TEM SIM");
} else {
    console.log("NÃO TEM");
}
 

let frutas = ["maçã", "banana"];
console.log(frutas);

frutas.push("Uva");
console.log(frutas);

frutas.unshift("Pitaya");
console.log(frutas);

let frutaRemovida1 = frutas.pop();
console.log(frutaRemovida1);

let frutaRemovida2 = frutas.shift();
console.log(frutaRemovida2);

let fruta1 = frutas.indexOf("maçã")
console.log(fruta1);

let fruta2 = frutas.indexOf("Melancia")
console.log(fruta2);

console.log(frutas.includes("maçã"));


console.log(frutas.includes("melancia"));
 

let frutas = ["maçã", "banana"];
console.log(frutas);

frutas.push("Uva");
console.log(frutas);

frutas.unshift("Pitaya");
console.log(frutas);

let frutaRemovida1 = frutas.pop();
console.log(frutaRemovida1);

let frutaRemovida2 = frutas.shift();
console.log(frutaRemovida2);

let fruta1 = frutas.indexOf("maçã")
console.log(fruta1);

let fruta2 = frutas.indexOf("Melancia")
console.log(fruta2);

console.log(frutas.includes("maçã"));


console.log(frutas.includes("melancia"));

if(frutas.includes("maçã")) {
    console.log("Eu tenho maçãaaa")
}