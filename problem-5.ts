{
  ////////////////////////////

  // Sample Input:
  const person = { name: "Alice", age: 30 };

  // Function ==>
  const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => obj[key];

  // Sample Output:
  const result = getProperty(person, "name");
  console.log(result);

  ////////////////////////////
}
