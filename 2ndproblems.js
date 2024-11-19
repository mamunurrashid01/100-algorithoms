// add border first position and last position on a string of array.

function addBorder(picture) {
  let wall = "*".repeat(picture[0].length + 2);
  picture.unshift(wall);
  picture.push(wall);
  for (let i = 0; i < picture.length; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}

console.log(addBorder(["abc", "ded"]));

// problems-04: Check an array that is sequence or not

function sequence(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < inputArray[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(sequence([1, 2, 3, 4, 5]));
console.log(sequence([1, 2, 3, 4, 5, 7, 70, 10]));

// problems 05
// summation of all prime numbers
function sumAllPrime(numbers) {
  let primeTotal = 0;
  let primeArr = [];
  for (let i = 2; i <= numbers; i++) {
    for (let j = 2; j <= numbers; j++) {
      if (i === j) {
        primeTotal += i;
        primeArr.push(i);
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return primeArr;
}
console.log(sumAllPrime(50));

// another way to solve above questions
function isprime(num) {
  let total = 0;
  let getPrime = [];
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= num; j++) {
      if (i === j) {
        total += i;
        getPrime.unshift(i);
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return getPrime;
}

console.log(isprime(10));
