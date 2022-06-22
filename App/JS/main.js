const toggle = document.querySelector(".toggle");
const login = document.querySelector(".login");
const register = document.querySelector(".register");

const loginMove = document.querySelector("#login");
const registerMove = document.querySelector("#register");
const form = document.querySelector(".form");


register.addEventListener("click",moveToRight);
login.addEventListener("click",moveToLeft);

function moveToRight(){
  toggle.style.left = "50%";
  register.style.color ="azure"
  login.style.color = "#111";

  registerMove.style.left = "50px";
  loginMove.style.left ='450px';
  registerMove.style.top ="3em";
 
}

function moveToLeft(){
  toggle.style.left = "0%";
  register.style.color ="#111"
  login.style.color = "azure";

  registerMove.style.left = "-450px";
  loginMove.style.left ='50px';
 


}