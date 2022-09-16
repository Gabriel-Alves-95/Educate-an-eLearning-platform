const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


const accountOptions = document.querySelector('.account-options')
const loginBtn = accountOptions.firstElementChild.firstElementChild.firstElementChild;
const registerBtn = accountOptions.firstElementChild.lastElementChild.firstElementChild;
const registerNowBtn = document.getElementById('register-now');

const modalTitle = document.getElementById('accountModalLabel');

const formElements = document.getElementById('account-form').children;
const emailInput = formElements[0].lastElementChild;
const passwordInput = formElements[1].lastElementChild;

const requirementEmailMessage = () => {

    $('#email-div').popover('dispose');

    $('#email-div').popover({    
        html: true,          
        trigger: 'focus',              
        title: 'Requirement',
        content: 'Your email <strong>must</strong> end with <em>@educate.com</em>',
        placement: 'bottom'                    
    }) 

}

const requirementPasswordMessage = () => {

    $('#password-div').popover('dispose');

    $('#password-div').popover({    
        html: true,          
        trigger: 'focus',              
        title: 'Requirement',
        content: 'Your password <strong>must</strong> have a special character, a number and a capital letter',
        placement: 'bottom'                    
    }) 

}

const rememberEmailMessage = () => {

    $('#email-div').popover('dispose');

    $('#email-div').popover({    
        html: true,          
        trigger: 'focus',              
        title: 'Remember...',
        content: 'Your email ends with <em>@educate.com</em>',
        placement: 'bottom'                    
    }) 

}

const rememberPasswordMessage = () => {

    $('#password-div').popover('dispose');

    $('#password-div').popover({    
        html: true,          
        trigger: 'focus',              
        title: 'Remember...',
        content: 'Your password has a special character, a number and a capital letter',
        placement: 'bottom'                    
    }) 

}

function showLoginForm() {

    modalTitle.innerText = 'Login';

    formElements[2].style.display = 'none';
    formElements[3].style.display = 'none';
    formElements[4].style.display = 'inline-block';
    formElements[5].innerText = 'Enter';
    formElements[5].style.width = 'calc(100% - 173px)';          

    emailInput.removeEventListener('focus', requirementEmailMessage);
    passwordInput.removeEventListener('focus', requirementPasswordMessage);

    emailInput.addEventListener('focus', rememberEmailMessage);
    passwordInput.addEventListener('focus', rememberPasswordMessage);    
     
}

function showRegisterForm() {

    modalTitle.innerText = 'Register'

    formElements[2].style.display = 'block';
    formElements[3].style.display = 'block';
    formElements[4].style.display = 'none';
    formElements[5].innerText = 'Create Account';
    formElements[5].style.width = '100%';        

    emailInput.removeEventListener('focus', rememberEmailMessage);
    passwordInput.removeEventListener('focus', rememberPasswordMessage);

    emailInput.addEventListener('focus', requirementEmailMessage);
    passwordInput.addEventListener('focus', requirementPasswordMessage);
    
}