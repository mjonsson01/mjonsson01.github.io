document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the navbar
    fetch("/NavBarAndSiteBehaviors/navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
            disableCurrentPageLink(); // Call function after navbar loads
        });

    function disableCurrentPageLink() {
        let currentPage = window.location.pathname.replace(/\/$/, "").split("/").pop() || "index.html"; // Normalize path

        document.querySelectorAll("#navbar-container nav ul li a").forEach(link => {
            let linkPage = link.getAttribute("href").replace(/\/$/, "").split("/").pop();

            if (linkPage === currentPage) {
                link.classList.add("current-page");
                link.removeAttribute("href"); // Disable link
                link.style.pointerEvents = "none"; // Block clicking
                link.style.color = "gray"; // Optional styling
            }
        });
    }
});
