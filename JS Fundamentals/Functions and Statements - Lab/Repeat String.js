function solve(word, times) {
  let concat = "";

  for (let i = 0; i < times; i++) {
    concat += word;
  }
  console.log(concat);
}
solve("abc", 3);
