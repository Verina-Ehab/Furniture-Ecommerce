//____________________________.....NAVBAR.....____________________________//

// Select all the links in the navbar
const navbarLinks = document.querySelectorAll('#navbar a');

// Function to set the active class on the clicked link
function setActiveClass(clickedLink) {
    // Remove the 'active' class from all links
    navbarLinks.forEach((link) => link.classList.remove('active'));
    
    // Add the 'active' class to the clicked link
    clickedLink.classList.add('active');
}
// Loop through all navbar links
navbarLinks.forEach((link) => {
    link.addEventListener('click', function () {
        // event.preventDefault();  // Uncomment this line if you want to prevent page navigation
        setActiveClass(this);
    });
});
// Initial setup: Add 'active' class to the link matching the current page
const currentPage = window.location.href.split('/').pop(); // Get the current page (e.g., index.html)
navbarLinks.forEach((link) => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
    }
});

//____________________________.....NAVBAR.....____________________________//
