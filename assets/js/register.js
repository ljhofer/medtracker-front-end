$(document).ready(function() {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z])([^\s]){9,20}$/;

    $('#registerForm').on("submit", function(event){
        // event.preventDefault();

        console.log(emailRegex.test($("#emailInput")));
        console.log(passwordRegex.test($("#passwordInput")));

        // console.log(emailRegex.test($("#emailInput")).val);
        // console.log(passwordRegex.test($("#passwordInput")).val);
        
        if ( emailRegex.test($("#emailInput").val()) && passwordRegex.test($("#passwordInput").val()) ) {
          window.location.href = "dashboard.html";
        } else {
          console.log("failed");
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

