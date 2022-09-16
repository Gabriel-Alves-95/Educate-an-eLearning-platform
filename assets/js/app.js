const coursesCarouselLeftButton = document.getElementsByClassName('slick-prev');
const coursesCarouselRightButton = document.getElementsByClassName('slick-next');

$(document).ready(function(){
  // IN VANILLA JS: document.addEventListener('DOMContentLoaded', function () {
  
  $('.coursesByCategory').slick({    
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,    
    variableWidth: true,
  });

  createInstructorsAndCourses();
  displayMostPopularInstructorsAndCourses();
  
  coursesCarouselLeftButton[0].addEventListener('click', () => displayCourseInfoByTag());
  
  coursesCarouselRightButton[0].addEventListener('click', () => displayCourseInfoByTag());

  loginBtn.addEventListener('click', () => showLoginForm());

  registerBtn.addEventListener('click', () => showRegisterForm());

  registerNowBtn.addEventListener('click', () => showRegisterForm());
  
});