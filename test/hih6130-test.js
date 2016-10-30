'use strict';

process.env.NODE_ENV = 'test';

const chai    = require('chai');
const HIH6130 = require('../HIH6130.js');
const expect  = chai.expect;

describe('hih6130-sensor', () => {
  it('it should receive valid sensor data', (done) => {
    let hih6130 = new HIH6130();
    expect(hih6130).to.be.an.instanceof(HIH6130);
    hih6130.readSensorData()
      .then((data) => {
        console.log(`HIH6130 sensor data: ${JSON.stringify(data)}`);
        expect(data).to.have.all.keys('humidity', 'temperature_C', 'status');
        expect(data.temperature_C).to.be.within(-40, 85); // per Bosch BME280 datasheet operating range
        expect(data.humidity).to.be.within(0, 100); // per Bosch BME280 datasheet operating range
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
