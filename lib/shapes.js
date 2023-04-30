// Exports triangle, circle, and square classes

// TODO: Place any common functionality and properties shared by
// triangle, circle, and square classes in a parent class called "shape"

// TODO: Use inheritance to reuse code in child classes

// TODO: logo dimensions have to equal 300 x 200 pixels

// Parent class example:
class Shape {
    constructor(color, filled) {
      this.color = color;
      this.filled = filled;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    isFilled() {
      return this.filled;
    }
  
    setFilled(filled) {
      this.filled = filled;
    }
  };

// Children class example:
class Triangle extends Shape {
    constructor(base, height, color, filled) {
      super(color, filled);
      this.base = base;
      this.height = height;
    }
  
    getBase() {
      return this.base;
    }
  
    getHeight() {
      return this.height;
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius, color, filled) {
      super(color, filled);
      this.radius = radius;
    }
  
    getRadius() {
      return this.radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Square extends Shape {
    constructor(side, color, filled) {
      super(color, filled);
      this.side = side;
    }
  
    getSide() {
      return this.side;
    }
  
    getArea() {
      return Math.pow(this.side, 2);
    }
  }




  