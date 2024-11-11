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

function myfunction(){
    let btn = document.body;
    if(btn.style.backgroundColor === 'black'){
      btn.style.backgroundColor = 'white';
      btn.style.color = 'black'
    }else{
      btn.style.backgroundColor = 'black'
      btn.style.color = 'white'
    }
  }


// Lazy Loading for Images (Optional)
const images = document.querySelectorAll('img.lazy-load');
images.forEach(image => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.removeAttribute('data-src');
});





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
