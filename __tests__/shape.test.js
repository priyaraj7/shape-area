import { Rectangle, Circle, Triangle } from "./../src/shape.js";

describe("Rectangle", () => {
  test("should correctly create a shape object with two lengths", () => {
    var recshape = new Rectangle(4, 2);
    console.log(recshape);
    debugger;
    expect(recshape.height).toEqual(4);
    expect(recshape.width).toEqual(2);
  });

  test("should correctly determine area of the rectangle", () => {
    let areaRectangle = new Rectangle(4, 2);
    expect(areaRectangle.calculateArea()).toEqual(8);
  });
});

describe("Circle", () => {
  test("should correctly determine area of the circle", () => {
    let areaCircle = new Circle(3);
    expect(areaCircle.calculateArea()).toBeCloseTo(28.26); // https://jestjs.io/docs/en/expect#tobeclosetonumber-numdigits
  });
});

describe("Triangle", () => {
  test("should correctly determine area of the triangle", () => {
    let areaTriangle = new Triangle(12, 20);
    expect(areaTriangle.calculateArea()).toEqual(120);
  });
});