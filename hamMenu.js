const menu = document.querySelector('.menu');
const menuList = document.querySelector('.nav');

menu.onclick = function () {
  menu.classList.toggle('clicked');
  menuList.classList.toggle('clicked');
};
