{
  /////////////////////////////////

  const sentence: string = "TypeScript is great. I love TypeScript!";
  // declare function type
  type FunctionType = (sentence: string, word: string) => number;

  const countWordOccurrences: FunctionType = (sentence, word) => {
    return sentence
      .toLocaleLowerCase()
      .replace(/[.,!?]/g, "")
      .split(" ")
      .filter((w) => w === word.toLocaleLowerCase()).length;
  };
  const result = countWordOccurrences(sentence, "typescript");
  console.log(result);

  ////////////////////////////////
}
