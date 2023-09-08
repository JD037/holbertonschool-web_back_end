// 7-airport.js
/* eslint-disable no-underscore-dangle */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  // This method overrides the default behavior of util.inspect, which is used by console.log
  // With this, we can customize the output when console.log(instance) is called
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
