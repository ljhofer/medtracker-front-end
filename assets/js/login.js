
$('#loginForm').on("submit", function(event){
    event.preventDefault();
    
    if ($("#emailInput").val() == "" || $('#passwordInput').val() == '') {
      
      alert("Login failed. Please enter your email and password.");  
    } else {
        window.location.href = "dashboard.html";
    }

})


