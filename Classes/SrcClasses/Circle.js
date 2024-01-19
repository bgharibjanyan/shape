class Circle extends AbstractShape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
      this.drawer= new Drawable();
      this.drawer.draw=this.draw;
    }
  
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  
    draw() {
        console.log(`${this.radius}`);
        const circle = document.createElement('div');
    
        circle.style.backgroundColor = `${this.color}`;
        circle.style.height = `${this.radius}px`;
        circle.style.width = `${this.radius}px`;
        circle.style.borderRadius = '50%';

        circle.onclick = () => {
          console.log(` Color: ${this.color}, Radius: ${this.radius}`);
        };
    
        const body = document.getElementById("body");
        body.appendChild(circle);
    }

  }