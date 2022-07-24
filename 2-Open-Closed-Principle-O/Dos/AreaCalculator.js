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
    return this.shape.getArea();
  }
};
