const btn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function() {
    navLinks.classList.add("show-links");
    //   navLinks.classList.toggle("show-links");
    btn.classList.add("visible");
    closeBtn.classList.remove("visible");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("show-links");
    closeBtn.classList.add("visible");
    btn.classList.remove("visible");
});