var Square = require("./Square");
var Circle = require("./Circle");

/**
 * Calculates the area for a given shape.
 */
module.exports = class AreaCalculator {
  constructor(shape) {
    this.shape = shape;
  }

  /**
   * Calculates the result of an area based on its shape.
   *
   * @returns {Object}
   */
  getArea() {
    if (this.shape instanceof Square) {
      return this.shape.length * this.shape.length;
    }

    if (this.shape instanceof Circle) {
      return 2 * 3.14 * this.shape.radius;
    }
  }
};
