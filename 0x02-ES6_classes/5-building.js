export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    // Create objs
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
