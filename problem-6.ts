{
  ///////////////////////////////
  // object data
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

  // create a Profile Interface
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // declare function type
  type FunctionType = (
    profile: Profile,
    updateValue: Partial<Profile>
  ) => Profile;

  // Function ==>
  const updateProfile: FunctionType = (profile, updateValue) => {
    return { ...profile, ...updateValue };
  };

  const result = updateProfile(myProfile, { age: 26 });
  console.log(result);

  ///////////////////////////////
}
