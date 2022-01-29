const MQTT_CREDENTIALS = {
  host: '5b990cfcb09f4aa483c4403f10cee039.s1.eu.hivemq.cloud',
  port: 8883,
  protocol: 'mqtts',
  username: 'supriyo',
  password: 'Supriyo@07',
};

const getTemperatureData = () => {
  const temperature = Math.floor(15 + Math.random() * 25);
  console.log({ temperature });
  return {
    temperature,
  };
};

module.exports = { MQTT_CREDENTIALS, getTemperatureData };
