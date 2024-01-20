function storeMovies(input) {
  const movies = [];

  for (const item of input) {
    const tokens = item.split(" ");
    const command = tokens.shift();

    if (command === "addMovie") {
      const movieName = tokens.join(" ");
      movies.push({ name: movieName });
    } else {
      const movieIndex = movies.findIndex((movie) => movie.name === command);

      if (movieIndex !== -1) {
        if (tokens[0] === "directedBy") {
          const director = tokens.slice(1).join(" ");
          movies[movieIndex].director = director;
        } else if (tokens[0] === "onDate") {
          const date = tokens.slice(1).join(" ");
          movies[movieIndex].date = date;
        }
      }
    }
  }

  const moviesWithInfo = movies.filter(
    (movie) => movie.name && movie.director && movie.date
  );
  moviesWithInfo.forEach((movie) => {
    console.log(JSON.stringify(movie));
  });
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
