const navBtn = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav-item');

function toggleNavbar() {
	mobileNav.classList.toggle('active');
}
navBtn.addEventListener('click', toggleNavbar);

mobileNavLink.forEach((link) => {
	link.addEventListener('click', toggleNavbar);
});
