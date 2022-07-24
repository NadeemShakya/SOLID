var Square = require('./Square');
var Circle = require('./Circle');
const AreaCalculator = require('./AreaCalculator');

const square = new Square(10);
const circle = new Circle(3);
const areaCalculator = new AreaCalculator(square);
const result = areaCalculator.getArea();

console.log(result);