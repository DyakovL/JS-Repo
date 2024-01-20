function solve(input) {
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  const heroes = [];
  for (let i = 0; i < input.length; i++) {
    const currHero = input[i].split("/");
    const name = currHero.shift();
    const level = currHero.shift();
    const items = currHero;
    heroes.push(new Hero(name, level, items));
  }

  heroes.sort((a, b) => a.level - b.level);

  for (const hero of heroes) {
    console.log(`Hero: ${hero.name.trim()}`);
    console.log(`level => ${hero.level.trim()}`);
    console.log(`items =>${hero.items.join(", ")}`);
  }
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
