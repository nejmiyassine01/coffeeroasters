const menu = document.querySelector(".navbar__menu");
const ul = document.querySelector(".show");

menu.addEventListener("click", (e) => {
	e.preventDefault();
	ul.classList.toggle("show");
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 10) {
		ul.classList.remove("show");
	}
});
