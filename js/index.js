let navHeader = document.querySelector(".nav-container");

navHeader.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "yellow";

    setTimeout(function() {
        event.target.style.backgroundColor = "";
        }, 1000);
});