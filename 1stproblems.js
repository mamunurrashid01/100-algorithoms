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
