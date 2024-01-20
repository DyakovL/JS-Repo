window.addEventListener("load", solve);

function solve() {
  document.querySelector("#add-btn").addEventListener("click", addScore);
  document
    .querySelector(".btn.clear")
    .addEventListener("click", reloadApplication);

  function addScore() {
    const player = document.querySelector("#player").value;
    const score = document.querySelector("#score").value;
    const round = document.querySelector("#round").value;

    if (!player === "" || !score === "" || !round === "") {
      return;
    }

    document
      .querySelector("#sure-list")
      .appendChild(createElement(player, score, round));

    document.querySelector("#player").value = "";
    document.querySelector("#score").value = "";
    document.querySelector("#round").value = "";

    document.querySelector("#add-btn").disabled = true;
  }

  function editData(e) {
    document.querySelector("#add-btn").disabled = false;

    const target = e.currentTarget.parentElement;
    const dataFromArticle = target.querySelector("article");

    const playerName =
      dataFromArticle.querySelector("p:first-child").textContent;
    const scorePoints =
      dataFromArticle.querySelector("p:nth-child(2)").textContent;
    const score = Number(scorePoints.split(":")[1]);
    const roundData =
      dataFromArticle.querySelector("p:nth-child(3)").textContent;
    const round = Number(roundData.split(":")[1]);

    document.querySelector("#player").value = playerName;
    document.querySelector("#score").value = score;
    document.querySelector("#round").value = round;
    target.remove();
  }

  function addToScoreBoard(e) {
    const target = e.currentTarget.parentElement;

    const dataFromArticle = target.querySelector("article");

    const list = document.createElement("li");
    list.classList.add("dart-item");
    list.appendChild(dataFromArticle);

    document.querySelector("#scoreboard-list").appendChild(list);
    target.remove();
    document.querySelector("#add-btn").disabled = false;
  }

  function reloadApplication(e) {
    location.reload();
  }

  function createElement(player, score, round) {
    const list = document.createElement("li");
    const article = document.createElement("article");
    const nameP = document.createElement("p");
    const scoreP = document.createElement("p");
    const roundP = document.createElement("p");
    const editBtn = document.createElement("button");
    const okBtn = document.createElement("button");

    list.classList.add("dart-item");
    editBtn.classList.add("btn", "edit");
    okBtn.classList.add("btn", "ok");

    nameP.textContent = player;
    scoreP.textContent = `Score: ${score}`;
    roundP.textContent = `Round: ${round}`;
    editBtn.textContent = "edit";
    okBtn.textContent = "ok";

    editBtn.addEventListener("click", editData);
    okBtn.addEventListener("click", addToScoreBoard);

    article.appendChild(nameP);
    article.appendChild(scoreP);
    article.appendChild(roundP);

    list.appendChild(article);
    list.appendChild(editBtn);
    list.appendChild(okBtn);

    return list;
  }
}
