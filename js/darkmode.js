let root = document.documentElement;
let toggle = document.querySelector(".darkmode");

let darkmode = true;

toggle.addEventListener("click", e => {
    if (darkmode) {
        root.style.setProperty("--color-main", "blue");
        root.style.setProperty("--color-bg", "whitesmoke");
        root.style.setProperty("--blend-mode", "screen");
        root.style.setProperty("--color-overlay", "blue");

        //root.style.setProperty("--color-bg-trns", "rgba(245,245,245,0)");
        darkmode = false;
    } else {
        root.style.setProperty("--color-main", "aquamarine");
        root.style.setProperty("--color-bg", "#1c1c1c");
        root.style.setProperty("--blend-mode", "multiply");
        root.style.setProperty("--color-overlay", "aquamarine");
        darkmode = true;
    }
});
