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
