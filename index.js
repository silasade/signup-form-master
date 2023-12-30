// Typing Animation
const textContainer = document.getElementById("text-container");
const textToType = "See how experienced developers solve problems in real time. \n Watching scripted turorials is great but understanding how developers think is invaluable.";
let index = 0;

function typeText() {
    textContainer.textContent = textToType.slice(0, index);
    index++;

    if (index <= textToType.length) {
        setTimeout(typeText, 100); // Adjust the typing speed (e.g., 100 milliseconds)
    } else {
        // Reset the animation when it reaches the end
        index = 0;
        setTimeout(typeText, 1000); // Delay before starting the animation again (e.g., 1 second)
    }
}

// Form Event Handling
function handleInputValidation(element, errorElement, iconElement) {
    element.addEventListener("input", function () {
        if (element.value.length > 0) {
            element.style.borderColor = "green";
            document.getElementById(errorElement).innerText = "";
            document.getElementsByClassName(iconElement)[0].style.visibility = "hidden";
        }
    });
}

function setupInputHandlers() {
    const elements = [
       
        { id: "firstname", error: "first-error", icon: "first" },
        { id: "lastname", error: "last-error", icon: "last" },
        { id: "email", error: "email-error", icon: "email" },
        
        { id: "password", error: "password-error", icon: "password" },
     
    ];

    elements.forEach(element => handleInputValidation(document.getElementById(element.id), element.error, element.icon));
}

// Form Validation
function validator() {
    const elements = [
       
        { id: "firstname", error: "first-error", icon: "first" },
        { id: "lastname", error: "last-error", icon: "last" },
        { id: "email", error: "email-error", icon: "email" },
        { id: "password", error: "password-error", icon: "password" }
    ];

    for (const element of elements) {
        const inputElement = document.getElementById(element.id);
        if (inputElement.value.length < 1) {
            inputElement.style.borderColor = "red";
            document.getElementById(element.error).innerText = `Enter your ${element.id.charAt(0).toUpperCase() + element.id.slice(1)}`;
            document.getElementsByClassName(element.icon)[0].style.visibility = "visible";
            return false;
        }
    }
    
    return true;
}

// Start the typing animation
typeText();

// Setup input event handlers
setupInputHandlers();
