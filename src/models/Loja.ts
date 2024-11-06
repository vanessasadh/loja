import { ErroLoja } from "../models/errors/ErroLoja";

export class Loja {
    private _descricao: string;
    private _quantidadeEstoque: number;
    private _preco: number;
    private _codigo: string;
    private _dataEntrada: Date;

    constructor(descricao: string, quantidadeEstoque: number, preco: number, codigo: string, dataEntrada: Date) {
        this.descricao = descricao;
        this.quantidadeEstoque = quantidadeEstoque;
        this.preco = preco;
        this.codigo = codigo;
        this.dataEntrada = dataEntrada;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(valor: string) {
        if (valor.length < 10) {
            throw new ErroLoja("Descrição deve ter no mínimo 10 caracteres.");
        }
        this._descricao = valor;
    }

    get quantidadeEstoque(): number {
        return this._quantidadeEstoque;
    }

    set quantidadeEstoque(valor: number) {
        if (valor < 0 || valor > 99) {
            throw new ErroLoja("Quantidade em estoque deve estar entre 0 e 99.");
        }
        this._quantidadeEstoque = valor;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(valor: number) {
        if (valor < 1) {
            throw new ErroLoja("Preço deve ser no mínimo 1.");
        }
        this._preco = valor;
    }

    get codigo(): string {
        return this._codigo;
    }

    set codigo(valor: string) {
        const regex = /^[A-Z]{3}-\d{4}$/;
        if (!regex.test(valor)) {
            throw new ErroLoja("Código deve estar no formato AAA-0000.");
        }
        this._codigo = valor;
    }

    get dataEntrada(): Date {
        return this._dataEntrada;
    }

    set dataEntrada(valor: Date) {
        const hoje = new Date();
        if (valor > hoje) {
            throw new ErroLoja("Data de entrada não pode ser futura.");
        }
        this._dataEntrada = valor;
    }
}

        


    
        

    
