function info(obj) {
  const city = {
    name: obj["name"],
    area: obj["area"],
    population: obj["population"],
    country: obj["country"],
    postCode: obj["postCode"],
  };

  let data = "";
  for (var key in city) {
    if (city.hasOwnProperty(key)) {
      data += key + " -> " + city[key] + "\n";
    }
  }

  return data;
}
info({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
