let design = document.querySelector("[data-tags='design']");
let designBG = document.querySelector("[data-tags='design-bg']");

let develop = document.querySelector("[data-tags='develop']");
let developBG = document.querySelector("[data-tags='develop-bg']");

let garden = document.querySelector("[data-tags='garden']");
let gardenBG = document.querySelector("[data-tags='garden-bg']");

design.addEventListener("mouseover", () => {
    console.log("HOVER DESIGN");
    designBG.style.display = "block";
});

design.addEventListener("mouseout", () => {
    console.log("NO DESIGN");
    designBG.style.display = "none";
});

develop.addEventListener("mouseover", () => {
    console.log("HOVER DEVELOP");
    developBG.style.display = "block";
});

develop.addEventListener("mouseout", () => {
    console.log("NO DEVELOP");
    developBG.style.display = "none";
});

garden.addEventListener("mouseover", () => {
    console.log("H0VER GARDEN");
    gardenBG.style.display = "block";
});

garden.addEventListener("mouseout", () => {
    console.log("NO GARDEN");
    gardenBG.style.display = "none";
});
