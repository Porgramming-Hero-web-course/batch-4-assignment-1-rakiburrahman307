"use strict";
const arrayData = [1, 2, 3, 4, 5];
// solution 1 
// using reduce() method
const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};
const result = sumArray(arrayData);
console.log(result);
