function attachEvents() {
  const name = document.querySelector('input[name="firstName"]');
  const surname = document.querySelector('input[name="lastName"]');
  const number = document.querySelector('input[name="facultyNumber"]');
  const studentGrade = document.querySelector('input[name="grade"]');
  const tableBody = document.querySelector("#results tbody");

  document.querySelector("#submit").addEventListener("click", submit);

  loadStudents();
  async function loadStudents() {
    tableBody.innerHTML = "";
    const response = await (
      await fetch(`http://localhost:3030/jsonstore/collections/students`)
    ).json();

    const data = Object.values(response);

    data.forEach((element) => {
      tableBody.appendChild(
        createElement(
          element.firstName,
          element.lastName,
          element.facultyNumber,
          element.grade
        )
      );
    });

    console.log(response);
  }

  async function submit() {
    const firstName = name.value;
    const lastName = surname.value;
    const facultyNumber = number.value;
    const grade = studentGrade.value;

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      facultyNumber.length === 0 ||
      grade.length === 0
    ) {
      return;
    }
    const request = await fetch(
      `http://localhost:3030/jsonstore/collections/students`,
      {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
      }
    );
    name.value = "";
    surname.value = "";
    number.value = "";
    studentGrade.value = "";
    console.log(request);

    loadStudents();
  }

  function createElement(firstName, lastName, facultyNumber, grade) {
    const array = [firstName, lastName, facultyNumber, grade];
    const thread = document.createElement("tr");

    for (const item of array) {
      let createBody = document.createElement("td");
      createBody.textContent = item;
      thread.appendChild(createBody);
    }

    return thread;
  }
}

attachEvents();
