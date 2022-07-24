const Rectangle = require("./Rectangle");

/**
 * Square class with a length.
 * DON'T: Abstraction is wrong. Square cannot be extended from Rectangle.
 */
module.exports = class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
};
