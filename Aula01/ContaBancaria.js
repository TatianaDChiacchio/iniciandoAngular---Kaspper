var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, numero, saldo) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.mostrarDados = function () {
        console.log("O t\u00EDtular da conta \u00E9: ".concat(this.titular));
        console.log("O n\u00FAmero da conta \u00E9: ".concat(this.numero));
        console.log("O saldo da conta \u00E9: ".concat(this.saldo));
    };
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("O novo saldo da conta \u00E9: ".concat(this.saldo));
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("O novo saldo \u00E9: ".concat(this.saldo));
        }
        else {
            console.log("Saldo insuficiente para esse saque");
        }
    };
    ContaBancaria.prototype.getTitular = function () {
        return this.titular;
    };
    ContaBancaria.prototype.setTitular = function (novoTitular) {
        this.titular = novoTitular;
    };
    ContaBancaria.prototype.getNumero = function () {
        return this.numero;
    };
    ContaBancaria.prototype.setNumero = function (novoNumero) {
        this.numero = novoNumero;
    };
    ContaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    ContaBancaria.prototype.setSaldo = function (novoSaldo) {
        this.saldo = novoSaldo;
    };
    return ContaBancaria;
}());
var cc1 = new ContaBancaria("Renata", 123, 1000);
var cc2 = new ContaBancaria("Evelyn", 1234, 1500);
cc1.mostrarDados();
console.log("--------------------------------");
cc2.mostrarDados();
console.log("--------------------------------");
cc1.depositar(250);
cc2.depositar(560);
console.log("--------------------------------");
cc1.sacar(200);
cc2.sacar(3000);
