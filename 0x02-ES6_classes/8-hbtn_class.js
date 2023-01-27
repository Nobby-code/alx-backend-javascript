export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](dType) {
    if (dType === 'string') return this._location;
    if (dType === 'number') return this._size;
    return 5;
  }
}
