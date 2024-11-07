{
  /////////////////////////////////

  const sentence: string = "I love typescript";
  // declare function type
  type FunctionType = (sentence: string, word: string) => number;

  const countWordOccurrences: FunctionType = (sentence, word) => {
    return sentence
      .toLocaleLowerCase()
      .split(" ")
      .filter((w) => w === word.toLocaleLowerCase()).length;
  };
  const result = countWordOccurrences(sentence, "typescript");
  console.log(result);

  ////////////////////////////////
}
