window.addEventListener("scroll", function () {
    var fadeInSections = document.querySelectorAll(".fade-in-section");
    for (var i = 0; i < fadeInSections.length; i++) {
        var section = fadeInSections[i];
        var positionFromTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (positionFromTop - windowHeight <= 0) {
            section.classList.add("fade-in");
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var sidebarToggle = document.getElementById("sidebar-toggle");
    var sidebar = document.getElementById("sidebar");
    var body = document.querySelector("body");

    sidebarToggle.addEventListener("click", function (event) {
        event.preventDefault();
        sidebar.classList.toggle("active");
    });
    body.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
