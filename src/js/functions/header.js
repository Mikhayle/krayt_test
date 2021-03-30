

const header = document.querySelector(`.header`);

window.addEventListener(`scroll`, () => {
  if(window.pageYOffset === 72) {
    header.classList.add(`show-out`);
  }
  if(window.pageYOffset < 72) {
    header.classList.remove(`show-out`);
  }
  if (window.pageYOffset > 73) {
    console.log(window.pageYOffset )
    header.classList.add(`fixed`);
  } else {
    header.classList.remove(`fixed`);
  }
});

