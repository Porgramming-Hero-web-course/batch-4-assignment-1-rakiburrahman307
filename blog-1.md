## union type

- A union type represents a variable that can hold one of multiple types.

* syntax: type UnionType = string | number;
* Use Case: When you want a variable to accept different types, like a parameter that could be a string or number.

### Example

const printId=(id: string | number)=> {
console.log("Your ID is: " + id);
}
printId(101); // Valid
printId("ABC123"); // Also valid

## intersection types

- An intersection type combines multiple types into one.

* Syntax: type IntersectionType = Type1 & Type2;
* Use Case: When you want to merge properties from multiple types, like combining settings or user roles, or ensuring that an object has a combination of specific properties or behaviors.

### Example

interface Person {
name: string;
age: number;
}

interface Employee {
employeeId: number;
}

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
name: "John Doe",
age: 30,
employeeId: 101,
};
