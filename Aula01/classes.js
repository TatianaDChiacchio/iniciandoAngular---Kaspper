var Cliente = /** @class */ (function () {
    function Cliente(nome, profissao, idade) {
        this.nome = nome;
        this.profissao = profissao;
        this.idade = idade;
    }
    Cliente.prototype.mostrarDados = function () {
        console.log("O nome do cliente é: " + this.nome);
        console.log("A profissão do cliente é: " + this.profissao);
        console.log("A idade do cliente é: " + this.idade + " anos");
    };
    Cliente.prototype.fazerAniversario = function () {
        this.idade++;
        return this.idade;
    };
    // get -> leitura de dados
    // set -> edicao de dados
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.getIdade = function () {
        return this.idade;
    };
    Cliente.prototype.setIdade = function (novaIdade) {
        if (novaIdade > 18) {
            this.idade = novaIdade;
        }
    };
    Cliente.prototype.getProfissao = function () {
        return this.profissao;
    };
    Cliente.prototype.setProfissao = function (novaProfissao) {
        this.profissao = novaProfissao;
    };
    return Cliente;
}());
var cliente1 = new Cliente("Dario", "Programador", 26);
var cliente2 = new Cliente("Fábio", "Engenheiro", 31);
console.log(cliente1.getNome());
console.log(cliente2.getNome());
cliente1.setNome("Dario Junior");
console.log(cliente1.getNome());
cliente2.setIdade(-2);
console.log(cliente2.getIdade());
cliente1.fazerAniversario();
console.log("A nova idade do cliente " + cliente1.getNome() + " é: " + cliente1.getIdade() + " anos.");
console.log("A nova idade do cliente ".concat(cliente1.getNome(), " \u00E9: ").concat(cliente1.getIdade(), " anos"));
// cliente1.mostrarDados()
// console.log("-----------------------------")
// cliente2.mostrarDados()
