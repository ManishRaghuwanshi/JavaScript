// submit event and regualr expression
// rege

let form = document.querySelector('.signup-form');
form.addEventListener('submit', (event) => { // event parameter will automatically get values
    event.preventDefault();
    console.log("form has been submitted");
})

// form element 
let userName = document.querySelector('#username');
let userNameValue = userName.value;
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector("#confirm-password");

// userName.addEventListener("input", () => {
//     console.log(userName.value);
//     console.log(form.username.value);
// })

let userNamePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.[0-9]*).{8, 16}$/;
let userNameResult = userNameValue.match(userNamePattern);
console.log(userNameResult);
if(userNameResult==true){
    console.log("your password is strong", userNameResult);
}else{
    console.log("your password is weak");
}
