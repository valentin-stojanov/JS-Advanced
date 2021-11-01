function validate() {
    const emailField = document.querySelector('#email');
    emailField.addEventListener('change', checkEmail);
    const pattern = /^[\w]+@[\w]+.[\w]+$/;



    function checkEmail() {
        const email = emailField.value;
        if (pattern.exec(email)){
            emailField.className = '';
        } else {
            emailField.className = 'error';
        }
    }
}