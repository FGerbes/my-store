const username: string | number = 'nicobytes';
const sum = (a: number, b: number) => {
  return a + b;
}

class Person {
  constructor(public age: number, public lastName: string) {
  }
  // age: number;
  // lastName: String;

  // constructor(age: number, lastName: string) {
  //   this.age = age;
  //   this.lastName = lastName;
  // }
}

const nico = new Person(12, 'Molina');
