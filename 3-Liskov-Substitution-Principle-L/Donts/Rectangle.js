/**
 * Class Rectangle with length and height.
 */
module.exports = class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  /**
   * Gets the area of rectangle.
   *
   * @returns {Number}
   */
  getArea() {
    return this.width * this.height;
  }
};
