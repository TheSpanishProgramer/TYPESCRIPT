export class Person {
  name: string;
  surname: string;
  age: number;
  phone?: string;

  constructor(n: string, s: string, a: number, p?: string) {
    this.name = n;
    this.surname = s;
    this.age = a;
    this.phone = p;
  }

  getName(): string {
    return this.name;
  }
}