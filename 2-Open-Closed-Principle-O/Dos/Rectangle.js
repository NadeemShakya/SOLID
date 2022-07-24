/**
 * Class Rectangle with length and height.
 */
module.exports = class Rectangle {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }

  /**
   * Gets the area of rectangle.
   *
   * @returns {Number}
   */
  getArea() {
    return this.length * this.height;
  }
};
