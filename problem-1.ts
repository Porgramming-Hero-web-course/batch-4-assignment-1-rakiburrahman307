{
  ////////////////////////////////
  const arrayData: number[] = [1, 2, 3, 4, 5];

  //   declare function type
  type FunctionType = (numbers: number[]) => number;

  // solution 1
  // using reduce() method
  const sumArray: FunctionType = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
  };
  // solution 2
  // using for of method
  const sumArray2: FunctionType = (numbers) => {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };

  const result = sumArray(arrayData);
  console.log(`using reduce total sum is = ${result}`);

  const result2 = sumArray2(arrayData);
  console.log(`using for of total sum is = ${result2}`);

  ///////////////////////////
}
