class Course {
  get price() {
    return `${this.title} cost \$${this._price}`;
  }

  set price(value) {
    if (value < 0) {
    
      this._price = value * -1;
      console.log(`Converting ${value} for ${this.title} price to:`);
    } else {
      this._price = value;
    }

    console.log(`The price for ${this.title} is: \$${this._price}`);
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this._price = price;
  }

  lengthPrice() {
    return `The length to price ratio for ${this.title} is: ${this.length /
      this._price}`;
  }

  summary() {
    return `This ${this.title} course is ${this.length} weeks long and cost \$${this._price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, num) {
    super(title, length, price);
    this.numberOfExercises = num;
  }
}

class TheoreticalCourse extends Course {
  // constructor(title, length, price) {
  //   super(title, length, price);
  // }
  published(val) {
    this.published = val;
    // console.log(this)
    console.log(`Theoretical Course Published?  ${this.published}`);
  }

  publish() {
    console.log('Publishing...');
  }
}

const Science = new Course('Science', 40, 299);
const English = new Course('English', 25, 199);
const PCourse = new PracticalCourse('Practical Course', 35, 245, 300);
const TCourse = new TheoreticalCourse('Theoretical Course', 30, 300);

console.log('My Objects');
console.log(Science);
console.log(English);
console.log(PCourse);
console.log(TCourse);
TCourse.publish(true);
console.log('==========================');
console.log(Science.lengthPrice());
console.log(Science.summary());
console.log('==========================');
console.log(English.lengthPrice());
// console.log(English.summary());
console.log('==========================');
console.log(PCourse.lengthPrice());
console.log(PCourse.summary());

// console.log('Number of Exercises');
// console.log(PracticalCourse);

console.log('Getter');
console.log(Science.price);
console.log(English.price);
console.log(PCourse.price);
console.log(TCourse.price);

console.log('Setter');
English.price = -250;
Science.price = 500;
TCourse.price = 100;
PCourse.price = 150;

TCourse.publish();
TCourse.published(true);
