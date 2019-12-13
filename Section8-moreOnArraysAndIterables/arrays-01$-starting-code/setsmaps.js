// const ids = new Set([1, 2, 3]);
// ids.add(2);
// // console.log(ids.has(2));
// // console.log(ids)

// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// const person1 = { name: 'David' };
// const person2 = { name: 'Tommy' };

// // const personData = new Map([['key', 'some value']]);
// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: '2 weeks ago', price: 200 }]);
// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key)
// }

// for (const value of personData.values()) {
//   console.log(value)
// }

/**Array Destructuring */
// const names = ['John', 'Michael', 'Patrick'];
// const [john, mike, pat] = names;
// console.log(pat)

let person = { name: 'Max' };

const persons = new WeakSet(); //only arrays or objects and allows GC
persons.add(person);

// ...some operations then
// person = null;
// will be cleared by GC.
console.log(person);

const personData = new WeakMap();

personData.set(person, 'Extra info');

person = null;
// will be cleared by GC.

console.log(personData);
