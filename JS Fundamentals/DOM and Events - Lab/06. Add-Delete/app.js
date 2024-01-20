function addItem() {
  let li = document.createElement("li");
  const textItem = document.querySelector("#newItemText").value;
  li.appendChild(document.createTextNode(textItem));
  let del = document.createElement("a");
  del.href = "#";
  del.innerText = "[Delete]";
  li.appendChild(del);
  del.addEventListener("click", clickMe);
  document.getElementById("items").appendChild(li);
  document.getElementById("newItemText").value = "";

  function clickMe(e) {
    const target = e.currentTarget;
    const listItem = target.parentNode;
    listItem.remove();
  }
}
