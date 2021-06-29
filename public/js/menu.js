
const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll("navbar-links ul");

hamburger.addEventListener("click", ()=>{
    navbarLinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})