function solve(input) {
  let listItems = input.shift().split("!");

  while (input.lenth !== 0) {
    const cmdArgs = input.shift().split(" ");
    const cmd = cmdArgs[0];
    const item = cmdArgs[1];

    if (cmd === "Go" && item === "Shopping!") {
      break;
    }

    switch (cmd) {
      case "Urgent":
        if (!listItems.includes(item)) {
          listItems.unshift(item);
        }
        break;
      case "Unnecessary":
        if (listItems.includes(item)) {
          const index = listItems.indexOf(item);
          listItems.splice(index, 1);
        }
        break;
      case "Correct":
        const newItemName = cmdArgs[2];
        if (listItems.includes(item)) {
          const index = listItems.indexOf(item);
          listItems[index] = newItemName;
        }
        break;
      case "Rearrange":
        if (listItems.includes(item)) {
          const index = listItems.indexOf(item);
          listItems.splice(index, 1);
          listItems.push(item);
        }
        break;
    }
  }
  console.log(listItems.join(", "));
}
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Onion",
  "Unnecessary Grapes",
  "Correct Pepper cherry",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
