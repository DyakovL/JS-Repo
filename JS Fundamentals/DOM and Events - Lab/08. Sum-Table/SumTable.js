function sumTable() {
  const elements = document.querySelectorAll("tbody tr td:nth-child(2)");
  let sum = 0;

  for (let index = 0; index < elements.length; index++) {
    sum += Number(elements[index].textContent);
  }

  document.getElementById("sum").textContent = sum.toFixed(2);
}
