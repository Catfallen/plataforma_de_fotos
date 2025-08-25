const express = require('express');
const router = express.Router();

const pedidosController = require('../controller/pedidos.controller');

router.get('/qrcode',pedidosController.getQrCode);

module.exports = router;