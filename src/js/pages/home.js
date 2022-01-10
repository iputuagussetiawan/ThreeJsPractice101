// import css here
import "../../scss/pages/home.scss";
import "swiper/css/bundle";
//end css imported

import gsap from "gsap/all";
import Swiper from "swiper/bundle";
const swiferBannerContainer = document.querySelector("#banner-slider");
const swiperBanner = new Swiper(".banner-slider", {
	direction: "horizontal",
	parallax: true,
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 0,
	loop: true,
	disableOnInteraction: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: 'fraction',
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

let banerImageContainer = document.querySelector(
	".banner-slider__image-container"
);

let banerImage = document.querySelector(".banner-slider__image");

swiferBannerContainer.addEventListener("mousemove", (e) => {
	parallaxImage(e, ".banner-slider__image", -5);
});

function parallaxImage(e, target, movement) {
	let imageContainerOffsetLeft = banerImageContainer.offsetLeft;
	let imageContainerOffsetTop = banerImageContainer.offsetTop;
	let imageContainerWidth = banerImageContainer.offsetWidth;
	let imageContainerHeight = banerImageContainer.offsetHeight;
	let relX = e.pageX - imageContainerOffsetLeft;
	let relY = e.pageY - imageContainerOffsetTop;
	gsap.to(target, {
		x: ((relX - imageContainerWidth / 3) / imageContainerWidth) * movement,
		y:
			((relY - imageContainerHeight / 3) / imageContainerHeight) *
			movement,
		duration: 1,
	});
}

swiperBanner.on("slideChange", function () {
	gsap.fromTo(
		".banner-slider__image",
		{ scale: 1.5 },
		{ scale: 1, duration: 3, delay: 0.5 }
	);
	gsap.fromTo(
		".banner-slider__title",
		{ autoAlpha: 0, x: 100 },
		{ autoAlpha: 1, duration: 1.5, x: 0, delay: 1.5 }
	);
});

swiferBannerContainer.addEventListener("mouseenter", (e) => {
	swiperBanner.autoplay.stop();
});
swiferBannerContainer.addEventListener("mouseleave", (e) => {
	swiperBanner.autoplay.start();
});