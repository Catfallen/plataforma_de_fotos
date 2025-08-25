const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
//const pedidosRoutes = require('./routes/pedidos.routes');
const QRCode = require('qrcode');


const gerarPayloadPix = require('./payments/gerarPayloadPix');
const calcularCRC16 = require('./payments/calcularCRC16');



app.use(express.json());
app.use(cors());
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);

//app.use('/pedido',pedidosRoutes);




app.listen(port, ()=>{
    console.log(`http://localhost:${3000}`);
});