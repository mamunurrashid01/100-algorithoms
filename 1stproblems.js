// an input array = [1, 2, 1]
// where replace 1 to 3 that means the new array like =[3, 2, 3]
function arrayReplace(inputArray, elementToReplace, substractToelement) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = substractToelement;
    }
  });
  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);

// 02 problems write a function that have two params and
// out put will be sum of two params

// 1st solution
function sum(param1, param2) {
  return param1 + param2;
}

// 2nd solution
function totalSum(...params) {
  // if i use rest operator as a params then it will returns a array
  //   but if i use just "params" parameter and then if i pass a array as a value then i have no need to rest operator
  console.log(params);
  let total = 0;
  params.forEach((element) => {
    total += element;
  });
  return total;
}
// without rest operator i should pass a array like as totalSum([1, 2, 3, 4 ,5])
console.log(totalSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(totalSum([1, 2, 3, 4, 5]));
