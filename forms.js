// forms.js - Script to validate and handle form submission

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Clear placeholder text when the user focuses on a field
    form.addEventListener("focusin", (event) => {
        event.target.placeholder = "";
    });

    // Form submission and validation
    form.addEventListener("submit", function(event) {
        let valid = true;
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");

        // Validation checks
        if (!nameField.value) {
            alert("Please enter your name.");
            valid = false;
        } else if (!emailField.value) {
            alert("Please enter your email.");
            valid = false;
        } else if (!messageField.value) {
            alert("Please enter a message.");
            valid = false;
        }

        // If not valid, prevent form submission
        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            successMessage.style.display = "block"; // Show success message
        }
    });
});
