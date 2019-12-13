const numbers = [2, 7.5, 17, -1, 4, -12, 16, 4];

const filterNumbers = numbers.filter(num => num > 5);

console.log("Filtered Numbers: " + filterNumbers);

const newNumbers = numbers.map(val => ({ num: val }));

console.log(newNumbers)
// console.log("Mapped Numbers " + newNumbers);

const multiplyNumbs = numbers.reduce((prev, curr) => prev * curr, 1)

console.log("Multiply Numbers " + multiplyNumbs);

// const maxValue = Math.max(...numbers);
// console.log(maxValue)

const findMax = numb => {
  console.log(Math.max(...numb));
};

const findMinMax = numbs => {
  let minMax = [];
  const min = Math.min(...numbs);
  minMax.push(min);
  const max = Math.max(...numbs);
  minMax.push(max);
  return minMax;
};

const [min, max] = findMinMax(numbers);

console.log(`Minimum number is ${min} and the maximum number is ${max}`);

// findMinMax([5, 4, 7]);

// num = [5,4,7];
// console.log(Math.max(...num));

const list = new Set();

list.add(5);
list.add(7);
list.add(3);
list.add(5);
list.add(5);
console.log(list);
