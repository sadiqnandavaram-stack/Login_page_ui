// ================= LOGIN FORM JAVASCRIPT =================


// Select Login Form

const loginForm = document.querySelector(".login form");


// Listen when user submits the form

loginForm.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();


    // Get username value

    const username = loginForm.querySelector(
        'input[type="text"]'
    ).value.trim();


    // Get password value

    const password = loginForm.querySelector(
        'input[type="password"]'
    ).value.trim();


    // Check username

    if (username === "") {

        alert("Please enter your username!");

        return;

    }


    // Check password

    if (password === "") {

        alert("Please enter your password!");

        return;

    }


    // Password minimum length

    if (password.length < 6) {

        alert("Password must contain at least 6 characters!");

        return;

    }


    // Login success

    alert("Login successful! Welcome, " + username);


    // Reset form

    loginForm.reset();

});


// ================= SIGN UP LINK =================


const registerLink = document.querySelector(".registerlink");


registerLink.addEventListener("click", function (event) {

    // Prevent link from opening another page

    event.preventDefault();


    // Temporary message

    alert("Register page will open here!");

});