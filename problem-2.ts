{
  ////////////////////////////////

  const data: number[] = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

  //   declare function type
  type FunctionType = (numbers: number[]) => number[];

  const removeDuplicates: FunctionType = (numbers) => {
    let newArray: number[] = [];
    for (let number of numbers) {
      if (!newArray.includes(number)) {
        newArray.push(number);
      }
    }
    return newArray;
  };
  const result = removeDuplicates(data);
  console.log(result);
  ////////////////////////////////
}
