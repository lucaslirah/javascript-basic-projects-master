// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


// select elements
const navToggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// add event listener to toggle nav links on click
navToggleBtn.addEventListener("click", function () {
    links.classList.toggle("show-links");
});