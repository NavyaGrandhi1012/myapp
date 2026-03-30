const text = "We are strangers...";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(showImage, 1500);
    }
}

function showImage() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("hero").style.display = "flex";
}

typeEffect();