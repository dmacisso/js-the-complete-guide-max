// class Person {
//   name = "David";

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(`Hi, I am  ${this.name} and I am ${this.age} years old`);
//   }
// }

function Person() {
  /* the new key word does this behind the scenes */
  // this = {};
  this.age = 30;
  this.name = "David";
  this.greet = function() {
    console.log(
      "Hi, I am " + this.name + " and I am" + this.age + " years old"
    );
  };
  /* new key word does this behind the scenes */
  // return this;
}

const p = new Person();
p.greet();
console.log(p.__proto__);
