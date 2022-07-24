const Square = require("./Square");
const Rectangle = require("./Rectangle");

const rectangle = new Rectangle(2, 5);
const square = new Square(10, 10);

/**
 * Makes any rectangle twice wider.
 */
function makeRectangleTwiceWider(rectangle) {
  rectangle.setWidth(rectangle.width * 2);
}

makeRectangleTwiceWider(rectangle);
// NOTE: This is a code-smell 💩
makeRectangleTwiceWider(square);

const rArea = rectangle.getArea();
const sArea = square.getArea();

console.log({
  rArea,
  sArea,
});
