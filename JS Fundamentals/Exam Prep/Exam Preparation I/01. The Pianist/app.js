function solve(input) {
  const n = Number(input.shift());
  const kvp = input.splice(0, n);
  let pianists = [];

  kvp.forEach((element) => {
    let item = element.split("|");
    let currPianist = {
      piece: item[0],
      composer: item[1],
      key: item[2],
    };
    pianists.push(currPianist);
  });

  while (input.length != 0 || input === "Stop") {
    let cmdArgs = input.shift().split("|");
    let cmd = cmdArgs.shift();
    let currPiece = cmdArgs.shift();

    if (cmd === "Add") {
      let currComposer = cmdArgs.shift();
      let currKey = cmdArgs.shift();
      let curr = {
        piece: currPiece,
        composer: currComposer,
        key: currKey,
      };
      let bool = false;
      pianists.forEach((element) => {
        if (element.piece === curr.piece) {
          bool = true;
        }
      });

      if (bool) {
        console.log(`${curr.piece} is already in the collection!`);
      } else {
        pianists.push(curr);
        console.log(
          `${curr.piece} by ${curr.composer} in ${curr.key} added to the collection!`
        );
      }
    }
    if (cmd === "Remove") {
      let index;
      index = pianists.indexOf(pianists.find((n) => n.piece === currPiece));

      if (index === -1) {
        console.log(
          `Invalid operation! ${currPiece} does not exist in the collection.`
        );
      } else {
        pianists.splice(index, 1);
        console.log(`Successfully removed ${currPiece}!`);
      }
    }

    if (cmd === "ChangeKey") {
      let currKey = cmdArgs.shift();
      let bool = false;
      pianists.forEach((element) => {
        if (element.piece === currPiece) {
          element.key = currKey;
          bool = true;
        }
      });

      if (bool) {
        console.log(`Changed the key of ${currPiece} to ${currKey}!`);
      } else {
        console.log(
          `Invalid operation! ${currPiece} does not exist in the collection.`
        );
      }
    }
  }

  pianists.forEach((element) => {
    console.log(
      `${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`
    );
  });
}
solve([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
