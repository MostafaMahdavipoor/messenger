"use strict";

const mobileNumber = document.getElementById("mobileNumber");
const pass = document.getElementById("pass");
const button = document.getElementById("button");

mobileNumber.setAttribute("title", "شماره موبایل را وارد کنید.");
pass.setAttribute("title", "رمز عبور را وارد کنید.");

let phoneStat = false;
let passStat = false;

mobileNumber.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "شماره موبایل را وارد کنید.");
    phoneStat = false;
  } else {
    event.target.setAttribute("title", "");
    phoneStat = true;
  }

  if (phoneStat && passStat) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

pass.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "رمز عبور را وارد کنید.");
    passStat = false;
  } else {
    event.target.setAttribute("title", "");
    passStat = true;
  }

  if (phoneStat && passStat) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});
