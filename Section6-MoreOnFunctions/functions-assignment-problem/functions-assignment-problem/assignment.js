const sayHello = name => console.log(`Hi ${name}!`);
sayHello("David");

const sayHello2 = (greet, name) => console.log(`${greet} ${name}!`);
sayHello2("Hello", "David");

const sayHello3 = () => console.log("Hi David");
sayHello3();

const DEFAULT_NAME = "Robert";
const sayHello5 = (name = DEFAULT_NAME) => "Hi " + name;
console.log(sayHello5());
console.log(sayHello5("Peter"));

// const checkInput = (...input) => {

//   return input.length === 0 ? console.log("No arguments") : console.log(input);

// };

// checkInput("a", "b", "c");
// checkInput("biking", "chess", "baseball")
// checkInput(1, 3, 5, 7);
// checkInput();

const checkInput = (cb, ...input) => {
  let hasEmptyText = false;
  for (const text of input) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not Empty");
  },
  "hello",
  "",
  "three",
  "fdasdfa"
);
