const emailField = document.getElementById('email-box');
const error = document.getElementById('error');
const EMAIL_REGEX = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

emailField.addEventListener('keyup', () => {
  if(emailField.value.length < 1) {
    emailField.style.borderColor = '#2e8cc7';
    emailField.style.backgroundColor = '#d4e4f1';
    error.innerText = '';
  } else if(!emailField.value.match(EMAIL_REGEX)) {
    emailField.style.borderColor = 'red';
    emailField.style.backgroundColor = 'lightpink';
    error.innerText = 'Por favor, utilize um formato de e-mail válido!';
  } else if (emailField.value.match(EMAIL_REGEX)){
    emailField.style.borderColor = 'green';
    emailField.style.backgroundColor = 'lightgreen';
    error.innerText = '';
  } 
});
