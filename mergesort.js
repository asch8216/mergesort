function split(arr) {
  console.log(arr);
  if (arr.length === 1) {
    return [[], arr];
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);

  let right = arr.slice(middle);
  return [left, right];
}

function merge(arr1, arr2) {
  let temp = [];

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let leftInd = 0;
  let rightInd = 0;
  if (arr1.length > arr2.length) {
    for (let i = rightInd; i < arr2.length; i++) {
      if (arr2[i] < arr1[leftInd]) {
        temp.push(arr2[i]);
      }
    }
  }
  //   if (arr1.length === 0 && arr2.length === 0) {
  //     return temp;
  //   } else {
  //     if (arr1[0] < arr2[0]) {
  //       temp.push(arr1[0]);
  //       arr1.slice(arr1[0]);
  //     } else {
  //       temp.push(arr2[0]);
  //       arr2.slice(arr2[0]);
  //     }
  //     return temp;
  //   }
}

function mergeSort(arr) {
  console.log(arr);
  if (arr.length === 1) {
    return arr;
  }
  let splitArr = split(arr);
  let left = splitArr[0];
  let right = splitArr[1];
  console.log(left, right);
  mergeSort(left);
  mergeSort(right);
  merge(left, right);
}

let sortingArr = [1, 2, 5];
let sortingArr1 = [3, 4, 7];
// split(sortingArr);

console.log(mergeSort([1, 5, 3]));
