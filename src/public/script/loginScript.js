var form = document.getElementById("form-login");
var userName = document.getElementById("userName");
var password = document.getElementById("password");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    userValidation();
    
});

function userValidation()
{  
    if(userName.value == "hectoristy" && password.value == 1234)
    {
        logeado = true;
        window.location.href="../index.html";
        
    }
}