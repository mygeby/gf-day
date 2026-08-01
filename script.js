// Efek muncul saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// Smooth scroll untuk tombol
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Efek zoom saat klik foto
document.querySelectorAll(".grid img").forEach(img => {

    img.addEventListener("click", () => {

        if (img.classList.contains("zoom")) {
            img.classList.remove("zoom");
        } else {
            document.querySelectorAll(".grid img").forEach(i => i.classList.remove("zoom"));
            img.classList.add("zoom");
        }

    });

});
