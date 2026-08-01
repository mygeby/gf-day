const noBtn = document.getElementById("noBtn");

if (noBtn) {

    noBtn.addEventListener("mouseover", moveButton);

    noBtn.addEventListener("click", moveButton);

}

function moveButton() {

    const maxX = window.innerWidth - 180;
    const maxY = window.innerHeight - 80;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}
