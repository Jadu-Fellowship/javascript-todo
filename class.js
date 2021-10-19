class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log("I (Animal) can walk!!!");
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }
}
class Cat extends Animal {
  //   constructor() {
  //     this.name = "";
  //     this.age = "";
  //     this.height = "";
  //   }
  constructor(name, age, height) {
    super(name, age);
    this.height = height;
  }

  sleep() {}

  // walk() {
  //   console.log("I (cat) can walk!");
  // }

  printInfo() {
    JSON.stringify();
    console.log(
      `Cat name is ${this.name}, age is ${this.age}, height is ${this.height}`
    );
  }
}

class C extends Cat {}
function walk() {
  console.log("I (dog) can walk!");
}

const cat1 = new Cat("cat1", 2, 3);
// cat1.name = "cat1";
// cat1.age = 2;
// cat1.height = 3;
const cat2 = new Cat("cat2", 3, 2);
cat2.name = "cat2222";

// walk();
cat2.walk();
cat2.printInfo();
// cat1.walk();
// cat1.printInfo();
// console.log(cat2);
// console.log(cat2);
// Constructor called!!

// Animal
// Cat   Dog
// C
