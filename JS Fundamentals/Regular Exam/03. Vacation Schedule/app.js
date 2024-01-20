const container = document.querySelector("#list");
const nameField = document.querySelector("#name");
const numberField = document.querySelector("#from-date");
const daysField = document.querySelector("#from-date");

document
  .querySelector("#load-vacations")
  .addEventListener("click", loadVacations);

document.querySelector("#add-vacation").addEventListener("click", addVacation);
document
  .querySelector("#edit-vacation")
  .addEventListener("#edit-vacation", editVacation);

async function loadVacations() {
  const response = await (
    await fetch(`http://localhost:3030/jsonstore/tasks/`)
  ).json();

  const data = Object.values(response);

  container.innerHTML = "";
  data.forEach((element) => {
    container.appendChild(
      createElement(element.name, element.days, element.date, element._id)
    );
  });
}

function createElement(name, days, date, id) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3date = document.createElement("h3");
  const h3days = document.createElement("h3");
  const change = document.createElement("button");
  const done = document.createElement("button");

  div.classList.add("container");
  div.setAttribute("id", id);
  change.classList.add("change-btn");
  done.classList.add("done-btn");

  change.textContent = "Change";
  done.textContent = "Done";

  h2.textContent = name;
  h3date.textContent = date;
  h3days.textContent = days;

  change.addEventListener("click", changeVacation);
  done.addEventListener("click", doneButton);

  div.appendChild(h2);
  div.appendChild(h3date);
  div.appendChild(h3days);
  div.appendChild(change);
  div.appendChild(done);

  return div;
}

async function addVacation() {
  const name = document.querySelector("#name").value;
  const date = document.querySelector("#from-date").value;
  const days = document.querySelector("#from-date").value;

  if (!name || !date || !days) {
    return;
  }
  fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({ name, days, date }),
  });

  loadVacations();
}

async function changeVacation(e) {
  const removeItem = e.currentTarget.parentNode;
  container.removeChild(removeItem);

  const data = e.currentTarget.parentNode;
  const name = data.querySelector("h2").textContent;
  document.querySelector("#name").value = name;
  const date = document.querySelector("h3:first-child").value;
  const dateParsed = parseInt(date);
  document.querySelector("#from-date").value = dateParsed;
}

async function doneButton(e) {}
