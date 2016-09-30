# hih6130-sensor

Welcome to hih6130-sensor, a Node.js I2C driver for the HIH6130 Humidity and Temperature Sensor. Sparkfun has a [HIH6130 breakout board](https://www.sparkfun.com/products/11295), and [here is the datasheet](http://cdn.sparkfun.com/datasheets/Prototyping/1443945.pdf).

This module uses [i2c-bus](https://github.com/fivdi/i2c-bus) which should provide access with Node.js on Linux boards like the Raspberry Pi Zero, 1, 2, or 3, BeagleBone, BeagleBone Black, or Intel Edison.

Since hih6130-sensor needs to talk directly to the I2C bus and requires access to /dev/i2c, you will typically need run Node with elevated privileges.

hih6130-sensor plays well with Node.js 4.x and 6.x

## Example Code

```
const HIH6130 = require('hih6130-sensor');

// The HIH6130 constructor options are optional.
// Defaults are i2cBusNo 1, i2cAddress 0x27.
// 
const options = { i2cBusNo   : 1,
                  i2cAddress : HIH6130.HIH6130_DEFAULT_I2C_ADDRESS() };

const hih6130 = new HIH6130(options);

const readSensorData = () => {
  hih6130.readSensorData()
    .then(data => console.log(`data = ${JSON.stringify(data, null, 2)}`))
    .catch(err => console.log(`HIH6130 read error: ${err}`))
  setTimeout(readSensorData, 2000);
}

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
