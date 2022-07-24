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
    let result;

    if (this.shape instanceof Square) {
      result = this.shape.length * this.shape.length;
    }

    if (this.shape instanceof Circle) {
      result = 2 * 3.14 * this.shape.radius;
    }

    // DON'T: Area calculator shouldn't be doing the formatting job.
    return JSON.stringify({ output: result });
  }
};
