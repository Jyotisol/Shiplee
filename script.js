// Scroll-to-Top Button Functionality
const scrollTopButton = document.getElementById('scroll-to-top');

// Show the button when scrolled down more than 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block'; // Show the button
    } else {
        scrollTopButton.style.display = 'none'; // Hide the button when scrolled to the top
    }
});

// Smooth scroll to the top when the button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Dark Mode Toggle Functionality
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '30px';
darkModeToggle.style.right = '48px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = '#00d2ff';
darkModeToggle.style.color = '#fffff';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
});


// Lazy Loading for Images (Optional)
const images = document.querySelectorAll('img.lazy-load');
images.forEach(image => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.removeAttribute('data-src');
});

// Dark Mode Styling in CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }

    .dark-mode .hero-section {
        background-image: url('image1-dark.jpg'); /* Optional dark version of the hero image */
    }

    .dark-mode .cta-button {
        background: linear-gradient(90deg, #444, #888);
        color: white; /* Change button text color */
    }

    .dark-mode h1, .dark-mode h2, .dark-mode h3, .dark-mode p {
        /* Change text color in headings and paragraphs */
    }
`;
document.head.appendChild(styleSheet);



document.addEventListener("DOMContentLoaded", () => {
    // Select the form and add an event listener for form submission
    const form = document.querySelector(".form-container form");

    form.addEventListener("submit", (event) => {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Capture the input values
        const name = document.getElementById("name").value;
        const contact = document.getElementById("contact").value;

        // Print the values to the console
        console.log("Form Data:");
        console.log("Name:", name);
        console.log("Contact No.: +91", contact);

        // Optional: You can also clear the form after submission
        form.reset();
    });
});
