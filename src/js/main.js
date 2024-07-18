const burgerBtnElement = document.querySelector('.navbar__burger-btn');

const handleMovileNavigation = () => burgerBtnElement.classList.toggle('active');

burgerBtnElement.addEventListener('click', handleMovileNavigation);
