// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent successfully.`);
                form.reset();
            } else {
                alert("Please fill out all fields before submitting the form.");
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (link.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 20,
                        behavior: "smooth",
                    });
                }
            }
        });
    });
});
