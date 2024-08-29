const sideBarToggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

sideBarToggleButton.addEventListener('click', () => {
  sideBar.classList.toggle('show-sidebar');
});

closeButton.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});