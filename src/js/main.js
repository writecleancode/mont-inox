const burgerBtnElement = document.querySelector('.navbar__burger-btn');
const navbarLinksListElement = document.querySelector('.navbar__links');

const handleMovileNavigation = () => {
	burgerBtnElement.classList.toggle('active');
	navbarLinksListElement.classList.toggle('active');
};

burgerBtnElement.addEventListener('click', handleMovileNavigation);
