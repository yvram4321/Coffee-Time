const container = document.querySelector(".container"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");


// To appear signup and loginform
signUp.addEventListener("click", ( ) =>{
    container.classList.add("active");
});
login.addEventListener("click", ( ) =>{
    container.classList.remove("active");
});