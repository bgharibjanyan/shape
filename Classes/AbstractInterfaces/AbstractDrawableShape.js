class Drawable {
  constructor() {
      if (new.target === Drawable) {
          throw new Error("object can't be created");
      }
  }

  draw() {
      throw new Error("draw method must be implemented by subclasses");
  }
}