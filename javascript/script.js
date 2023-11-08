<script>
    // Get the current page URL
    const currentPageURL = window.location.href;

    // Check if the current page URL matches the URL of the "Membership" page
    if (currentPageURL.includes('index.html')) {
        // If it's the membership page, make the navigation header darker
        const navigationHeader = document.getElementById('navigation-header');
        navigationHeader.classList.add('darker-navigation-header');
    }

    document.getElementById("emailForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const confirmationText = document.getElementById("confirmation");

        if (isValidEmail(emailInput.value)) {
            confirmationText.textContent = "Thank you! Your email has been submitted.";
            emailInput.value = "";
        } else {
            confirmationText.textContent = "Please enter a valid email address.";
        }
    });

    function isValidEmail(email) {
        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
</script>