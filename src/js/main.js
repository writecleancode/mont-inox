const navbarElement = document.querySelector('.navbar');
const burgerBtnElement = document.querySelector('.navbar__burger-btn');
const navbarLinksListElement = document.querySelector('.navbar__links');
const navbarLinks = document.querySelectorAll('[data-nav]');

const handleMovileNavigation = () => {
	burgerBtnElement.classList.toggle('active');
	navbarLinksListElement.classList.toggle('active');

	if (navbarLinksListElement.classList.contains('active')) {
		burgerBtnElement.setAttribute('aria-label', 'ukryj nawigację');
		navbarLinksListElement.removeAttribute('inert');
	} else {
		burgerBtnElement.setAttribute('aria-label', 'pokaż nawigację');
		navbarLinksListElement.setAttribute('inert', '');
	}
};

const handleCloseMobileNav = () => {
	if (!navbarLinksListElement.classList.contains('active')) return;

	burgerBtnElement.classList.remove('active');
	navbarLinksListElement.classList.remove('active');
};

const checkClick = e => {
	!navbarElement.contains(e.target) && handleCloseMobileNav();
};

burgerBtnElement.addEventListener('click', handleMovileNavigation);
navbarLinks.forEach(item => item.addEventListener('click', handleCloseMobileNav));
document.addEventListener('click', checkClick);
