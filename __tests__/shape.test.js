import { Rectangle } from './../src/shape.js';

describe('Rectangle', () => {

    test('should correctly create a shape object with two lengths', () => {
        var recshape = new Rectangle(4,2);
        console.log(recshape);
        debugger;
        expect(recshape.height).toEqual(4);
        expect(recshape.width).toEqual(2);

      });
      
  test('should correctly determine area of the rectangle', () => {
    let areaRectangle = new Rectangle(4,2);
    expect(areaRectangle.checkType()).toEqual(8);
});
});