class Cliente{
    //atributos -> são características do Cliente
    private nome: string
    private profissao: string
    private idade:number

    constructor(nome:string, profissao:string, idade:number){
        this.nome = nome
        this.profissao = profissao
        this.idade = idade
        
    }

    mostrarDados():void{
        console.log("O nome do cliente é: " + this.nome)
        console.log("A profissão do cliente é: " + this.profissao)
        console.log("A idade do cliente é: " + this.idade + " anos")
    }

    fazerAniversario():number{
        this.idade++
        return this.idade
    }

    // get -> leitura de dados
    // set -> edicao de dados

    public getNome():string{
        return this.nome
    }

    public setNome(nome:string):void{
        this.nome = nome
    }

    public getIdade():number{
        return this.idade
    }

    public setIdade(novaIdade: number):void{
        if(novaIdade > 18){
            this.idade = novaIdade
        }
    }

    public getProfissao():string{
        return this.profissao
    }

    public setProfissao(novaProfissao: string):void{
       this.profissao = novaProfissao
    }

}

var cliente1 = new Cliente("Dario", "Programador", 26)
var cliente2 = new Cliente("Fábio", "Engenheiro", 31)

console.log(cliente1.getNome())
console.log(cliente2.getNome())

cliente1.setNome("Dario Junior")
console.log(cliente1.getNome())

cliente2.setIdade(-2)

console.log(cliente2.getIdade())

cliente1.fazerAniversario()
console.log("A nova idade do cliente " + cliente1.getNome() + " é: " + cliente1.getIdade() + " anos.")
console.log(`A nova idade do cliente ${cliente1.getNome()} é: ${cliente1.getIdade()} anos`)

// cliente1.mostrarDados()
// console.log("-----------------------------")
// cliente2.mostrarDados()



