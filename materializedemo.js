// JavaScript animations
document.addEventListener('DOMContentLoaded', function () {
    // Auto Init
    M.AutoInit();

    // Example Click Event Handler
    document.querySelector('#myButton').addEventListener('click', function () {
        // Your custom logic here when the button is clicked
        alert('Button clicked!');
    });

    // Example Custom Animation
    const myElement = document.querySelector('.custom-element');
    myElement.addEventListener('mouseover', function () {
        // Add your custom animation or style changes here
        myElement.style.backgroundColor = 'lightblue';
    });

    // RGB Flow Animation
    const rgbFlowElements = document.querySelectorAll('.rgb-flow');
    rgbFlowElements.forEach((element, index) => {
        element.style.animation = `rgbFlowAnimation 2s ease-in-out ${index * 0.2}s infinite alternate`;
    });

    // Additional JavaScript and animations can be added here
});

// Add more custom JavaScript animations here

// RGB Flow Animation Keyframes
const rgbFlowAnimation = `
    0% {
        border-color: rgb(255, 0, 0);
    }
    25% {
        border-color: rgb(0, 255, 0);
    }
    50% {
        border-color: rgb(0, 0, 255);
    }
    75% {
        border-color: rgb(255, 255, 0);
    }
    100% {
        border-color: rgb(255, 0, 255);
    }
`;
