'use strict';

const HIH6130 = require('hih6130-sensor');

// The HIH6130 constructor options are optional. Default i2cBusNo 1, i2cAddress 0x27.
// 
const options = { i2cBusNo : 1, i2cAddress : HIH6130.HIH6130_DEFAULT_I2C_ADDRESS() };

const hih6130 = new HIH6130(options);

const readSensorData = () => {
  hih6130.readSensorData()
    .then(data => console.log(`data = ${JSON.stringify(data, null, 2)}`))
    .catch(err => console.log(`HIH6130 read error: ${err}`))
  setTimeout(readSensorData, 2000);
}

readSensorData();
