const burgerNav = document.querySelector('.burger-nav');
const burgerBtn = document.querySelector('.burger-btn');
const burgerClose = document.querySelector('.burger-btn.close');
const links = document.querySelectorAll('links.nav-item');

function toggleBurgerNav() {
	burgerNav.classList.toggle('active');

	links.forEach((link) => {
		link.addEventListener('click', () => {
			burgerNav.classList.remove('active');
		});
	});

	burgerClose.addEventListener('click', () => {
		burgerNav.classList.remove('active');
	});
}

burgerBtn.addEventListener('click', toggleBurgerNav);
