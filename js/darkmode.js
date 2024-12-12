let root = document.documentElement;
let imgInvert = document.querySelectorAll(".img-inverter");
let toggle = document.querySelector(".darkmode");

// Retrieve dark mode state from localStorage
let darkmode = localStorage.getItem("darkmode") === "true";

// Function to apply dark mode styles
function applyDarkMode() {
    root.style.setProperty("--color-main", "aquamarine");
    root.style.setProperty("--color-bg", "#1c1c1c");
    root.style.setProperty("--blend-mode", "screen");
    root.style.setProperty("--color-overlay", "aquamarine");

    imgInvert.forEach((img) => img.style.setProperty("filter", "invert(1)"));

    darkmode = true;
    localStorage.setItem("darkmode", darkmode);
}

// Function to apply light mode styles
function applyLightMode() {
    root.style.setProperty("--color-main", "#1c1c1c");
    root.style.setProperty("--color-bg", "white");
    root.style.setProperty("--blend-mode", "multiply");
    root.style.setProperty("--color-overlay", "#1c1c1c");

    imgInvert.forEach((img) => img.style.setProperty("filter", "invert(0)"));

    darkmode = false;
    localStorage.setItem("darkmode", darkmode);
}

// Apply the initial state based on localStorage
if (darkmode) {
    applyDarkMode();
} else {
    applyLightMode();
}

// Toggle the dark mode on button click
toggle.addEventListener("click", () => {
    if (darkmode) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
});

// let root = document.documentElement;
// let imgInvert = document.querySelectorAll(".img-inverter");

// let toggle = document.querySelector(".darkmode");

// let darkmode = true;
// // console.table(imgInvert);
// toggle.addEventListener("click", (e) => {
//     if (darkmode) {
//         root.style.setProperty("--color-main", "aquamarine");
//         root.style.setProperty("--color-bg", "#1c1c1c");
//         root.style.setProperty("--blend-mode", "screen");
//         root.style.setProperty("--color-overlay", "aquamarine");

//         // LOOPING OVER ALL IMGS
//         for (var i = 0; i < imgInvert.length; i++) {
//             imgInvert[i].style.setProperty("filter", "invert(1)");
//         }

//         darkmode = false;
//     } else {
//         root.style.setProperty("--color-main", "#1c1c1c");
//         root.style.setProperty("--color-bg", "white");
//         root.style.setProperty("--blend-mode", "multiply");
//         root.style.setProperty("--color-overlay", "#1c1c1c");

//         for (var i = 0; i < imgInvert.length; i++) {
//             imgInvert[i].style.setProperty("filter", "invert(0)");
//         }

//         darkmode = true;
//     }
// });
