import { Engine } from './Engine';

export class Car {
  engine: Engine;
  accessoryList: string = "";

  constructor(engine: Engine) {
    this.engine = engine;
  }

  public start() {
    console.log('Engine started: ' + this.engine.type);
  }


  public stop() {
    console.log('Engine stoped: ' + this.engine.type);
  }

  addAccessories(...accessories) {
    accessories.forEach(element => {
      this.accessoryList += element;
      this.accessoryList += ", ";
    });
  }
}