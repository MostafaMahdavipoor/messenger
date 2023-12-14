"use strict";

const mobileNumber = document.getElementById("mobileNumber");
const nameAndFamily = document.getElementById("nameAndFamily");
const button = document.getElementById("button");
const crossButton = document.getElementById("crossButton");

mobileNumber.setAttribute("title", "شماره موبایل را وارد کنید.");
nameAndFamily.setAttribute("title", "نام و نام خانوادگی را وارد کنید.");

let phoneStat = false;
let nAndFStat = false;

mobileNumber.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "شماره موبایل را وارد کنید.");
    phoneStat = false;
  } else {
    event.target.setAttribute("title", "");
    phoneStat = true;
  }

  if (phoneStat && nAndFStat) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

nameAndFamily.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "نام و نام خانوادگی را وارد کنید.");
    nAndFStat = false;
  } else {
    event.target.setAttribute("title", "");
    nAndFStat = true;
  }

  if (phoneStat && nAndFStat) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

crossButton.addEventListener("click", (e) => {
  close();
});
