const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: process.env.mercado_pago_public_acess_token
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { transaction_amount, description, payer_email } = req.body;

    const payment = await mercadopago.payment.create({
      transaction_amount: Number(transaction_amount),
      description,
      payment_method_id: "pix",
      payer: { email: payer_email }
    });

    res.status(200).json({
      id: payment.body.id,
      qr_code: payment.body.point_of_interaction.transaction_data.qr_code,
      qr_code_base64: payment.body.point_of_interaction.transaction_data.qr_code_base64
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};