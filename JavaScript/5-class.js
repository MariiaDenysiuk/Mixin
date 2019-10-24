'use strict';

const Figure = class {
  constructor(x, y, ...sides) {
    this.x = x;
    this.y = y;
    this.sides = sides;
  }

  toString() {
    let currentSides = [this.x, this.y];
    return currentSides.concat(this.sides).join();
  }
};

const equilateral = Category => class extends Category {
  constructor(x, y, ...side) {
    super(x, y, ...side);

  }
};

const Square = equilateral(Figure);


const p1 = new Square(10, 20, 50, 21, 23, 211);
console.log(p1.toString());
