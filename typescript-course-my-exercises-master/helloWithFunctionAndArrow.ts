class Person {
  name: string;

  constructor(name) {
    this.name = name;
  }

  sayHiFunction = function() {
    console.log(this.name);
  }

  sayHiArrowFuntion = () => console.log(this.name);
}

const p = new Person("Alan");

p.sayHiFunction();
p.sayHiArrowFuntion();