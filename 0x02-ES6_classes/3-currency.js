export default class Currency {
  //constructor
  constructor(code, name) {
    this._code = code;
    this._name = name
  }
 
  // getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
  
  //setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Method to display full currency
  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
