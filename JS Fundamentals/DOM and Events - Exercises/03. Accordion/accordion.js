function toggle() {
  const content = document.querySelector("#extra");
  const button = document.getElementsByClassName("button")[0];

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Less";
  } else {
    content.style.display = "none";
    button.textContent = "More";
  }

  //   button.addEventListener("click", clickMe);
  //   function clickMe() {
  //     const getComputedStyles = getComputedStyle(content);
  //     if (getComputedStyles.display === "none") {
  //       content.style.display = "block";
  //       button.textContent = "Less";
  //     } else {
  //       content.style.display = "none";
  //       button.textContent = "More";
  //     }
  //   }
}
