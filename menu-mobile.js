const mobileMenu = document.querySelector(".js-mobile-menu-btn");
const mobileNav = document.querySelector(".js-mobile-nav");
const menuItems = document.querySelectorAll('#main-nav a[href*="#"]');
const mainBody = document.querySelector("body");

// Open mobile nav when clicking mobile menu button
mobileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileNav.classList.toggle("open");
});

for (let menuItem of menuItems) {
  menuItem.onclick = (event) => {
    event.stopPropagation();

    let isParentMenu =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("sub-nav");

    console.log(event.target);
    console.log(isParentMenu);

    if (isParentMenu) {
      event.preventDefault();
    } else {
      mobileNav.classList.remove("open");
    }
  };
}

// Close mobile nav when clicking outside
mainBody.addEventListener("click", (event) => {
  mobileNav.classList.remove("open");
});
