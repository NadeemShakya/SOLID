const Shape = require("./Shape");

/**
 * Class Rectangle with width and height.
 */
module.exports = class Rectangle extends Shape {
  constructor(width, height) {
    super();

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
