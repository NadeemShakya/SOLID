/**
 * Square class with a length.
 */
module.exports = class Square {
  constructor(length) {
    this.length = length;
  }

  /**
   * Gets the area of square.
   *
   * @returns {Number}
   */
  getArea() {
    return this.length * this.length;
  }
};
