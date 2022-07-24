var Square = require("./Square");
const Rectangle = require("./Rectangle");

const square = new Square(10);
const rectangle = new Rectangle(4, 6);

square.setHeight(11);
rectangle.setHeight(5);

const sArea = square.getArea();
const rArea = rectangle.getArea();

console.log({
  sArea,
  rArea,
});
