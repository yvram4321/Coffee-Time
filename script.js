const header = document.querySelector("header");
const menu_btn = document.querySelector("#menu-btn");
const close_btn = document.querySelector("#close-menu-btn");


menu_btn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});

close_btn.addEventListener("click", () => {
    menu_btn.click();
})

// Product variables
let previewContainer = document.querySelector(".product-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach(product => {
    product.onclick = () =>{
        previewContainer.style.display = "flex"
        let name = product.getAttribute("data-name");
        previewBox.forEach(preview => {
            let target = preview.getAttribute("data-target");
            if(name == target){
                preview.classList.add("active");
            };
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector(".fa-times").onclick = () =>{
        close.classList.remove("active");
        previewContainer.style.display = "none"
    };
});


// Sign up and Log in Variables
const container = document.querySelector(".container"),
        signUp = document.querySelector(".signup-link"),
        login = document.querySelector(".login-link");


// To appear signup and login form
signUp.addEventListener("click", ( ) =>{
    container.classList.add("active");
});

login.addEventListener("click", ( ) =>{
    container.classList.remove("active");
});