function solve(input) {
  input
    .map((city) => {
      const [town, latitude, longitude] = city.split("|");
      return {
        town: town.trim(),
        latitude: parseFloat(latitude.trim()).toFixed(2),
        longitude: parseFloat(longitude.trim()).toFixed(2),
      };
    })
    .forEach((city) => {
      console.log(
        `{ town: '${city.town}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`
      );
    });
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
