# hih6130-sensor
[![Node.js versions](https://img.shields.io/badge/Node.js-4.x%20through%207.x-brightgreen.svg)](https://nodejs.org) [![NPM version](https://img.shields.io/npm/v/hih6130-sensor.svg)](https://www.npmjs.com/package/hih6130-sensor)

[<img src="https://cdn.sparkfun.com//assets/parts/6/9/6/9/11295-02.jpg" width="150" align="right">](https://www.sparkfun.com/products/11295)


Welcome to hih6130-sensor, a Node.js I2C module for the the Honeywell HumidIcon HIH6130 Humidity and Temperature Sensor. Sparkfun sells a [HIH6130 breakout board](https://www.sparkfun.com/products/11295), and [here is the datasheet](http://cdn.sparkfun.com/datasheets/Prototyping/1443945.pdf).

This module uses [i2c-bus](https://github.com/fivdi/i2c-bus) which should provide access with Node.js on Linux boards like the Raspberry Pi Zero, 1, 2, or 3, BeagleBone, BeagleBone Black, or Intel Edison.

Since hih6130-sensor needs to talk directly to the I2C bus and requires access to /dev/i2c, you will typically need run Node with elevated privileges or add your user account to the i2c group: ```$ sudo adduser $USER i2c```

## Example Code

```
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
};

readSensorData();
```

##Example Output

```
> sudo node example.js          
data = {
  "status": 1,
  "humidity": 41.09137520600623,
  "temperature_C": 29.251052920710492
}
```
##Example Wiring

For an example of I2C setup on a Raspberry Pi, take a look at my [pi-weather-station project](https://github.com/skylarstein/pi-weather-station).
