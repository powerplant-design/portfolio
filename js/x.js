let xButton = document.querySelector(".x-button");
let welcomeWindow = document.querySelector(".welcome-content");

xButton.addEventListener("click", () => {
    welcomeWindow.classList.add("x-button-effect");
});

xButton.addEventListener("touchend", () => {
    welcomeWindow.classList.add("x-button-effect");
});
