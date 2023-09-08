// 10-car.js
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }

  static get [Symbol.species]() {
    return this;
  }
}

export default Car;
