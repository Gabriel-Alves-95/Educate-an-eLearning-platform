const allInstructors = [];
const allCourses = [];

const allTags = ['Food', 'Arts', 'Entertainment', 'Sports', 'Games', 'Home', 'Lifestyle', 'Design', 'Style', 'Business', 'Web Development', 'Languages', 'Cultures', 'Philosophy', 'History', 'Physics', 'Math', 'Biology'];
const courseLevel = ['Easy', 'Medium', 'Hard'];

function generateId(pCode) {

    let counterBlock = '';

    if (pCode === 0) {
        counterBlock = String(allInstructors.length + 1);    
    } else {
        counterBlock = String(allCourses.length + 1);
    }

    const codeBlock = String(pCode);
    const yearBlock = String(new Date().getFullYear());

    while (counterBlock.length < 9) {
        counterBlock = '0' + counterBlock;
    }

    return `${counterBlock}.${codeBlock}.${yearBlock}`;

}

function randomTotalOfCourses() {
    const totalOfCourses = Math.floor(Math.random()*37 + 1);
    return totalOfCourses;
}
 
function randomTotalOfStudents() {

    const randomTotalOfStudents = Math.floor(Math.random()*100000 + 20);       
    return randomTotalOfStudents;

}

function randomTotalOfVoters(pMaxNumber) {

    const randomTotalOfVoters = Math.floor(Math.random()*(pMaxNumber - 1) + 1); 
    return randomTotalOfVoters;

}
 
function randomRating() {

    const randomRating = (Math.random()*3 + 2).toFixed(1);
    return randomRating;    
 
}

function randomTimeDuration() {

    let hours = String(Math.floor(Math.random()*62));
    let minutes = String(Math.floor(Math.random()*59));

    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
       minutes = '0' +minutes;
    }

    return `${hours}h ${minutes}min`
}

function randomTotalOfLectures() {

    const totalOfLectures = Math.floor(Math.random()*42 + 3);
    return totalOfLectures;

}

function randomPrice() {

    const price = (Math.random()*38 + 12).toFixed(2);
    return price; 

}

function editNumber(pNumber) {

    const stringfyNumber = String(pNumber);
    let editedNumber = '';

    if( stringfyNumber.length > 3 ) {
        editedNumber = stringfyNumber.slice(0, stringfyNumber.length - 3) + ',' + stringfyNumber.slice(stringfyNumber.length - 3);
    }

    return editedNumber;
    
}

function createInstructorsAndCourses() {

    allTags.forEach( (tag, index) => {

        const numberOfInstructors = Math.floor(Math.random()*5 + 1);

        for(i=0; i < numberOfInstructors; i++) {

            const instructorName = `Inst. Name ${index + 1}.${i + 1}`
            const instructorJob = `Any Job ${index + 1}.${i + 1}`
            const instructor = new Instructor(instructorName, instructorJob, 'url');

            allInstructors.push(instructor);

            const coursesByCreatedInstructor = Math.floor(Math.random()*8 + 1);

            for(j=0; j < coursesByCreatedInstructor; j++) {

                const courseName = `Course ${index + 1}.${i + 1}.${j + 1}`;
                const courseLevelNumber = Math.floor( Math.random()*100 ) % 3;
                const course = new Course(courseName, tag, 'url', courseLevel[courseLevelNumber], instructor.id);

                allCourses.push(course);               

            }

        }     

    })   
    
}

class Instructor {

    constructor(name, job, photo) {        
        this.name = name;
        this.job = job;
        this.photo = photo;
    }

    id = generateId(0);           
    rating = randomRating();

    getTotalOfCourses() {

        const courses = allCourses.filter( course => course.instructorId === this.id );
        return courses.length;

    }

    getTotalOfStudents() {

        let totalOfStudents = 0;
        const courses = allCourses.filter( course => course.instructorId === this.id );

        for(let course of courses) {
            totalOfStudents += course.numberOfEnrolledStudents;
        }

        return totalOfStudents;

    }

    showInstructorCard() {

        const totalOfCourses = this.getTotalOfCourses();
        const totalOfStudents = this.getTotalOfStudents();        

        const card = 
        `<div class="instructor-card">
            <div class="instructor-img">                
                <i class="fa-solid fa-ban"></i>
            </div>
            <div class="instructor-info">
                <h4>${this.name}</h4>
                <h5>${this.job}</h5>
                <div class="instructor-rating">
                    <span>${this.rating}</span>
                    <i class="fa-solid fa-star"></i>
                    <span>Instructor Rating</span>
                </div>
                <div class="instructor-statistics">
                    <div class="number-of-students">
                        <span>${editNumber(totalOfStudents)}</span> Students
                    </div>                                                   
                    <div class="number-of-courses">
                        <span>${totalOfCourses}</span> Courses
                    </div>                                                    
                </div>
            </div>
        </div>`;

        return card;        

    }

}

class Course {

    constructor(name, tag, photo, level, instructorId) {
        this.name = name;
        this.tag = tag;
        this.photo = photo;     
        this.level = level;        
        this.instructorId = instructorId;
    }
    
    id = generateId(1);
    rating = randomRating();    
    numberOfEnrolledStudents = randomTotalOfStudents();    
    totalOfVoters = randomTotalOfVoters(this.numberOfEnrolledStudents);
    timeDuration = randomTimeDuration();
    totalOfLectures = randomTotalOfLectures();
    price = randomPrice();

    showCourseCard() {

        const instructor = allInstructors.filter( instructor => instructor.id === this.instructorId );
        const instructorName = instructor[0].name;
        const instructorPhoto = instructor[0].photo;

        const card = 
        `<div class="card">
            <div class="card-img-top">
                <i class="fa-solid fa-ban"></i>
            </div>
            <div class="card-body">                                                
                <span class="course-tag">${this.tag}</span>
                <h5 class="course-title">${this.name}</h5>                                                
            </div>
            <div class="card-body students-avaliation">
                <div class="rating"> 
                    <span>
                        ${this.rating}
                        <i class="fa-solid fa-star"></i>
                    </span>
                    (${editNumber(this.totalOfVoters)})
                </div>
                <div class="total-of-students">
                    <span>${editNumber(this.numberOfEnrolledStudents)}</span>
                    Students
                </div>
            </div>
            <div class="card-body course-info">
                <div class="duration"><i class="fa-regular fa-clock"></i> ${this.timeDuration} </div>
                <div class="number-of-lectures"><i class="fa-solid fa-calendar-days"></i> ${this.totalOfLectures} Lectures</div>
                <div class="course-level"><i class="fa-sharp fa-solid fa-signal"></i> ${this.level} </div>
            </div>
            <div class="card-body instructor-info">                                                
                <div class="instructor-img">
                    <i class="fa-solid fa-ban"></i>
                </div>
                <div class="instructor-name"> ${instructorName} </div>                                                                                  
                <div class="price"> $${this.price} </div>
            </div>
            <div class="options">
                <a href="#" target="_blank" class="btn btn-outline-primary">
                    More Info
                </a>
                <a href="#" target="_blank" class="btn btn-outline-danger">
                    Buy Course    
                </a>
            </div>                                                                                   
        </div>`

        return card;

    }    

}