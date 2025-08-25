const crc = require('crc');

function calcularCRC16(payload) {
  // Adiciona "6304" no final antes de calcular
  const payloadComCRC = payload + "6304";
  const valorCRC = crc.crc16ccitt(payloadComCRC).toString(16).toUpperCase();
  return valorCRC.padStart(4, '0');
}

module.exports = calcularCRC16;