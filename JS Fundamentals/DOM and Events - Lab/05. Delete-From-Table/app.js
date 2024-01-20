function deleteByEmail() {
  const inputToDelete = document.querySelector("label input").value;
  const element = document.querySelectorAll("tbody tr");

  const elementToArr = Array.from(element);
  const returnResult = document.querySelector("#result");
  let found = false;

  for (const item of elementToArr) {
    let child = item.querySelector(":nth-child(2)");
    if (child.textContent === inputToDelete) {
      item.parentNode.removeChild(item);
      found = true;
    }
  }

  if (found) {
    returnResult.textContent = "Deleted.";
  } else {
    returnResult.textContent = "Not found.";
  }
}
