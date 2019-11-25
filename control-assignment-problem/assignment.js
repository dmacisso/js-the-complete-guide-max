const ranNum1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const ranNum2 = Math.random();

console.log(ranNum1, ranNum2);

(ranNum1 > 0.7 && ranNum2 > 0.7) || ranNum1 <= 0.2 || ranNum2 <= 0.2
  ? alert(
      `Either both ${ranNum1}  ${ranNum2} are greater than 0.7 or at least one is less than 0.2`
    )
  : null;



// console.log(randomNumber);
// randomNumber > 0.7 ? alert(`${randomNumber} reached greater then 0.7`) : null;

// const numbers = [2, 4, 6, 8, 9];

// for (const num of numbers) {
//   console.log(num);
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = numbers.length - 1; i > -1 ; i--) {
//   console.log(numbers[i]);
// }
