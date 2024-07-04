"use strict";

const btn = document.querySelector(".btn-darkmode");
const symbol = document.querySelector(".fa-moon-o");
const box = document.querySelector("#box");
const body = document.querySelector("body");
const icon = document.querySelector(".fa-solid");

btn.addEventListener("click", () => {
    if (btn.classList.contains("btn-darkmode")) {
        btn.classList.add("btn-lightmode");
        btn.classList.remove("btn-darkmode");
        box.classList.add("light-toggle");
        box.classList.remove("dark-toggle");
        body.classList.remove("toggle-dark-bg");
        body.classList.add("toggle-light-bg");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        btn.classList.add("btn-darkmode");
        btn.classList.remove("btn-lightmode");
        box.classList.remove("light-toggle");
        box.classList.add("dark-toggle");
        body.classList.add("toggle-dark-bg");
        body.classList.remove("toggle-light-bg");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
})
