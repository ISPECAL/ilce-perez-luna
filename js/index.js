// Footer
const footer = document.querySelector("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.textContent = `© ${thisYear} Ilce Perez. All rights reserved.`;
footer.appendChild(copyright);

// Ensure skills list before beign appended
const skills = ["JavaScript", "Python", "CSS", "HTML"];
const skillsListElem = document.querySelector("#Skills ul");


if (skillsListElem) {
    skills.forEach((skill) => {
        let skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsListElem.appendChild(skillItem);
    });
}


// Name image hover for name title//

const ilceimg = document.getElementById("Ilce_img");

ilceimg.onmouseover = function () {

    ilceimg.src = "images_redes/ilce2.png"
};

ilceimg.onmouseout = function () {

    ilceimg.src = "images_redes/Add a heading.png"
}

// Name image hover for GITHUB /////need to fix eye delay//

const github_img = document.getElementById("Github_logo1");

github_img.onmouseover = function () {

    github_img.src = "images_redes/Github_eyes.png"

};

github_img.onmouseout = function () {

    github_img.src = "images_redes/Github_logo.png"
}




///Message textbox

// Wait function using Promises
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Handle form submission asynchronously
document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.forms["0"];

    console.log(messageForm)

    messageForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        console.log("Processing message...");

        // Simulated delay for async behavior
        await delay(500);

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log("Name:", usersName);
        console.log("Email:", usersEmail);
        console.log("Message:", usersMessage);

        const messageSection = document.getElementById("tMessages");
        const messageList = messageSection.querySelector("ul");

        const newMessage = document.createElement("li");

        const userLink = document.createElement("a");
        userLink.href = `mailto:${usersEmail}`;
        userLink.textContent = usersName;

        const messageSpan = document.createElement("span");
        messageSpan.textContent = `: ${usersMessage}`;

        newMessage.appendChild(userLink);
        newMessage.appendChild(messageSpan);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", async function () {
            console.log("Removing message...");
            await delay(300); // Simulated async delay before removal
            removeButton.parentNode.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });
});