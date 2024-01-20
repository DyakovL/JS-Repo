window.addEventListener("load", solve);

function solve() {
  document
    .querySelector("#add-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();

      addSong();
    });

  function addSong() {
    const genre = document.querySelector("#genre").value;
    const songName = document.querySelector("#name").value;
    const author = document.querySelector("#author").value;
    const date = document.querySelector("#date").value;

    if (genre == "" || songName == "" || author == "" || date == "") {
      return;
    }

    document
      .querySelector(".all-hits-container")
      .appendChild(createElement(genre, songName, author, date));

    document.querySelector("#genre").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#date").value = "";
  }

  function saveSong(e) {
    const target = e.currentTarget.parentElement;
    const genreElement = target.querySelector(".hits-info h2:nth-child(2)");
    const nameElement = target.querySelector(".hits-info h2:nth-child(3)");
    const authorElement = target.querySelector(".hits-info h2:nth-child(4)");
    const dateElement = target.querySelector(".hits-info h3");

    const genre = genreElement ? genreElement.textContent : "";
    const name = nameElement ? nameElement.textContent : "";
    const author = authorElement ? authorElement.textContent : "";
    const date = dateElement ? dateElement.textContent : "";

    if (!genre || !name || !author || !date) {
      return; // Exit the function if any required data is missing
    }

    document
      .querySelector(".saved-container")
      .appendChild(createSavedSong(genre, name, author, date));

    document.querySelector(".all-hits-container").removeChild(target);
  }

  function likeSong(e) {
    const target = e.currentTarget;
    target.setAttribute("disabled", true);
    console.log(target);
    const likes = document.querySelector("#total-likes .likes p").textContent;
    const split = likes.split(":");
    const number = split[1].trim();

    let currentLikes = Number(number);
    currentLikes += 1;

    document.querySelector(".likes p").innerHTML = "";
    document.querySelector(
      ".likes p"
    ).textContent = `Total Likes: ${currentLikes}`;
  }

  function deleteSong(e) {
    const target = e.currentTarget.parentElement;
    const parentTodeleteFrom = target.parentElement;

    parentTodeleteFrom.removeChild(target);
  }

  function createSavedSong(genre, name, author, date) {
    const div = document.createElement("div");
    div.classList.add("hits-info");

    const img = document.createElement("img");
    img.setAttribute("src", `./static/img/img.png`);

    const genreH2 = document.createElement("h2");
    genreH2.textContent = genre;

    const nameH2 = document.createElement("h2");
    nameH2.textContent = name;

    const authorH2 = document.createElement("h2");
    authorH2.textContent = author;

    const dateH3 = document.createElement("h3");
    dateH3.textContent = date;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteSong);

    div.appendChild(img);
    div.appendChild(genreH2);
    div.appendChild(nameH2);
    div.appendChild(authorH2);
    div.appendChild(dateH3);
    div.appendChild(deleteButton);

    return div;
  }

  function createElement(genre, songName, author, date) {
    const div = document.createElement("div");
    div.classList.add("hits-info");

    const img = document.createElement("img");
    img.setAttribute("src", `./static/img/img.png`);

    const genreH2 = document.createElement("h2");
    genreH2.textContent = `Genre: ${genre}`;

    const nameH2 = document.createElement("h2");
    nameH2.textContent = `Name: ${songName}`;

    const authorH2 = document.createElement("h2");
    authorH2.textContent = `Author: ${author}`;

    const dateH3 = document.createElement("h3");
    dateH3.textContent = `Date: ${date}`;

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save song";
    saveButton.addEventListener("click", saveSong);

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-btn");
    likeButton.textContent = "Like song";
    likeButton.addEventListener("click", likeSong);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteSong);

    div.appendChild(img);
    div.appendChild(genreH2);
    div.appendChild(nameH2);
    div.appendChild(authorH2);
    div.appendChild(dateH3);
    div.appendChild(saveButton);
    div.appendChild(likeButton);
    div.appendChild(deleteButton);

    return div;
  }
}
