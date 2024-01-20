window.addEventListener("load", solve);

function solve() {
  const studentNameInput = document.querySelector("#student");
  const universityInput = document.querySelector("#university");
  const scoreInput = document.querySelector("#score");
  const preview = document.querySelector("#preview-list");
  const candidate = document.querySelector("#candidates-list");

  document.querySelector("#next-btn").addEventListener("click", nextButton);

  function nextButton() {
    let name = studentNameInput.value;
    let uni = universityInput.value;
    let score = scoreInput.value;
    preview.appendChild(createElement(name, uni, score));
    studentNameInput.value = "";
    universityInput.value = "";
    scoreInput.value = "";

    document.querySelector("#next-btn").setAttribute("disabled", true);
  }

  function editApplication(e) {
    const item = e.currentTarget.parentNode;

    studentNameInput.value = item.querySelector("article h4").textContent;

    let uniName = item.querySelector("article .uni").textContent.split(": ");
    universityInput.value = uniName[1];
    let parsenum = item.querySelector("article .score").textContent.split(": ");
    scoreInput.value = parsenum[1];

    preview.removeChild(item);

    document.querySelector("#next-btn").removeAttribute("disabled");

    candidate.appendChild();
  }

  function applyApplication(e) {
    const item = e.currentTarget.parentNode;

    let name = item.querySelector("article h4").textContent;

    let uniName = item.querySelector("article .uni").textContent.split(": ");

    let parsenum = item.querySelector("article .score").textContent.split(": ");

    preview.removeChild(item);

    candidate.appendChild(createCandidate(name, uniName[1], parsenum[1]));

    document.querySelector("#next-btn").removeAttribute("disabled");
  }

  function createCandidate(name, uni, score) {
    const previewList = document.createElement("li");
    previewList.classList.add("application");

    const h4 = document.createElement("h4");
    const universityPara = document.createElement("p");
    const scorePara = document.createElement("p");

    universityPara.classList.add("uni");
    scorePara.classList.add("score");

    const article = document.createElement("article");

    h4.textContent = name;
    universityPara.textContent = `University: ${uni}`;
    scorePara.textContent = `Score: ${score}`;

    article.appendChild(h4);
    article.appendChild(universityPara);
    article.appendChild(scorePara);

    previewList.appendChild(article);

    return previewList;
  }

  function createElement(name, uni, score) {
    const previewList = document.createElement("li");
    previewList.classList.add("application");

    const h4 = document.createElement("h4");
    const universityPara = document.createElement("p");
    const scorePara = document.createElement("p");

    universityPara.classList.add("uni");
    scorePara.classList.add("score");

    const article = document.createElement("article");

    h4.textContent = name;
    universityPara.textContent = `University: ${uni}`;
    scorePara.textContent = `Score: ${score}`;

    article.appendChild(h4);
    article.appendChild(universityPara);
    article.appendChild(scorePara);

    previewList.appendChild(article);

    const editButton = document.createElement("button");
    const applyButton = document.createElement("button");

    editButton.addEventListener("click", editApplication);
    applyButton.addEventListener("click", applyApplication);

    editButton.classList.add("action-btn", "edit");
    applyButton.classList.add("action-btn", "apply");

    editButton.textContent = "EDIT";
    applyButton.textContent = "APPLY";

    previewList.appendChild(editButton);
    previewList.appendChild(applyButton);

    return previewList;
  }
}
