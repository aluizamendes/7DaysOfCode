let mobileMenu = document.querySelector(".menu-mobile-icon");
let mobileIconImg = document.querySelector(".icon-menu-hamburger");

mobileMenu.addEventListener("click", () => {
  let menuLinks = document.querySelector(".nav-menu");
  menuLinks.classList.toggle("active");

  // trocar ícone para o "X" se conter a classe active
  if (menuLinks.classList.contains("active")) {
    mobileIconImg.src = "assets/close_FILL0_wght400_GRAD0_opsz48.svg";
  } else {
    mobileIconImg.src = "assets/menu_FILL0_wght400_GRAD0_opsz48.svg";
  }
});
