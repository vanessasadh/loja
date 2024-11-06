import { ErroLoja } from "../errors/ErroLoja";
import { Loja } from "../Loja";

describe("Produto", () => {
    const descricaoValida = "Produto de Teste";
    const quantidadeEstoqueValida = 10;
    const precoValido = 5;
    const codigoValido = "ABC-1234";
    const dataEntradaValida = new Date();

    test("Criação bem-sucedida do produto", () => {
        const produto = new Loja(descricaoValida, quantidadeEstoqueValida, precoValido, codigoValido, dataEntradaValida);
        expect(produto.descricao).toBe(descricaoValida);
    });

    test("Descrição inválida deve lançar erro", () => {
        expect(() => new Loja("Curto", quantidadeEstoqueValida, precoValido, codigoValido, dataEntradaValida)).toThrow(ErroLoja);
    });

    test("Quantidade em estoque inválida deve lançar erro", () => {
        expect(() => new Loja(descricaoValida, 100, precoValido, codigoValido, dataEntradaValida)).toThrow(ErroLoja);
    });

    test("Preço inválido deve lançar erro", () => {
        expect(() => new Loja(descricaoValida, quantidadeEstoqueValida, 0, codigoValido, dataEntradaValida)).toThrow(ErroLoja);
    });

    test("Código inválido deve lançar erro", () => {
        expect(() => new Loja(descricaoValida, quantidadeEstoqueValida, precoValido, "ABCD-123", dataEntradaValida)).toThrow(ErroLoja);
    });

    test("Data de entrada futura deve lançar erro", () => {
        const dataFutura = new Date();
        dataFutura.setDate(dataFutura.getDate() + 1);
        expect(() => new Loja(descricaoValida, quantidadeEstoqueValida, precoValido, codigoValido, dataFutura)).toThrow(ErroLoja);
    });
});