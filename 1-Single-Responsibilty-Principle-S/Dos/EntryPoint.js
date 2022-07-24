var Square = require("./Square");
var Circle = require("./Circle");
const AreaCalculator = require("./AreaCalculator");
const OutputFormatter = require("./OutputFormatter");

const square = new Square(10);
const circle = new Circle(3);
const areaCalculator = new AreaCalculator(square);
// Using dedicated OutputFormatter to get output in desired format.
const outputFormatter = new OutputFormatter(areaCalculator.getArea());
const result = outputFormatter.toJSON();

console.log(result);
