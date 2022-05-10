let root = document.documentElement;
let imgInvert = document.querySelectorAll(".img-inverter");

let toggle = document.querySelector(".darkmode");

let darkmode = true;
console.table(imgInvert);
toggle.addEventListener("click", (e) => {
    if (darkmode) {
        root.style.setProperty("--color-main", "aquamarine");
        root.style.setProperty("--color-bg", "#1c1c1c");
        root.style.setProperty("--blend-mode", "multiply");
        root.style.setProperty("--color-overlay", "aquamarine");

        // LOOPING OVER ALL IMGS
        for (var i = 0; i < imgInvert.length; i++) {
            imgInvert[i].style.setProperty("filter", "invert(1)");
        }

        darkmode = false;
    } else {
        root.style.setProperty("--color-main", "blue");
        root.style.setProperty("--color-bg", "white");
        root.style.setProperty("--blend-mode", "screen");
        root.style.setProperty("--color-overlay", "blue");

        for (var i = 0; i < imgInvert.length; i++) {
            imgInvert[i].style.setProperty("filter", "invert(0)");
        }

        darkmode = true;
    }
});
