function colorize() {
  const elements = document.querySelectorAll("table tr");

  for (let index = 0; index < elements.length; index++) {
    if (index % 2 === 1) {
      elements[index].style.backgroundColor = "Teal";
    }
  }
}
