const form = document.querySelector('form');
const firstname_input = document.querySelector('#firstname-input');
const lastname_input = document.querySelector('#lastname-input');
const email_input = document.querySelector('#email-input');
const password_input = document.querySelector('#password-input');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    getFormErrors();
})

const getFormErrors = () =>{
    const firstnameValue = firstname_input.value.trim();
    const lastnameValue = lastname_input.value.trim();
    const emailValue = email_input.value.trim();
    const passwordValue = password_input.value.trim();

    // checking for errors
    if (firstnameValue === '' || firstnameValue === null){
        setErrorFor(firstname_input, "First Name cannot be empty");
    };
    
    if (lastnameValue === '' || lastnameValue === null){
        setErrorFor(lastname_input, "Last Name cannot be empty");
    };

    if (emailValue === '' || emailValue === null){
        setErrorFor(email_input, "Email cannot be empty");
        
    } else if (!isMail(emailValue)){
        setErrorFor(email_input, "Looks like this is not an email");
    };

    if (passwordValue === '' || passwordValue === null){
        setErrorFor(password_input, "Password cannot be empty");
    };

}

// Setting function to get errors
const setErrorFor = (input, message) =>{
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('#error-message');
    const errorIcon = formControl.querySelector('svg');

    // Adding errorMessage 
    errorMessage.innerText = message;

    // Adding error classes
    errorMessage.style.display = 'block';
    errorMessage.classList.add('error');
    errorIcon.classList.add('error-icon');
    input.classList.add('incorrect');
};

// validating mail
const isMail = (email) =>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

 };





