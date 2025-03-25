document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the navbar
    fetch("/NavBarAndSiteBehaviors/navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
            disableCurrentPageLink(); 
        });

    function disableCurrentPageLink() {
        let currentPage = window.location.pathname.replace(/\/$/, "").split("/").pop() || "index.html"; 
        currentPage = currentPage.split('?')[0].split('#')[0]; 

        document.querySelectorAll("#navbar-container nav ul li a").forEach(link => {
            let linkPage = link.getAttribute("href").replace(/\/$/, "").split("/").pop();
            linkPage = linkPage.split('?')[0].split('#')[0]; 

            if (linkPage === currentPage) {
                link.classList.add("current-page");
                link.removeAttribute("href"); 
                link.style.pointerEvents = "none"; 
                link.style.color = "gray"; 
                // link.style.textDecoration = "none"; 
                link.style.fontWeight = "bold"; 
            }
        });
    }
});
