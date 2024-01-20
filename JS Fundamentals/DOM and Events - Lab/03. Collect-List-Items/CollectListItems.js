function extractText() {
  const elements = document.querySelectorAll("ul#items li");
  const textArea = document.querySelector("#result");
  for (const item of elements) {
    textArea.value += item.textContent + "\n";
  }
}
