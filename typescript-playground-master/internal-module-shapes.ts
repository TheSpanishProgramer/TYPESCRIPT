namespace Shapes {

  export interface IRectangle {
    width: number;
    height: number;
    getArea(): number;
  }

  export class Rectangle implements IRectangle {
    constructor(public width: number, public height: number) {
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.width * this.height;
    }
  }
}

namespace MyProgram {
  
  export function run() {
    var r1: Shapes.IRectangle = new Shapes.Rectangle(10, 20);
    console.log(r1.getArea());
  }
}

MyProgram.run();