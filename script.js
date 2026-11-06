
// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Explore Karnataka!");
});

// Destination Search
const searchInput = document.getElementById("searchInput");
const destinations = document.querySelectorAll(".destination-card");

searchInput.addEventListener("input", function () {

    let value = searchInput.value.toLowerCase();

    destinations.forEach(function (place) {

        let name = place.innerText.toLowerCase();

        if (name.includes(value)) {
            place.style.display = "block";
        } else {
            place.style.display = "none";
        }

    });

});

// Gallery Image Popup
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        const popup = document.createElement("div");
        popup.className = "image-popup";

        const bigImage = document.createElement("img");
        bigImage.src = image.src;
        bigImage.alt = image.alt;

        popup.appendChild(bigImage);
        document.body.appendChild(popup);

        popup.addEventListener("click", function () {
            popup.remove();
        });

    });

});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the details!");

    } else {

        document.getElementById("formMessage").innerText =
            "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();

    }

});

// Destination Card Animation
const cards = document.querySelectorAll(".destination-card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        card.style.cursor = "pointer";
    });

});

// Smooth Scroll
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.style.color = "#ddd";
        });

        link.style.color = "#d5ad62";

    });

});

console.log("Explore Karnataka is ready!");
