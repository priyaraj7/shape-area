export class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calculateArea() {
    return this.height * this.width;
  }
}

export class Circle {
  constructor(radius) {
    this.radius = radius; 
  }
  calculateArea() {
    return 3.14 * this.radius * this.radius;
  }
}

export class Triangle {
  constructor(height, base) {
    this.height = height;
    this.base = base;
  }
  calculateArea() {
    return 0.5 * this.height * this.base;
  }
}
