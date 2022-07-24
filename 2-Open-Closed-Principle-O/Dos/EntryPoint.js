var Square = require('./Square');
var Circle = require('./Circle');
const Rectangle = require('./Rectangle');
const AreaCalculator = require('./AreaCalculator');
const OutputFormatter = require('./OutputFormatter');



const square = new Square(10);
const circle = new Circle(3);
const rectangle = new Rectangle(4, 6);
const areaCalculator = new AreaCalculator(rectangle);

const result = areaCalculator.getArea();
const outputFormatter = new OutputFormatter(result);

console.log(outputFormatter.toJSON());