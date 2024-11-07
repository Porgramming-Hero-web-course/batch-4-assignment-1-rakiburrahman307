## union type

- A union type represents a variable that can hold one of multiple types.

* syntax: type Shape = Circle | Rectangle;
* Use Case: When you want a variable to accept different types, like a parameter that could be a string or number.

### Example

type Shape = Circle | Rectangle; ====> Union type /n
type FunctionType = (shape: Shape) => number; ====> Function type /n

const calculateShapeArea: FunctionType = (shape) => {  /n
if (shape.shape === "circle") { /n
return parseFloat((Math.PI _ Math.pow(shape.radius, 2)).toFixed(2)); /n
} else if (shape.shape === "rectangle") { /n
return shape.width _ shape.height; /n
} else { /n
throw new Error("Invalid shape type"); /n
} /n
}; /n

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 }); ==> valid

const rectangleArea = calculateShapeArea({
shape: "rectangle",
width: 4,
height: 6,
}); ===> also valid

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
id: number;
}

type EmployeePerson = Person & Employee;

const Rakib: EmployeePerson = {
name: "Rakib",
age: 25,
id: 101,
};
