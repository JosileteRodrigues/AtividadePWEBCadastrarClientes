class Empresa extends PessoaJuridica{

    private contas: Array<Conta>
    
    constructor(nome:string,idade:string,dataNasc:Date,cnpj:string){
        super(nome,idade,dataNasc,cnpj)
        this.contas = new Array<Conta>()
    }

    saldoTotalContas(){
        let valorTotal = 0
        this.contas.forEach(conta => {
            valorTotal += conta.getSaldo()
        });
        return valorTotal
    }

    mediaSaldoContas(){

        let media = this.saldoTotalContas()/this.contas.length

        return media
    }

    acrescentarConta(conta:Conta){
        this.contas.push(conta)
    }

    pesquisarConta(numero:string):Conta{
        return
    }

    removerConta(numero:string){
        const conta = this.pesquisarConta(numero)
        const indexConta = this.contas.indexOf(conta)
        this.contas.splice(indexConta,1)
    }

}