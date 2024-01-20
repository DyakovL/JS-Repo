window.onload = lockedProfile();
function lockedProfile() {
  const profiles = document.querySelectorAll(".profile");

  profiles.forEach((profile) => {
    const unlockButton = profile.querySelector('input[value="unlock"]');
    const hiddenFields = profile.querySelector("div:nth-child(2)");
    const showMoreButton = profile.querySelector("button");

    unlockButton.addEventListener("click", () => {
      hiddenFields.style.display = unlockButton.checked ? "block" : "none";
    });

    showMoreButton.addEventListener("click", () => {
      hiddenFields.style.display = "block";
    });
  });
}
