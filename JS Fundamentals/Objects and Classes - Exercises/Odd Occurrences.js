function solve(input) {
  const convertToArray = input.toLowerCase().split(" ");
  const arr = [];

  for (const word of convertToArray) {
    const currWord = word;
    const occurrences = convertToArray.filter((w) => w === word).length;
    if (occurrences % 2 != 0 && !arr.includes(currWord)) {
      arr.push(currWord);
    }
  }

  console.log(arr.join(" "));
}
solve("Java C# Php Php Java Php 3 C# 3 1 5 C#");
