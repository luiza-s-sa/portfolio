export default function menuMobile() {

};

const menuBtn = document.querySelector('.js-menu-btn');
const menuList = document.querySelector('.js-menu-list');

function openMenu(event) {
  menuList.classList.toggle('active');
  menuBtn.classList.toggle('active')
}

menuBtn.addEventListener('click', openMenu)