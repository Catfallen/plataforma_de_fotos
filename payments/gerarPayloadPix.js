function gerarPayloadPix({ chave, nome, cidade, valor, txid }) {
    // Esse é um exemplo simples de payload dinâmico
    return `
000201
26580014BR.GOV.BCB.PIX
01${chave.length.toString().padStart(2, '0')}${chave}
52040000
5303986
54${valor.toFixed(2).replace('.', '')}
58${nome.length.toString().padStart(2, '0')}${nome}
59${cidade.length.toString().padStart(2, '0')}${cidade}
62${txid.length.toString().padStart(2, '0')}05${txid}
6304`; // CRC deve ser calculado corretamente (simplificado aqui)
}


module.exports = gerarPayloadPix;