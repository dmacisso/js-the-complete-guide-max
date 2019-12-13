// Functions are registered and stored in the heap..
function getName() {
  return prompt('Enter Your Name Please: ');
}

function greet() {
  const userName = getName();
 console.log('Hello ' + userName);
}

greet();
