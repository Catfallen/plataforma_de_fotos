const { payload } = require('pix-payload');
const QRCode = require('qrcode');

// Dados do PIX
/*
const pixData = {
  key: 'marcosalex9061@gmail.com',      // <--- 'key', não 'chave'
  name: 'Marcos Alexandre Sousa Mesquita',
  city: 'Acailandia',
  amount: 50.00,
  txid: '1234567890abcdef'
};
*/

const pixData = {
  key: 'mar', // Chave de teste válida
  name: 'Banco de Teste',      // Nome do recebedor
  city: 'SAO PAULO',           // Cidade do recebedor
  amount: 10.00,               // Valor do PIX
  txid: 'TESTE1234'            // Identificador único da transação
};


// Gerar payload PIX
const pixPayload = payload(pixData);
console.log(pixPayload);
// Gerar QR Code em imagem PNG
QRCode.toFile('pix.png', pixPayload, {
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
}, (err) => {
  if (err) throw err;
  console.log('QR Code PIX gerado com sucesso! Arquivo: pix.png');
});
