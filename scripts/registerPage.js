"use strict";

const mobileNumber = document.getElementById("mobileNumber");
const pass = document.getElementById("pass");
const passRepeat = document.getElementById("passRepeat");
const wrongPass = document.getElementById("wrongPass");
const nomatchPass = document.getElementById("nomatchPass");
const button = document.getElementById("button");

mobileNumber.setAttribute("title", "شماره موبایل را وارد کنید.");
pass.setAttribute("title", "پسورد را وارد کنید (حداقل 8 کارکتر).");
passRepeat.setAttribute("title", "تکرار رمز عبور را وارد کنید.");

let phoneStat = false;
let passStat = false;
let passRepeatStat = false;
let passRepeatMatching = false;

mobileNumber.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "شماره موبایل را وارد کنید.");
    phoneStat = false;
  } else {
    event.target.setAttribute("title", "");
    phoneStat = true;
  }

  if (phoneStat && passStat && passRepeatStat && passRepeatMatching) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

pass.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "پسورد را وارد کنید (حداقل 8 کارکتر).");
    wrongPass.innerHTML = "پسورد صحیح نیست!";
    passStat = false;
  } else {
    event.target.setAttribute("title", "");
    passStat = true;
    wrongPass.innerHTML = "";
  }

  if (phoneStat && passStat && passRepeatStat && passRepeatMatching) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

passRepeat.addEventListener("input", (event) => {
  if (!event.target.validity.valid) {
    event.target.setAttribute("title", "تکرار رمز عبور را وارد کنید.");
    passRepeatStat = false;
  } else {
    event.target.setAttribute("title", "");
    passRepeatStat = true;
  }

  if (phoneStat && passStat && passRepeatStat && passRepeatMatching) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});

pass.addEventListener("blur", (event) => {
  if (event.target.value !== passRepeat.value) {
    nomatchPass.innerHTML = "رمز و رمز عبور با هم یکی نیستند!";
    passRepeat.style.border = "2px red solid";
    passRepeat.style.boxShadow = "0 0 10px red";
  } else {
    nomatchPass.innerHTML = "";
    passRepeat.style.border = "";
    passRepeat.style.boxShadow = "";
  }
});

passRepeat.addEventListener("blur", (event) => {
  if (event.target.value !== pass.value) {
    nomatchPass.innerHTML = "رمز و رمز عبور با هم یکی نیستند!";
    event.target.style.border = "2px red solid";
    event.target.style.boxShadow = "0 0 10px red";
    passRepeatMatching = false;
  } else {
    nomatchPass.innerHTML = "";
    event.target.style.border = "";
    event.target.style.boxShadow = "";
    passRepeatMatching = true;
  }

  if (phoneStat && passStat && passRepeatStat && passRepeatMatching) {
    button.removeAttribute("disabled");
    button.style.background = "forestgreen";
  } else {
    button.setAttribute("disabled", "");
    button.style.background = "grey";
  }
});
