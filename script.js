
// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Explore Karnataka!");
});

// Destination Search
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".place-card");

searchInput.addEventListener("input", function () {

    let searchValue = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        let placeName = card.innerText.toLowerCase();

        if (placeName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the details!");

    } else {

        document.getElementById("formMessage").innerHTML =
            "Thank you " + name + "! Your message has been received.";

        contactForm.reset();

    }

});

// Gallery Image Popup
const images = document.querySelectorAll(".gallery img");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "9999";

        const bigImage = document.createElement("img");

        bigImage.src = image.src;
        bigImage.style.maxWidth = "85%";
        bigImage.style.maxHeight = "85%";
        bigImage.style.borderRadius = "12px";

        popup.appendChild(bigImage);
        document.body.appendChild(popup);

        popup.addEventListener("click", function () {
            popup.remove();
        });

    });

});

// Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("Explore Karnataka Website Loaded Successfully!");
