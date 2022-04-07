const queueOperations = require('./src/queueOperations');
const exchangeOperations = require('./src/exchangeOperations');

module.exports = {
  ...queueOperations,
  ...exchangeOperations
}