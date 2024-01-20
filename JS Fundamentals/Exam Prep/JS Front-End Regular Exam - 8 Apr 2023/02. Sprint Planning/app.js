window.addEventListener("load", solve);

function solve() {
  document
    .querySelector("#create-task-form .form-control #create-task-btn")
    .addEventListener("click", createTask);

  document
    .querySelector("#create-task-form .form-control #delete-task-btn")
    .addEventListener("click", deleteTask);
  let counter = 1;
  let allPoints = 0;

  function pointCounter(currentPoints) {}

  function createTask() {
    const title = document.querySelector(".form-control #title").value;
    const description = document.querySelector(
      ".form-control #description"
    ).value;
    const label = document.querySelector(".form-control #label").value;
    const points = document.querySelector(".form-control #points").value;
    const assignee = document.querySelector(".form-control #assignee").value;

    document
      .querySelector("#tasks-section")
      .appendChild(createElement(title, description, label, points, assignee));

    if (
      title === "" ||
      description === "" ||
      label === "" ||
      points === "" ||
      assignee === ""
    ) {
      return;
    }

    document.querySelector(".form-control #title").value = "";
    document.querySelector(".form-control #description").value = "";
    document.querySelector(".form-control #points").value = "";
    document.querySelector(".form-control #assignee").value = "";
  }

  function loadTask(e) {
    document.querySelector(
      "#create-task-form .form-control #create-task-btn"
    ).disabled = true;
    document.querySelector(
      "#create-task-form .form-control #delete-task-btn"
    ).disabled = false;

    const target = e.currentTarget.parentElement;
    const wantedTarget = target.parentElement;
    const title = wantedTarget.querySelector(
      ".task-card .task-card-title"
    ).textContent;
    const description = wantedTarget.querySelector(
      ".task-card .task-card-description"
    ).textContent;
    const label = wantedTarget.querySelector(
      ".task-card .task-card-label"
    ).textContent;
    const points = Number(
      wantedTarget.querySelector(".task-card .task-card-points").textContent
    );
    const assignee = wantedTarget.querySelector(
      ".task-card .task-card-assignee"
    ).textContent;

    const id = wantedTarget.getAttribute("id");
    document.querySelector("#task-id").textContent = id;

    document.querySelector(".form-control #title").value = title;
    document.querySelector(".form-control #description").value = description;
    document.querySelector(".form-control #label").value = label;
    document.querySelector(".form-control #points").value = points;
    document.querySelector(".form-control #assignee").value = assignee;

    document.querySelector(".form-control #title").disabled = true;
    document.querySelector(".form-control #description").disabled = true;
    document.querySelector(".form-control #label").disabled = true;
    document.querySelector(".form-control #points").disabled = true;
    document.querySelector(".form-control #assignee").disabled = true;
  }

  function deleteTask() {
    const id = document.querySelector("#task-id").textContent;
    const itemToRemove = document.querySelector(`#${id}`);
    itemToRemove.remove();

    document.querySelector(
      "#create-task-form .form-control #create-task-btn"
    ).disabled = false;
    document.querySelector(
      "#create-task-form .form-control #delete-task-btn"
    ).disabled = true;

    document.querySelector(".form-control #title").disabled = false;
    document.querySelector(".form-control #description").disabled = false;
    document.querySelector(".form-control #label").disabled = false;
    document.querySelector(".form-control #points").disabled = false;
    document.querySelector(".form-control #assignee").disabled = false;

    document.querySelector(".form-control #title").value = "";
    document.querySelector(".form-control #description").value = "";
    document.querySelector(".form-control #points").value = "";
    document.querySelector(".form-control #assignee").value = "";
  }

  function createElement(title, description, label, points, assignee) {
    const article = document.createElement("article");
    const featureDiv = document.createElement("div");
    const titleH3 = document.createElement("h3");
    const descriptionP = document.createElement("p");
    const pointsDiv = document.createElement("div");
    const assigneeDiv = document.createElement("div");
    const actionsDiv = document.createElement("div");
    const button = document.createElement("button");

    const labelType = label.toLowerCase();

    article.setAttribute("id", `task-${counter}`);
    article.classList.add(`task-card`);
    featureDiv.classList.add("task-card-label", labelType);
    titleH3.classList.add("task-card-title");
    descriptionP.classList.add("task-card-description");
    pointsDiv.classList.add("task-card-points");
    assigneeDiv.classList.add("task-card-assignee");
    actionsDiv.classList.add("task-card-actions");

    button.addEventListener("click", loadTask);

    button.textContent = "Delete";
    featureDiv.textContent = label;
    titleH3.textContent = title;
    descriptionP.textContent = description;
    pointsDiv.textContent = points;
    assigneeDiv.textContent = assignee;

    actionsDiv.appendChild(button);
    article.appendChild(featureDiv);
    article.appendChild(titleH3);
    article.appendChild(descriptionP);
    article.appendChild(pointsDiv);
    article.appendChild(assigneeDiv);
    article.appendChild(actionsDiv);
    return article;
  }
}
