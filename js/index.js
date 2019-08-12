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
let colors = ["red", "blue", "green", "orange", "purple", "black"]
let heading1 = document.querySelector("header h2");

heading1.addEventListener("wheel", () => {
    heading1.style.color = colors[Math.floor(Math.random() * colors.length)];
});

// ***five***
let bgColors = ["red", "blue", "green", "orange", "purple", "white"]
let webBG = document.querySelector("body");

webBG.addEventListener("keydown", () => {
    webBG.style.background = bgColors[Math.floor(Math.random() * bgColors.length)];
});

// ***six***
window.addEventListener("load", event => {
    alert("Welcome to our website! Press any key to change the background.");
});

// ***seven***
let images = Array.from(document.getElementsByTagName("img"));

images.forEach(n => n.addEventListener("dblclick", (event) => {
    event.target.src = "https://rand.cat/pic";
}));

// ***eight***
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.forEach(n => n.addEventListener("dblclick", () => {
    // event.preventDefault();
    window.alert("Button has been pressed");
}));

// ***nine***
let newParagraph = document.createElement("p");
let destination = document.querySelector(".destination");

buttons.forEach(n => n.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.textContent = "Not Available";
}));

// ***ten***
buttons.addEventListener("cut", event => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});