function addTwoNumbers(num1, num2) {
  return `num1 + num2 is: ${num1 + num2}`;
}

function printEvenNumbers(arrayOfNumbers) {
  return arrayOfNumbers.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
}

addTwoNumbers(2, 3);

printEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
