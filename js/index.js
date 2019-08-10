// ***one***
let navHeader = document.querySelector(".nav-container");

navHeader.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = "yellow";

    setTimeout(function() {
        event.target.style.backgroundColor = "";
        }, 1000);
});

// ***two***
let navAnchorsArray = Array.from(document.getElementsByClassName("nav-link"));

navAnchorsArray.forEach(n => n.addEventListener("mouseover", event => {
    event.target.style.border = "3px solid green";
    event.target.style.padding = "5px 10px";

    setTimeout(function() {
        event.target.backgroundColor = "";
        event.target.style.border = "";
        event.target.style.padding = "";
    }, 1000);
}));

// ***three***
let paragraphs = Array.from(document.getElementsByTagName("p"));

paragraphs.forEach(n => n.addEventListener("click", event => {
    event.target.classList.toggle("paragraphcolor");
}));

// ***four***