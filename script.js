const noBtn = document.getElementById("noBtn");

if (noBtn) {
    const moveButton = () => {
        const padding = 20;

        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    };

    noBtn.addEventListener("mouseenter", moveButton);
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveButton();
    });

    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveButton();
    });
}
function showLove(){

    const container = document.getElementById("love-container");

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.className="flying-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(20+Math.random()*35)+"px";

        heart.style.animationDuration=(2+Math.random()*2)+"s";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);

    }

}
