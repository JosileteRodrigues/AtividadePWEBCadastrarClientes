class Pessoa{

    private _nome:string
    private _idade: string
    private _dataNascimento: Date

    constructor(nome:string, idade:string, dataNasc:Date){
        this._nome = nome
        this._idade = idade
        this._dataNascimento = dataNasc
    }

    getNome():string{
        return this._nome
    }

    setNome(nome:string){
        this._nome = nome
    }

    getIdade():string{
        return this._idade
    }

    setIdade(idade:string){
        this._idade = idade
    }

    getDataNasc():Date{
        return this._dataNascimento
    }

    setDataNasc(dataNasc:Date){
        this._dataNascimento = dataNasc
    }

}