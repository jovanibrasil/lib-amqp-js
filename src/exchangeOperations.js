const { connect } = require ("./connection");
 
const sendToExchange = (exchangeName, message) => {
  connect()
    .then(channel => {
      channel.checkExchange(exchangeName)
        .then(() => channel.publish(exchangeName, '', Buffer.from(JSON.stringify(message))))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err))
}

module.exports = {
  sendToExchange
}