const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.header__menu`);
const menuItems = document.querySelectorAll(`.header__menu-item`);

const openMenu = () => {
  burger.classList.toggle(`burger--active`);
  menu.classList.toggle(`is-active`);
  document.body.classList.toggle(`scroll-off`);
};

menuItems.forEach(el => {
  el.addEventListener(`click`, () => {
    console.log(menuItems)
    openMenu();
  });
});


burger.addEventListener(`click`, openMenu);
