const imgs = [
    "../img/stickerz/rzzl-stckr-penta.gif",
    "../img/stickerz/rzzl-stckr-grow.gif",
    "../img/stickerz/rzzl-stckr-global-noise.gif",
    "../img/stickerz/rzzl-stckr-rxdbmap.png",
    "../img/stickerz/rzzl-stckr-thanks.png",
    "../img/stickerz/rzzl-stckr-skelly.png",
    "../img/stickerz/rzzl-stckr-badge.gif",
    "../img/stickerz/rzzl-stckr-snakegrabber.png",
    "../img/stickerz/rzzl-stckr-grunge.png",
    "../img/stickerz/rzzl-stckr-navy.gif",
    "../img/stickerz/rzzl-stckr-flamez.gif"
];

let i = 0;

function placeSticker(x, y) {
    const nextImage = imgs[i];

    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform =
        "translate(-50%, -50%) scale(0.4) rotate(" +
        (Math.random() * 20 - 10) +
        "deg)";

    document.querySelector(".welcome-section").appendChild(img);
    i++;
    if (i >= imgs.length) {
        i = 0;
    }
}

document
    .querySelector(".welcome-section")
    .addEventListener("click", function(e) {
        e.preventDefault();
        placeSticker(e.pageX, e.pageY);
    });

document
    .querySelector(".welcome-section")
    .addEventListener("touchend", function(e) {
        e.preventDefault();
        placeSticker(e.pageX, e.pageY);
    });
