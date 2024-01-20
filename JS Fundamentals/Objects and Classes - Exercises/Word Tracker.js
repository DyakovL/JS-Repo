function solve(input) {
  const words = input[0].split(" ");
  input.shift();
  const dic = {};
  for (const word of words) {
    const currWord = word;
    const occurrences = input.filter(
      (w) => w.toLowerCase() === word.toLowerCase()
    ).length;
    dic[currWord] = occurrences;
  }

  const sorted = Object.entries(dic).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
