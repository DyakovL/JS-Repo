function solve(stock, delivery) {
  let store = stock.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc[curr] = parseInt(stock[index + 1]);
    }
    return acc;
  }, {});

  delivery.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      if (store.hasOwnProperty(curr)) {
        store[curr] += parseInt(delivery[index + 1]);
      } else {
        store[curr] = parseInt(delivery[index + 1]);
      }
    }
    return acc;
  }, {});

  for (const key of Object.keys(store)) {
    console.log(`${key} -> ${store[key]}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
