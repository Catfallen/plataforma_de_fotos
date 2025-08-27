require('dotenv').config();
const express = require('express');
const { MercadoPagoConfig, Payment } = require('mercadopago');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const client = new MercadoPagoConfig({
    accessToken: process.env.mercado_pago_public_acess_token,
    options: { timeout: 5000 },
});

const payment = new Payment(client);

// Endpoint POST /pagar
app.post('/pagar', async (req, res) => {
    const { transaction_amount, description, payer_email } = req.body;

    if (!transaction_amount || !description || !payer_email) {
        return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
    }

    const body = {
        transaction_amount: Number(transaction_amount),
        description,
        payment_method_id: 'pix',
        payer: {
            email: payer_email
        }
    };

    try {
        const response = await payment.create({ body });
        console.log(response);
        return res.status(201).json(response);
    } catch (error) {
        console.error('Erro ao criar pagamento:', error);
        return res.status(500).json({ error: 'Erro ao processar pagamento.' });
    }
});


app.get('/teste',(req,res)=>{
    res.send('teste');
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
