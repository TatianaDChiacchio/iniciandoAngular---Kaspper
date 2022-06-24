class ContaBancaria{

    private titular:string
    private numero:number
    private saldo:number

    constructor(titular:string, numero:number, saldo:number){
        this.titular = titular
        this.numero = numero
        this.saldo = saldo
    }

    mostrarDados():void{

        console.log(`O títular da conta é: ${this.titular}`)
        console.log(`O número da conta é: ${this.numero}`)
        console.log(`O saldo da conta é: ${this.saldo}`)
    }

    depositar(valor:number):void{
        this.saldo += valor
        console.log(`O novo saldo da conta é: ${this.saldo}`)
    }

    sacar(valor:number):void{
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`O novo saldo é: ${this.saldo}`)
        }else{
            console.log("Saldo insuficiente para esse saque")
        }

    }

    getTitular():string{
        return this.titular
    }
    setTitular(novoTitular: string):void{
        this.titular = novoTitular
    }

    getNumero():number{
        return this.numero
    }
    setNumero(novoNumero: number):void{
        this.numero = novoNumero
    }

    getSaldo():number{
        return this.saldo
    }
    setSaldo(novoSaldo: number):void{
        this.saldo = novoSaldo
    }
}

var cc1 = new ContaBancaria("Renata", 123,1000)
var cc2 = new ContaBancaria("Evelyn", 1234, 1500)

cc1.mostrarDados()
console.log("--------------------------------")
cc2.mostrarDados()
console.log("--------------------------------")
cc1.depositar(250)
cc2.depositar(560)
console.log("--------------------------------")
cc1.sacar(200)
cc2.sacar(3000)