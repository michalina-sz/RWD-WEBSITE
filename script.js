// document.addEventListener('DOMContentLoaded', function() {
//     // Twój kod JavaScript
//   });

const burgerNav = document.querySelector('.burger-nav');
const burgerBtn = document.querySelector('.burger-btn');
const links = document.querySelectorAll('links.nav-item');

function toggleBurgerNav() {
	burgerNav.classList.toggle('active');

	links.forEach((link) => {
		link.addEventListener('click', () => {
			burgerNav.classList.remove('active');
		});
	});
}

burgerBtn.addEventListener('click', toggleBurgerNav);

links.forEach((link) => {
	link.addEventListener('click', () => {
		burgerNav.classList.remove('active');
	});
});
