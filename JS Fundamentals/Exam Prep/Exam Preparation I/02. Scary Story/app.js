window.addEventListener("load", solve);

function solve() {
  document.querySelector("#form-btn").addEventListener("click", submittedForm);
  const preview = document.querySelector("#preview-list");
  function submittedForm() {
    let name = document.querySelector("#first-name").value;
    let surname = document.querySelector("#last-name").value;
    let age = document.querySelector("#age").value;
    let title = document.querySelector("#story-title").value;
    let genre = document.querySelector("#genre").value;
    let story = document.querySelector("#story").value;

    if (
      name === "" ||
      surname === "" ||
      age === "" ||
      title === "" ||
      genre === "" ||
      story === ""
    ) {
      return;
    }

    preview.appendChild(createElement(name, surname, age, title, genre, story));
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#story-title").value = "";
    document.querySelector("#story").value = "";
    document.querySelector("#form-btn").setAttribute("disabled", true);
  }

  function editEvent(e) {
    document.querySelector("#form-btn").removeAttribute("disabled");

    const item = e.currentTarget.parentElement;
    const nameElement = item.querySelector("article h4");
    const names = nameElement.textContent.split(":");
    const splitNames = names[1].trim().split(" ");
    const firstName = splitNames[0];
    const lastName = splitNames[1];
    document.querySelector("#first-name").value = firstName;
    document.querySelector("#last-name").value = lastName;

    const ageElement = item.querySelector("article p:nth-child(2)");
    const ageText = ageElement.textContent;
    const age = ageText.split(":")[1].trim();
    document.querySelector("#age").value = Number(age);

    const storyTitleElement = item.querySelector("p:nth-child(3)");
    const currStoryTitleElement = storyTitleElement.textContent;
    const storyTitle = currStoryTitleElement.split(":")[1].trim();
    document.querySelector("#story-title").value = storyTitle;

    const genreElement = item.querySelector("p:nth-child(4)");
    const currGenreElement = genreElement.textContent;
    const genre = currGenreElement.split(":")[1].trim();
    document.querySelector("#genre").value = genre;

    const storyElement = item.querySelector("p:nth-child(5)");
    const story = storyElement.textContent;
    document.querySelector("#story").value = story;

    document.querySelector("#preview-list").removeChild(item);
  }

  function saveEvent(e) {
    document.querySelector("#main").innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";
    document.querySelector("#main").appendChild(h1);
  }

  function deleteEvent(e) {
    document.querySelector("#form-btn").removeAttribute("disabled");

    const item = e.currentTarget.parentElement;
    document.querySelector("#preview-list").removeChild(item);
  }

  function createElement(name, surname, age, title, genre, story) {
    let list = document.createElement("li");
    list.classList.add("story-info");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");

    let pAge = document.createElement("p");
    let pTitle = document.createElement("p");
    let pGenre = document.createElement("p");
    let pStory = document.createElement("p");

    let saveBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    saveBtn.addEventListener("click", saveEvent);
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";

    editBtn.addEventListener("click", editEvent);
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";

    deleteBtn.addEventListener("click", deleteEvent);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";

    list.classList.add("story-info");
    h4.textContent = `Name: ${name} ${surname}`;
    pAge.textContent = `Age: ${age}`;
    pTitle.textContent = `Title: ${title}`;
    pGenre.textContent = `Genre: ${genre}`;
    pStory.textContent = story;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    list.appendChild(article);
    list.appendChild(saveBtn);
    list.appendChild(editBtn);
    list.appendChild(deleteBtn);

    return list;
  }
}
