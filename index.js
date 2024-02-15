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
