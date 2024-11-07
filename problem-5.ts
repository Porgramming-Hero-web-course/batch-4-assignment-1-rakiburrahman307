{
  ////////////////////////////

  // Sample Input:
  const person = { name: "Alice", age: 30 };
  // declare function type
  type FunctionType = <X, Y extends keyof X>(obj: X, key: Y) => X[Y];

  // Function ==>
  const getProperty: FunctionType = (obj, key) => obj[key];

  // Sample Output:
  const result = getProperty(person, "name");
  console.log(result);

  ////////////////////////////
}
