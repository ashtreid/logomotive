// Exports triangle, circle, and square classes

class Shape {
    constructor(type) {
      this.type = type;
    }

    render() {
        throw new Error("We're running out of steam here! Child class needs a render() method!");
    }
};
  
class Triangle extends Shape {
    constructor(type, color) {
      super(type);
      this.color = color;
    }

    render() {
        return `<polygon points='150, 0 300, 200 0, 200' fill='${this.color}' />`;
    }
};
  
class Circle extends Shape {
    constructor(type, color) {
        super(type);
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill='${this.color}' />`;
    }
};
  
class Square extends Shape {
    constructor(type, color) {
        super(type);
        this.color = color;
    }

    render() {
        return `<rect width="100%" height="100%" fill='${this.color}' />`;
    }
};

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
};


  