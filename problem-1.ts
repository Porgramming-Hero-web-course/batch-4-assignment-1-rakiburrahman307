{
  ////////////////////////////////

  const data: number[] = [1, 2, 3, 4, 5];

  //  declare function type
  type FunctionType = (numbers: number[]) => number;

  // using reduce() method
  const sumArray: FunctionType = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
  };

  const result = sumArray(data);
  console.log(result);

  ///////////////////////////
}
