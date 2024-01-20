function attachEvents() {
  document.querySelector("#submit").addEventListener("click", postRequest);
  document.querySelector("#refresh").addEventListener("click", fetchRequest);
  const textBox = document.querySelector("#messages");

  async function postRequest() {
    let author = document.querySelector('input[name="author"]').value;
    let content = document.querySelector('input[name="content"]').value;

    const request = await fetch(`http://localhost:3030/jsonstore/messenger`, {
      method: "POST",
      body: JSON.stringify({ author, content }),
    });

    console.log(request);
  }

  async function fetchRequest() {
    const response = await (
      await fetch(`http://localhost:3030/jsonstore/messenger`)
    ).json();

    const chat = Object.values(response);
    let chatMessages = [];

    chat.forEach((element) => {
      chatMessages.push(`${element.author}: ${element.content}`);
    });
    textBox.textContent = chatMessages.join("\n");
  }
}

attachEvents();
