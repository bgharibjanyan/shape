class AbstractShape {
    constructor(color) {
      this.color = color;
    }
  
    calculateArea() {
      throw new Error("to colculate area");
    }
  
    calculatePerimeter() {
      throw new Error("to calc the Perimeter");
    }
  
    displayInfo() {
      throw new Error(` ${this.constructor.name}:: ${this.color}`);
    }
  }