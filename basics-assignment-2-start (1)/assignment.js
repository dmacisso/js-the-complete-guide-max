const task3Element = document.getElementById('task-3');

function saySomething() {
  alert('Today is Tuesday!');
}

function greet(name) {
  alert('Hello ' + name + '!');
}

saySomething();
greet('David');

task3Element.addEventListener('click', saySomething);

function combineIt(a, b, c) {
  a = 'Hello ';
  b = 'How are you today? ';
  c = 'Fine, I hope ';
  alert(a + b + c);
}

combineIt()