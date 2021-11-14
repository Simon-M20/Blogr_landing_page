// const menu = document.querySelectorAll(".menu");
// console.log(menu);
const menuProduct = document.querySelector(".menu.product");
const menuCompany = document.querySelector(".menu.company");
const menuConnect = document.querySelector(".menu.connect")

document.addEventListener("click", e => {
    if (e.target.matches("span .icon-product")) {
        // console.log(e.target);
        menuProduct.classList.toggle("open")
    }

    if (e.target.matches("span .icon-company")) {
        menuCompany.classList.toggle("open")
    }

    if (e.target.matches("span .icon-connect")) {
        menuConnect.classList.toggle("open")
    }
})

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

document.addEventListener("click", e => {
    if (e.target.matches(".hamburger *")) {
        console.log(e.target);
        hamburger.classList.toggle("is-active");
        navBar.classList.toggle("open");
    }

    if (e.target.matches(".nav-bar ol li a")) {
        console.log(e.target);
        navBar.classList.remove("open");
        hamburger.classList.remove("is-active");

        // document.querySelector(navBar).classList.remove("open")
        // document.querySelector(hamburger).classList.remove("is-active")
      }
})