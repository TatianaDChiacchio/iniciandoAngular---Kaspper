// no typescript vamos trabalhar com 3 tipos de variáveis
// string
// number
// boolean -> true/false
var msg;
var msg2 = "Essa é minha mensagem";
//variável
var idade = 1;
//idade = "Tatiana"
var idade2;
idade2 = 3;
var idade3 = "abacate";
//idade3 = 10 
var palavra = "banana";
//palavra = 1
var palavra2;
palavra2 = "melancia";
var resposta = true;
if (resposta) {
    console.log("A resposta é verdadeira");
    var resultado = "estamos dentro do if";
}
else {
    console.log("A resposta é falsa");
}
//console.log(resultado)
//declaração de arrays -> vetor ou lista
var listaNomes = ["Dario", "Evelyn", "Euler"];
var listaNumeros = [10, 25, 36, 78];
var listaVariada = [1, "palavra", true, 23, "note"];
var palavras = Array(4);
palavras[0] = "Casa";
palavras[1] = "Supermercado";
palavras[2] = "Quitanda";
palavras[3] = "Escola";
console.log(palavras);
// for(var indice = 0; indice < palavras.length; indice++){
//     console.log(palavras[indice])
// }
palavras.forEach(function (elemento) { return console.log(elemento); });
// Atividade
// -> Pesquisar sobre os métodos: sort, join, reverse, concat, splice, slice, pop
// ----------- Funções dentro do typescript
function minhaFuncao(msg, contador) {
    for (var i = 0; i < contador; i++) {
        console.log(msg);
    }
}
minhaFuncao("Aula de Typescript", 4);
function minhaFuncao2(msg) {
    return msg;
}
console.log(minhaFuncao2("Estamos apredendo typescript"));
function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(3, 4));
