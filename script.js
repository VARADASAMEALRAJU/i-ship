const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => wrapper.classList.add('active');
loginLink.onclick = () => wrapper.classList.remove('active');
btnPopup.onclick = () => wrapper.classList.add('active-popup');
iconClose.onclick = () => window.location.href = "home_login.html";

function savedata(e) {
    e.preventDefault();
    let name = document.getElementById('t1').value.trim();
    let email = document.getElementById('t2').value.trim();
    let password = document.getElementById('t3').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if (user_records.some(v => v.email === email)) {
        alert("This Email is already used");
        return;
    } else if (user_records.some(v => v.name === name)) {
        alert("This name is already used");
        return;
    }

    user_records.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(user_records));

    alert("Registration successful");

    // Clear inputs
    document.getElementById('registerForm').reset();

    // Switch to login form
    wrapper.classList.remove('active');
}

function loginsave(e) {
    e.preventDefault();
    let email = document.getElementById('t4').value.trim();
    let password = document.getElementById('t5').value;

     let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if (user_records.some(v => v.email === email && v.password === password)) {
        alert("Login Successful");

        // Clear inputs
        document.getElementById('loginForm').reset();

        // Redirect to home page
        window.location.href = "home.html";
    } else {
        alert("Login Failed: Incorrect email or password");
    }
}
window.addEventListener("DOMContentLoaded", function () {
    wrapper.classList.add("active-popup");
});