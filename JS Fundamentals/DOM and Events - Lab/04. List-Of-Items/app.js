function addItem1() {
  const element = document.querySelector("ul#items");
  const textItem = document.querySelector("#newItemText").value;
  let li = document.createElement("li");
  li.textContent = textItem;
  element.appendChild(li);
  return textItem;
}

function addItem() {
  let li = document.createElement("li");
  const textItem = document.querySelector("#newItemText").value;
  li.appendChild(document.createTextNode(textItem));
  document.getElementById("items").appendChild(li);
  document.getElementById("newItemText").value = "";
}
