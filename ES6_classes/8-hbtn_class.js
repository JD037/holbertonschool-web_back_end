// 8-hbtn_class.js
/* eslint-disable no-underscore-dangle */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // This method is invoked when a primitive value is expected (e.g., using the + operator, etc.)
  valueOf() {
    return this._size;
  }

  // This method is invoked when a string representation of the class is needed
  toString() {
    return this._location;
  }
}
