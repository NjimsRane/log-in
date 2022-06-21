const toggle = document.querySelector(".toggle");
const login = document.querySelector(".login");
const register = document.querySelector(".register");


register.addEventListener("click",moveToRight);

function moveToRight(){
  toggle.style.left = "50%";
}