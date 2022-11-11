function openMenu() {

	let menuMobile = document.querySelector('.menu-mobile-links');

	document.querySelector('.icon-menu-hamburger').src="assets/close_FILL0_wght400_GRAD0_opsz48.svg"

	if (menuMobile.classList.contains('open-menu')) {
		menuMobile.classList.remove('open-menu')

		document.querySelector('.icon-menu-hamburger').src="assets/menu_FILL0_wght400_GRAD0_opsz48.svg"
	}

	else {
		menuMobile.classList.add('open-menu')
	}
}