// TODO: ORGANIZE THIS JS BETTER. IF POSSIBLE, BY INPORTING EXTERNAL JS JUST LIKE WE DO WITH CSS

// BEGIN --- JS OF OUR SANDBAR

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

// END --- JS OF OUR SANDBAR






//BEGIN --- JS TO CHANGE HTML TEXT WHEN WHE CLICK THE BUTTONS IN OUR SLICK CAROUSEL

const coursesCarouselLeftButton = document.getElementsByClassName('slick-prev');
const coursesCarouselRightButton = document.getElementsByClassName('slick-next');
const titleInstructorsSection = document.querySelector('#instructors-by-tag > h3 > span');
const titleCoursesSection = document.querySelector('#courses-by-tag > h2 > span');

function updateTitle(pieceToBeChanged) {

  pieceToBeChanged.innerText = document.getElementsByClassName('slick-current')[0].innerText;

}

// END --- JS TO CHANGE HTML TEXT WHEN WHE CLICK THE BUTTONS IN OUR SLICK CAROUSEL






// BEGIN --- JS TO ANIMATE STUDENT TESTIMONIAL PHOTO

const testimonialsCarouselButtons = Array.from(document.querySelector('#carouselStudentsTestimonials > .carousel-indicators').children);
const studentPhoto = document.getElementById('student-image');

testimonialsCarouselButtons.forEach( (btn) => {
  // TODO: QUERO QUE A IMAGEM SEJA TRANSLADADA APENAS QUANDO btn NAO TIVER A CLASSE active. POR ISSO, TENHO QUE ACRESCENTAR A VERIFICAÇÃO if(!btn.classList.contains('active')) AQUI DEPOIS QUE APRENDER ASSINCRONIA (QUERO QUE ESSA VERIFICAÇÃO SEJA EXECTUDA ANTES DO EVENTO DO BOOTSTRAP ADICIONAR active AO BTN CLICLADO)
  btn.addEventListener('click', () => animateStudentPhoto());  
});

function animateStudentPhoto() {  

  studentPhoto.classList.remove('animate__fadeInRight');
  studentPhoto.classList.add('animate__fadeOutRight');
  setTimeout( () => { 
    // TODO: COMMAND TO CHANGE STUDENT PHOTO RIGHT HERE 
    studentPhoto.classList.add('animate__fadeInRight');
    studentPhoto.classList.remove('animate__fadeOutRight');}
  , 700);  

}

// END --- JS TO ANIMATE STUDENT TESTIMONIAL PHOTO





// BEGIN --- JS TO GIVE THE SEETINGS OF OUR SLICK AND TO MAKE THE CHANGE OF HTML WORK

$(document).ready(function(){
  // IN VANILLA JS: document.addEventListener('DOMContentLoaded', function () {
  
  $('.coursesByCategory').slick({    
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,    
    variableWidth: true,
  });
  
  coursesCarouselLeftButton[0].addEventListener('click', () => {
    updateTitle(titleInstructorsSection);
    updateTitle(titleCoursesSection);
  });
  
  coursesCarouselRightButton[0].addEventListener('click', () => {
    updateTitle(titleInstructorsSection);
    updateTitle(titleCoursesSection);
  });
  
});

// END --- JS TO GIVE THE SEETINGS OF OUR SLICK AND TO MAKE THE CHANGE OF HTML WORK







