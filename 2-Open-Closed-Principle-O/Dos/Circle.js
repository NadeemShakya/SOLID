/**
 * Circle class with a radius.
 */
module.exports = class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  /**
   * Gets the area of circle.
   *
   * @returns {Number}
   */
  getArea() {
    return 2 * Math.PI * this.radius;
  }
};
