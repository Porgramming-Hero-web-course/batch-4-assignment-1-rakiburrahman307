{
  ////////////////////////////////
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;
  // declare function type
  type FunctionType = (shape: Shape) => number;

  //   Function ===>
  const calculateShapeArea: FunctionType = (shape) => {
    if (shape.shape === "circle") {
      return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      throw new Error("Invalid shape type");
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(circleArea);
  console.log(rectangleArea);

  ////////////////////////////////
}
