/**
 * Circle class with a radius.
 */
module.exports = class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return 2 * 3.14 * this.radius;
    }
}