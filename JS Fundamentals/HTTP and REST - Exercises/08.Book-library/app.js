function attachEvents() {
  document.querySelector("#loadBooks").addEventListener("click", loadBooks);
  document.querySelector("#form button").addEventListener("click", submitBook);
  const body = document.querySelector("table tbody");

  async function loadBooks() {
    body.innerHTML = "";

    const response = await (
      await fetch("http://localhost:3030/jsonstore/collections/books")
    ).json();

    Object.entries(response).forEach(createElement);
  }

  function editElement(e) {
    const title =
      e.currentTarget.parentElement.parentElement.querySelector(
        "td:first-child"
      );

    const author =
      e.currentTarget.parentElement.parentElement.querySelector(
        "td:nth-child(2"
      );

    document.querySelector("#form h3").textContent = "Edit form";
    document.querySelector('input[name="title"]').value = title.textContent;
    document.querySelector('input[name="author"]').value = author.textContent;

    document
      .querySelector("#form button")
      .setAttribute("data-bookid", e.currentTarget.dataset.bookid);
  }

  async function submitBook(e) {
    const isEdited = document
      .querySelector("#form h3")
      .textContent.includes("Edit");
    isEdited ? updateBook(e) : saveBook(e);
  }

  async function updateBook(e) {
    const id = e.currentTarget.dataset.bookid;
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;

    const response = await fetch(
      `http://localhost:3030/jsonstore/collections/books/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ title, author }),
      }
    );
    document.querySelector("#form h3").textContent = "Form";
  }

  async function saveBook(id) {
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;

    if (!title || !author) {
      return;
    }

    fetch("http://localhost:3030/jsonstore/collections/books", {
      method: "POST",
      body: JSON.stringify({ title, author }),
    });
  }

  async function deleteElement(e) {
    const target = e.currentTarget.dataset.bookid;

    const response = await fetch(
      `http://localhost:3030/jsonstore/collections/books/${target}`,
      {
        method: "Delete",
      }
    );
  }

  function createElement([id, book]) {
    const thread = document.createElement("tr");
    const bookTitle = document.createElement("td");

    const bookAuthor = document.createElement("td");
    const bookAction = document.createElement("td");

    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.addEventListener("click", editElement);
    editButton.setAttribute("data-bookid", id);
    deleteButton.addEventListener("click", deleteElement);
    deleteButton.setAttribute("data-bookid", id);

    bookTitle.textContent = book.title;
    thread.appendChild(bookTitle);

    bookAuthor.textContent = book.author;
    thread.appendChild(bookAuthor);

    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    bookAction.appendChild(editButton);
    bookAction.appendChild(deleteButton);

    thread.appendChild(bookAction);

    body.appendChild(thread);
  }
}

attachEvents();
