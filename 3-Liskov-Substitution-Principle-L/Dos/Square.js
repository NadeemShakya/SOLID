const Shape = require("./Shape");

/**
 * Square class with a width.
 */
module.exports = class Square extends Shape {
  constructor(length) {
    super();

    this.width = length;
    this.height = length;
  }

  setWidth(length) {
    this.width = this.height = length;
  }

  setHeight(length) {
    this.width = this.height = length;
  }

  /**
   * Gets the area of square.
   *
   * @returns {Number}
   */
  getArea() {
    return this.width * this.width;
  }
};
