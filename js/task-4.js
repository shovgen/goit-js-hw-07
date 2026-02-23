
const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', e => {
    e.preventDefault();

   const {
    elements: { email, password }
   } = e.currentTarget;
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
     if (emailValue === "" || passwordValue === "") {
    return alert('All form fields must be filled in');
     }
    const formData = {
    email: emailValue,
    password: passwordValue,
    };
    
    console.log(formData);
    
    

    formElem.reset();
});