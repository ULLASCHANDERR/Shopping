document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".header .navbar");

  
    menuBtn.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
    document.addEventListener("click", function(event) {
        const isMenu = event.target.closest(".header .navbar");
        const isMenuBtn = event.target.closest("#menu-btn");
        
        if (!isMenu && !isMenuBtn) {
            navbar.classList.remove("active");
        }
    });
});

    function goToSection(section) {
        var sections = document.querySelectorAll('section'); // Get all sections
        var searchTerm = section.toLowerCase(); // Convert section name to lowercase for comparison

        sections.forEach(function(sec) {
            var id = sec.getAttribute('id'); // Get the id of each section
            if (id === searchTerm) {
                // If the id matches the search term, scroll to that section
                sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }