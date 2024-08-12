const navbarElement = document.querySelector('.navbar');
const burgerBtnElement = navbarElement.querySelector('.navbar__burger-btn');
const navbarLinksListElement = navbarElement.querySelector('.navbar__links');
const navbarLinks = navbarElement.querySelectorAll('[data-nav]');

const referencesWrapperElement = document.querySelector('.references__wrapper');
const showMoreReferencesButton = document.querySelector('.references__show-more-btn');
const showMoreReferencesButtonText = document.querySelector('.references__show-more-btn-text');

const footerYearElement = document.querySelector('.footer__copyright-year')

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

const handleReferencesExtension = () => {
	referencesWrapperElement.classList.toggle('active');

	if (referencesWrapperElement.classList.contains('active')) {
		showMoreReferencesButtonText.textContent = 'Pokaż tylko wybrane referencje';
	} else {
		showMoreReferencesButtonText.textContent = 'Pokaż wszystkie referencje';
	}
};

const handleFooterYear = () => {
	const year = new Date().getFullYear()
	footerYearElement.textContent = year ? year : '2024'
}

burgerBtnElement.addEventListener('click', handleMovileNavigation);
navbarLinks.forEach(item => item.addEventListener('click', handleCloseMobileNav));
showMoreReferencesButton.addEventListener('click', handleReferencesExtension);
document.addEventListener('click', checkClick);
handleFooterYear()