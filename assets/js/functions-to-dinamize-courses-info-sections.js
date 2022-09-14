const titleInstructorsSection = document.querySelector('#instructors-by-tag > h3 > span');
const titleCoursesSection = document.querySelector('#courses-by-tag > h2 > span');

const collapseOne = document.querySelector('#collapseOne > .accordion-body');
const collapseTwo = document.querySelector('#collapseTwo > .accordion-body');
const collapseThree = document.querySelector('#collapseThree > .accordion-body');
const collapseFour = document.querySelector('#collapseFour > .accordion-body');

const spinners = document.querySelectorAll('#courses-info .spinner-custom');

function updateTitle(pieceToBeChanged, message) {

  pieceToBeChanged.innerText = message;

}

function getInstructorsByCourseTag(pTag) {

  const tags = pTag.split(' & ');  
  const instructorsToShow = [];

  for( let tag of tags ) {

    const coursesInTag = allCourses.filter( course => course.tag === tag );

    for( listedCourse of coursesInTag ) {

      const instructorToAdd = allInstructors.filter( instructor => instructor.id === listedCourse.instructorId );

      if( instructorsToShow.indexOf(instructorToAdd[0]) === -1 ) {
        instructorsToShow.push( instructorToAdd[0] );
      }    

    }

  }

  return instructorsToShow;

}

function getCoursesInTag(pTag) {  
  
  const tags = pTag.split(' & ');  
  const coursesToShow = [];

  for( let tag of tags ) {

    const coursesInTag = allCourses.filter( course => course.tag === tag );

    for( listedCourse of coursesInTag ) {
      coursesToShow.push(listedCourse);
    } 
    
  }
  
  return coursesToShow;

}

function displayInstructorsByCourseTag(pTag) {
  
  const instructors = getInstructorsByCourseTag(pTag);  

  for(let i=0; i < instructors.length; i++ ) {

    if( i < 6 ) {
      collapseOne.innerHTML += instructors[i].showInstructorCard();      
    } else {
      collapseTwo.innerHTML += instructors[i].showInstructorCard();
    }

  }  

  if( instructors.length > 6 ) {
    collapseTwo.parentElement.parentElement.style.display = 'block';
  } else {
    collapseTwo.parentElement.parentElement.style.display = 'none';
  }

}

function displayCoursesInTag(pTag) {
  
  const courses = getCoursesInTag(pTag);  

  for(let i=0; i < courses.length; i++ ) {

    if( i < 6 ) {
      collapseThree.innerHTML += courses[i].showCourseCard();      
    } else {
      collapseFour.innerHTML += courses[i].showCourseCard();
    }

  }

  if( courses.length > 6 ) {
    collapseFour.parentElement.parentElement.style.display = 'block';
  } else {
    collapseFour.parentElement.parentElement.style.display = 'none';
  }

}

function displayMostPopularInstructorsAndCourses() {

  const popularInstructors = allInstructors.filter( instructor => instructor.rating >= 4.5 );
  const popularCourses = allCourses.filter( course => course.rating >= 4.5 );  



  for(let i=0; i < popularInstructors.length; i++) {

    if( i < 6) {
      collapseOne.innerHTML += popularInstructors[i].showInstructorCard();
    } else {
      collapseTwo.innerHTML += popularInstructors[i].showInstructorCard();
    }

  }

  if( popularInstructors.length > 6 ) {
    collapseTwo.parentElement.parentElement.style.display = 'block';
  } else {
    collapseTwo.parentElement.parentElement.style.display = 'none';
  }



  for(let i=0; i < popularCourses.length; i++) {

    if( i < 6) {
      collapseThree.innerHTML += popularCourses[i].showCourseCard();
    } else {
      collapseFour.innerHTML += popularCourses[i].showCourseCard();
    }

  }

  if( popularCourses.length > 6 ) {
    collapseFour.parentElement.parentElement.style.display = 'block';
  } else {
    collapseFour.parentElement.parentElement.style.display = 'none';
  }

}

function displayCourseInfoByTag() {  

  const tag = document.getElementsByClassName('slick-current')[0].innerText;
  
  collapseOne.innerHTML = '';
  collapseTwo.innerHTML = '';
  collapseThree.innerHTML = '';
  collapseFour.innerHTML = ''; 

  collapseTwo.parentElement.parentElement.style.display = 'none';
  collapseFour.parentElement.parentElement.style.display = 'none';

  collapseTwo.parentElement.classList.remove('show');
  collapseTwo.parentElement.parentElement.lastElementChild.firstElementChild.classList.add('collapsed');

  collapseFour.parentElement.classList.remove('show');
  collapseFour.parentElement.parentElement.lastElementChild.firstElementChild.classList.add('collapsed');
  
  titleInstructorsSection.classList.add('placeholder');
  titleCoursesSection.classList.add('placeholder');

  for( let spinner of spinners ) {
    spinner.style.display = 'block';
  }

  setTimeout( function(){

    updateTitle(titleInstructorsSection, tag);
    updateTitle(titleCoursesSection, tag);

    titleInstructorsSection.classList.remove('placeholder');
    titleCoursesSection.classList.remove('placeholder');
    
    for( let spinner of spinners ) {
      spinner.style.display = 'none';
    }

    if( tag === 'Most Popular' ) {

      displayMostPopularInstructorsAndCourses();       
  
    } else {    
      
      displayInstructorsByCourseTag(tag);        
      displayCoursesInTag(tag);
  
    }

  }, 1000);   

}