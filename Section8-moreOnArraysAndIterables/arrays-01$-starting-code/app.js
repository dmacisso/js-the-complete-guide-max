// const numbers = [1, 2, 3];
// console.log(numbers);

/* In rare niche cases you and use the methods below.
// const moreNumbers = new Array(5, 2);
// const someMoreNumbers = new Array(5); // empty array length 5
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(4, 5);
// console.log(yetMoreNumbers);
*/

/* Array.from() Converts an iterable or an array-like obj to an array */
// const moreNumbers = Array.from('Hi!');
// console.log(moreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1]
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data ) {
//     console.log(dataPoint)
//   }
// }

// const hobbies = ['sports', 'cooking'];
// hobbies.push('reading');
// hobbies.unshift('coding');
// hobbies.pop();
// hobbies.shift();
// hobbies[1] = 'coding';
// // hobbies[5] = 'reading' //rarely used
// console.log(hobbies);

// hobbies.splice(1, 0, 'good food');
// console.log(hobbies);
// hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults; //a reference
// const storedResults = testResults.slice(); //a copy of the arry
// const storedResults = testResults.slice(2); //can specify a start and end index (not include)

// const storedResults = testResults.concat([3.99, 2]); // creates a new array with the concatenated (not nested) elements

// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.includes(10.99))
/* Doesn't work for objects - Reference values. */
// const personData = [{ name: 'David' }, { name: 'Thomas' }];
// console.log(personData.indexOf({ name: 'David' }));

/* find takes a function with three possible parameters
// iterator, index, the full array
// returns the first hit. */
// const david = personData.find((person, idx, persons) => {
//   return person.name === 'David';
// });

// david.name = 'Marc';

// console.log(david, personData);

// const tomIndex = personData.findIndex(
//   (person, idx, persons) => {
//     return person.name === 'Thomas';
//   });

//   console.log(tomIndex)

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// /* iterator, index, full-array */
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (tax + 1) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

/* iterator, index, full-array */
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  return { index: idx, taxAdjPrice: price * (tax + 1) };
  // OR
  // const priceObj = { index: idx, taxAdjPrice: price * (tax + 1) };
  // return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(sortedPrices);
// console.log(sortedPrices.reverse());

const filterPrices = prices.filter(price => price > 6);

console.log(prices, filterPrices);

// let sum = 0;
// prices.forEach(price => (sum += price));
// console.log(sum);

const initialValue = 0;

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, initialValue); // 0 initial value

// const sum = prices.reduce(
//   (prevValue, curValue) => prevValue + curValue,
//   initialValue
// );

// console.log(sum);

// const data = 'new york; 10.99; 2000';

// const transformedData = data.split(';');

// console.log(transformedData);

// const nameFragments = ['David', 'Macisso'];
// const fullName = nameFragments.join(' ');
// console.log(fullName);

// const copiedNameFragments = [...nameFragments];
// nameFragments.unshift('Mr');
// nameFragments.splice(2, 0, 'Vincent');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

const nameData = ['David', 'Macisso', 'Sr', 74];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInfo ] = nameData;

console.log(firstName, lastName, otherInfo)
