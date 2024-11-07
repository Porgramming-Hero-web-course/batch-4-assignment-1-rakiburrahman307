{
  //////////////////////////
  // data
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // declare function type
  type FunctionType = <T extends object>(obj: T, keys: (keyof T)[]) => boolean;

  // Function ==>
  const validateKeys: FunctionType = (obj, keys) => {
    for (let key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };

  const result = validateKeys(person, ["name", "age"]);
  console.log(result);
  //////////////////////////
}
