// Function to generate a random character
function randomCharacter() {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Create a matrix code character element with flag colors
function createMatrixCharacter() {
    const character = document.createElement("span");
    character.innerText = randomCharacter();
    character.style.position = "absolute";
    character.style.top = "0";
    character.style.left = Math.floor(Math.random() * 100) + "vw";
    character.style.opacity = Math.random();
    character.style.transform = "translateY(0)";
    character.style.transition = "transform 1s ease, opacity 0.5s ease";

    // Flashing colors animation
    setInterval(() => {
        const flagColors = ["#00247d", "#ffffff", "#cf142b"];
        const randomColor = flagColors[Math.floor(Math.random() * flagColors.length)];
        character.style.textShadow = `0 0 10px ${randomColor}`;
    }, 200); // Flash every 200 milliseconds

    setTimeout(() => {
        character.style.transform = "translateY(100vh)";
        character.style.opacity = "0";
    }, Math.random() * 3000);

    return character;
}

// Create and append matrix characters to the container
function createMatrixText() {
    const container = document.querySelector(".matrix-background");
    const text = document.createElement("div");

    for (let i = 0; i < 100; i++) {
        text.appendChild(createMatrixCharacter());
    }

    container.appendChild(text);
}

// Start the matrix animation
createMatrixText();

// Animate the background colors in the United Kingdom flag pattern
const flagColors = ["#00247d", "#ffffff", "#cf142b"];
let flagColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = flagColors[flagColorIndex];
    flagColorIndex = (flagColorIndex + 1) % flagColors.length;
}

setInterval(changeBackgroundColor, 500); // Change colors every 99900000 milliseconds
