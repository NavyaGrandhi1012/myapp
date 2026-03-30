// typing effect
let text = "We came as strangers...";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    } else {
        setTimeout(() => {
            document.getElementById("intro").style.display = "none";
        }, 1500);
    }
}

type();