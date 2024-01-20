attachEvents();

function attachEvents() {
  document.querySelector("#load-button").addEventListener("click", loadItems);
  document.querySelector("#add-button").addEventListener("click", addItem);
  const list = document.querySelector("#todo-list");
  let data;
  async function loadItems() {
    list.innerHTML = "";

    const response = await (
      await fetch("http://localhost:3030/jsonstore/tasks")
    ).json();

    data = Object.values(response);

    data.forEach((element) => {
      list.appendChild(createElement(element.name, element._id));
    });
  }

  async function addItem() {}

  async function editTask(e) {}

  async function removeTask(e) {}
  function createElement(name, id) {
    const liItem = document.createElement("li");
    const span = document.createElement("span");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    liItem.setAttribute("id", id);
    span.textContent = name;
    editBtn.textContent = "Edit";
    removeBtn.textContent = "Remove";

    editBtn.addEventListener("click", editTask);
    removeBtn.addEventListener("click", removeTask);

    liItem.appendChild(span);
    liItem.appendChild(removeBtn);
    liItem.appendChild(editBtn);

    return liItem;
  }
}
