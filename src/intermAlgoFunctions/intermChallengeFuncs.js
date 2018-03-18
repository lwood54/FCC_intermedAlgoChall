// Challenge 1: summ all numbers between high and low in given array range
export const sumAll = arr => {
  let upperLim = Math.max(...arr);
  let lowerLim = Math.min(...arr);
  let allNums = [];
  for (var i = lowerLim; i <= upperLim; i++) {
    allNums.push(i);
  }
  let total = allNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return total;
};

// Challenge 2: compare 2 arrays and create a new array that holds only the values
//      not found in both arrays.
export const diffArray = (arr1, arr2) => {
  let newArr = [];
  let diffArr1 = arr1.filter(num => {
    if (arr2.indexOf(num) < 0) {
      return num;
    }
  });
  let diffArr2 = arr2.filter(num => {
    if (arr1.indexOf(num) < 0) {
      return num;
    }
  });

  newArr = diffArr1.concat(diffArr2);
  return newArr;
};

// CHALLENGE 3: Convert any number to a Roman Numeral
// jshint esversion: 6

const getThous = num => {
  let placeHolder = Math.floor(num / 1000);
  return 'M'.repeat(placeHolder);
};

const getHuns = num => {
  let placeHolder = Math.floor(num / 100);
  if (placeHolder <= 3) {
    return 'C'.repeat(placeHolder);
  } else if (placeHolder === 4) {
    return 'CD';
  } else if (placeHolder === 5) {
    return 'D';
  } else if (placeHolder <= 8) {
    return 'D' + 'C'.repeat(placeHolder - 5);
  } else {
    return 'CM';
  }
};

const getTens = num => {
  let placeHolder = Math.floor(num / 10);
  if (placeHolder <= 3) {
    return 'X'.repeat(placeHolder);
  } else if (placeHolder === 4) {
    return 'XL';
  } else if (placeHolder === 5) {
    return 'L';
  } else if (placeHolder <= 8) {
    return 'L' + 'X'.repeat(placeHolder - 5);
  } else {
    return 'XC';
  }
};

const getSings = num => {
  if (num <= 3) {
    return 'I'.repeat(num);
  } else if (num === 4) {
    return 'IV';
  } else if (num === 5) {
    return 'V';
  } else if (num <= 8) {
    return 'V' + 'I'.repeat(num - 5);
  } else {
    return 'IX';
  }
};

export const convertToRoman = num => {
  let numArray = [];
  while (num > 0) {
    if (num >= 1000) {
      numArray.push(getThous(num));
      num = num % 1000;
    } else if (num >= 100 && num < 1000) {
      numArray.push(getHuns(num));
      num = num % 100;
    } else if (num >= 10 && num < 100) {
      numArray.push(getTens(num));
      num = num % 10;
    } else {
      numArray.push(getSings(num));
      num = Math.floor(num / 10);
    }
  }
  num = numArray.join('');
  return num;
};
