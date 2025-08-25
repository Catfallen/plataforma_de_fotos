const QRCode = require("qrcode");
const { Pix } = require("pix-payload"); // <- garante que está importando corretamente

const PixPayload = require("pix-payload");

function getQrCode(req, res) {
  const payload = new PixPayload()
    .setPixKey("SEU_PIX_AQUI")
    .setMerchantName("Nome da Loja")
    .setMerchantCity("CIDADE")
    .setTxid("Pedido123")
    .setAmount(10.5);

  const payloadString = payload.buildPayload();
  res.send(payloadString); // retorna só o código payload
}

module.exports = {
  getQrCode,
};
