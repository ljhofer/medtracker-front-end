$(document).ready(function() {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[A-Za-z])([^\s]){9,20}$/;

    $('#registerForm').on("submit", function(event){
        event.preventDefault();
        // emailRegex.text($("#email").val);
        console.log(emailRegex.test($("#emailInput").val()));
        console.log(passwordRegEx.test($("#passwordInput").val()));
        
        
        
        
        
        
        
        
        
        
        
        if (
            $('#emailInput').val() == '' ||
            $('#firstNameInput').val() == '' ||
            $('#lastNameInput').val() == '' ||
            $('#passwordInput').val() == '' ||
            $('#confirmPasswordInput').val() == ''
        ) {
            // alert("All fields are required in order to register");
            return false;
        }

    })
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

