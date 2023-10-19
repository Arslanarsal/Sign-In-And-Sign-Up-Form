
let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let emailIcon = document.getElementById("emailIcon");
let passwordIcon = document.getElementById("passwordIcon");
let additionalFields = document.querySelectorAll('.input-fl');

signinbtn.onclick = function () {
    additionalFields.forEach(field => {
        if (field !== additionalFields[0] && field !== additionalFields[1]) {
            field.style.display = "none";
        }
    });
    emailIcon.style.display = "block";
    passwordIcon.style.display = "block";
    signupbtn.classList.remove("active");
    signinbtn.classList.add("active");
}

signupbtn.onclick = function () {
    additionalFields.forEach(field => {
        field.style.display = "flex";
    });
    emailIcon.style.display = "none";
    passwordIcon.style.display = "none";
    signupbtn.classList.add("active");
    signinbtn.classList.remove("active");
}
