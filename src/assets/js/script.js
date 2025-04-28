const hamburguer = document.querySelector(".toggle-btn");
const toogler = document.querySelector("#icon");

hamburguer.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
    toogler.classList.toggle("fa-angle-double-right");
    toogler.classList.toggle("fa-angle-double-left");
})