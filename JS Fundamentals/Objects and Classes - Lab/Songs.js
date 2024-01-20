function solve(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];

  let n = input.shift();
  let type = input[n];

  for (let i = 0; i < n; i++) {
    let songData = input[i].split("_");
    let typeList, name, time;
    [typeList, name, time] = [songData[0], songData[1], songData[3]];
    songs.push(new Song(typeList, name, time));
  }

  if (type === "all") {
    songs.forEach((song) => {
      console.log(song.name);
    });
  } else {
    for (const song of songs) {
      if (type === song.typeList) {
        console.log(song.name);
      }
    }
  }
}
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
