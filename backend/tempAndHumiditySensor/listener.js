var mqtt = require('mqtt');
const express = require('express');
const { MQTT_CREDENTIALS } = require('./constants');

var app = express();
var PORT = 9000;

var sensorData = {
  temperature: 0,
  humidity: 0,
};

//initialize the MQTT client
var client = mqtt.connect(MQTT_CREDENTIALS);

//setup the callbacks
client.on('connect', function () {
  console.log('Connected');
});

client.on('error', function (error) {
  console.log(error);
});

client.on('message', function (topic, message) {
  //Called each time a message is received
  console.log('Received message:', topic, message.toString());
  sensorData = JSON.parse(message);
  console.log(sensorData);
});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// app.get('/data', function (req, res) {

//     console.log("data")
// //   client.on('message', function (topic, message) {
// //     //Called each time a message is received
// //     console.log('Received message:', topic, message.toString())
// //     sensorData = JSON.parse(message)

// //     res.send(sensorData)
// //   })
// })

app.listen(PORT);
