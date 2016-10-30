'use strict';

const HIH6130 = require('hih6130-sensor');

// HIH6130 constructor options object is optional, i2cBusNo defaults to 1
//
const hih6130 = new HIH6130({ i2cBusNo : 1 });

const readSensorData = () => {
  hih6130.readSensorData()
    .then((data) => {
      console.log(`data = ${JSON.stringify(data, null, 2)}`);
      setTimeout(readSensorData, 2000);
    })
    .catch((err) => {
      console.log(`HIH6130 read error: ${err}`);
      setTimeout(readSensorData, 2000);
    });
}

readSensorData();
