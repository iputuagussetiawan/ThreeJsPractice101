import "../scss/style.scss";
import LocomotiveScroll from "locomotive-scroll";
import { Tooltip, Toast, Popover } from "bootstrap";
import Navigation from "../js/layout/navigation"

const navigation = new Navigation()
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// variable
const navbarCustom= document.querySelector(".navbar-custom");

scroll.on("scroll", (position) => {
    if (position.scroll.y > 250) {
        navbarCustom.classList.add("show");
    } else {
        navbarCustom.classList.remove("show");
    }
}); 


const burgerMenu = document.querySelector("#hamburger");
let isClosed = false;

burgerMenu.onclick = function () {
	console.log("test");
	burgerTime();
};

function burgerTime() {
	console.log("burger time");
	if (isClosed == true) {
		burgerMenu.classList.remove("open");
		burgerMenu.classList.add("closed");
		isClosed = false;
	} else {
		burgerMenu.classList.remove("closed");
		burgerMenu.classList.add("open");
		isClosed = true;
	}
}








