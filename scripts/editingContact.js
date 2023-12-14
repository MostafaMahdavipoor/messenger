"use strict";

const nameAndFamily = document.getElementById("nameAndFamily");
const crossButton = document.getElementById("crossButton");

let nAndFstat = false;

nameAndFamily.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "رمز عبور را وارد کنید.");
    nAndFstat = false;
  } else {
    event.target.setAttribute("title", "");
    nAndFstat = true;
  }

  if (nAndFstat) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

crossButton.addEventListener('click',()=>{
    close();
});