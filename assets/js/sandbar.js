const sandbar = document.querySelector('.sandbar');
const navList = document.querySelector('header > nav > ul');

sandbar.addEventListener('click', () => navbarToggle());


function navbarToggle() {

  sandbar.classList.toggle('sandbar-active');
  if (window.innerWidth > 768) {
    navList.firstElementChild.classList.toggle('animate-navbar');
  } else {
    navList.classList.toggle('animate-navbar');
  }  

}  