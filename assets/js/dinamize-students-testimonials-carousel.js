const testimonialsCarouselButtons = Array.from(document.querySelector('#carouselStudentsTestimonials > .carousel-indicators').children);
const studentPhoto = document.getElementById('student-image');
let previousActiveItem = document.querySelector('#students-testimonials .carousel-item.active');

function animateStudentPhoto() {  

  const currentActiveItem = document.querySelector('#students-testimonials .carousel-item.active'); 
  
  if ( currentActiveItem !== previousActiveItem ) {

    studentPhoto.classList.remove('animate__fadeInRight');
    studentPhoto.classList.add('animate__fadeOutRight');
    setTimeout( () => { 
      // TODO: COMMAND TO CHANGE STUDENT PHOTO RIGHT HERE 
      studentPhoto.classList.add('animate__fadeInRight');
      studentPhoto.classList.remove('animate__fadeOutRight');}
    , 700);

    previousActiveItem = currentActiveItem;

  }

}

testimonialsCarouselButtons.forEach( (btn) => {  
  btn.addEventListener('click', () => animateStudentPhoto());  
});