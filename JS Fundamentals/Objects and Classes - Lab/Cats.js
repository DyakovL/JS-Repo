function solve(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cats = [];

  for (let i = 0; i < input.length; i++) {
    let catData = input[i].split(" ");
    let name, age;
    [name, age] = [catData[0], catData[1]];
    cats.push(new Cat(name, age));
  }

  for (const cat of cats) {
    cat.meow();
  }
}

solve(["Mellow 2", "Tom 5"]);
