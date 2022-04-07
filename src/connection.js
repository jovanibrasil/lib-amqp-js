const amqplib = require('amqplib');

let channel;

module.exports = {
  connect: () => {
    if (channel) return channel;

    console.log('Connecting and openning a new channel.')
    channel = amqplib.connect(process.env.RABBIT_MQ_URL)
      .then(conn => conn.createChannel());

    return channel;
  }
}