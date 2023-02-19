//*alert('Wellcome to the our world')*//
//navBarVariables//
const nav = document.querySelector(".mobile-nav"),
    navMenuBtn = document.querySelector(".nav-menu-btn"),
    navCloseBtn = document.querySelector(".nav-close-btn");

//navToggleFunction//
const navToggleFunc = () => nav.classList.toggle("active");
navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);
// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener("click", function() {
        document.body.classList.toggle("flamy-theme");
        document.body.classList.toggle("snowy-theme");

        for (let j = 0; j < themeBtn.length; j++) {
            themeBtn[j].classList.toggle("flame");
            themeBtn[j].classList.toggle("snow");
        }
    });
}