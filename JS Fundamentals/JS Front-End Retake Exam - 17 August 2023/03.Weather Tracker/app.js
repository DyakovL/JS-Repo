const ENDPOINT_URL = "http://localhost:3030/jsonstore/tasks/";

document
  .querySelector("#load-history")
  .addEventListener("click", loadWeatherData);

document.querySelector("#add-weather").addEventListener("click", addData);

async function loadWeatherData() {
  document.querySelector("#wrapper #list").innerHTML = "";

  const response = await (await fetch(ENDPOINT_URL)).json();

  const data = Object.values(response);

  data.forEach((element) => {
    document
      .querySelector("#wrapper #list")
      .appendChild(
        createElement(
          element.location,
          element.temperature,
          element.date,
          element._id
        )
      );
    console.log(element._id);
  });
}

async function addData() {
  const location = document.querySelector("#location").value;
  const temperature = document.querySelector("#temperature").value;
  const date = document.querySelector("#date").value;

  if (!location || !temperature || !date) {
    return;
  }

  await fetch(`${ENDPOINT_URL}`, {
    method: "POST",
    body: JSON.stringify({ location, temperature, date }),
  });

  document.querySelector("#location").value = "";
  document.querySelector("#temperature").value = "";
  document.querySelector("#date").value = "";

  loadWeatherData();
}

async function changeInfo(e) {
  const buttonsContainer = e.currentTarget.parentElement;
  const target = buttonsContainer.parentElement;

  const currLocation = target.querySelector("h2").textContent;
  const id = target.querySelector("h2").getAttribute("data-id");
  const currDate = target.querySelector("h3").textContent;
  const temperatureBeforeParse = target.querySelector("#celsius").textContent;
  const currTemperature = Number(temperatureBeforeParse);

  document.querySelector("#location").value = currLocation;
  document.querySelector("#temperature").value = currTemperature;
  document.querySelector("#date").value = currDate;

  document.querySelector("#add-weather").disabled = true;
  document.querySelector("#edit-weather").disabled = false;

  document
    .querySelector("#edit-weather")
    .addEventListener("click", (e) => editData(id));
}

async function editData(id) {
  console.log(id);
  const location = document.querySelector("#location").value;
  const temperature = document.querySelector("#temperature").value;
  const date = document.querySelector("#date").value;

  if (!location || !temperature || !date) {
    return;
  }

  await fetch(`${ENDPOINT_URL}${id}`, {
    method: "PUT",
    body: JSON.stringify({ location, temperature, date, id }),
  });

  document.querySelector("#location").value = "";
  document.querySelector("#temperature").value = "";
  document.querySelector("#date").value = "";

  loadWeatherData();
}

async function deleteData(e) {
  const buttonsContainer = e.currentTarget.parentElement;
  const target = buttonsContainer.parentElement;
  const id = target.querySelector("h2").getAttribute("data-id");

  await fetch(`${ENDPOINT_URL}${id}`, {
    method: "DELETE",
  });

  loadWeatherData();
}

function createElement(location, temp, date, id) {
  const divInfo = document.createElement("div");
  const locationH2 = document.createElement("h2");
  const dateH3 = document.createElement("h3");
  const tempH3 = document.createElement("h3");
  const divButtons = document.createElement("div");
  const changeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  divInfo.classList.add("container");
  tempH3.setAttribute("id", "celsius");
  divButtons.setAttribute("id", "buttons-container");
  changeButton.classList.add("change-btn");
  deleteButton.classList.add("delete-btn");
  locationH2.setAttribute("data-id", id);

  locationH2.textContent = location;
  dateH3.textContent = date;
  tempH3.textContent = temp;
  changeButton.textContent = "Change";
  deleteButton.textContent = "Delete";

  changeButton.addEventListener("click", changeInfo);
  deleteButton.addEventListener("click", deleteData);

  divButtons.appendChild(changeButton);
  divButtons.appendChild(deleteButton);
  divInfo.appendChild(locationH2);
  divInfo.appendChild(dateH3);
  divInfo.appendChild(tempH3);
  divInfo.appendChild(divButtons);

  return divInfo;
}
