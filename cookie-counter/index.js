
const counter = document.querySelector('span');
counter.textContent = 0;
const counterSection = document.querySelector(".counter-section");
const cookieSection = document.querySelectorAll(".cookie-img-section")
const cookieImg = document.querySelector("img");



cookieImg.addEventListener("click", function (){
    counter.textContent++;
})
