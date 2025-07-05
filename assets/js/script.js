// Jquery
$(document).ready(function () {
    






});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



document.querySelector('form').addEventListener('submit', function (e) {
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;

    if (email1 !== email2) {
        e.preventDefault(); // Detiene el envío
        document.getElementById('validacion-correo').style.display = 'block';
    }
});