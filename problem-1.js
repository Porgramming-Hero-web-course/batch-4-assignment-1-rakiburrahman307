var arrayData = [1, 2, 3, 4, 5];
// solution 1 
// using reduce() method
var sumArray = function (arr) {
    return arr.reduce(function (acc, num) { return acc + num; }, 0);
};
var result = sumArray(arrayData);
console.log(result);
