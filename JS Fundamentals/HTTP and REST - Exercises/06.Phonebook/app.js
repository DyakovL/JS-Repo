function attachEvents() {
  const phonebook = document.querySelector("#phonebook");
  document.querySelector("#btnLoad").addEventListener("click", loadPhonebook);
  document.querySelector("#btnCreate").addEventListener("click", createContact);
  let data;
  async function loadPhonebook() {
    phonebook.innerHTML = "";
    const response = await (
      await fetch("http://localhost:3030/jsonstore/phonebook")
    ).json();

    data = Object.values(response);

    data.forEach((element) => {
      phonebook.appendChild(
        createElement(element.person, element.phone, element._id)
      );
    });
  }

  async function createContact() {
    let person = document.querySelector("#person").value;
    let phone = document.querySelector("#phone").value;

    const request = await fetch(`http://localhost:3030/jsonstore/phonebook`, {
      method: "POST",
      body: JSON.stringify({ person, phone }),
    });

    loadPhonebook();
    console.log(request);
  }

  async function deleteNumber(e) {
    const item = e.currentTarget.parentNode;
    const _id = item.getAttribute("id");

    const response = await fetch(
      `http://localhost:3030/jsonstore/phonebook/${_id}`,
      {
        method: "Delete",
      }
    );
    loadPhonebook();

    console.log(response);
  }

  function createElement(name, number, id) {
    const element = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteNumber);
    element.setAttribute("id", id);
    element.textContent = `${name}: ${number}`;
    element.append(deleteButton);

    return element;
  }
}

attachEvents();
