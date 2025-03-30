const professions = [
  "Vaishnavi Borse",
  "UI/UX Designer",
  "Engineer",
  "Designer",
  "Freelancer",
];
let index = 0;
setInterval(() => {
  const professionElement = document.querySelector("#profession");
  professionElement.textContent = professions[index];
  index = (index + 1) % professions.length;
}, 1000);


document.querySelector("#Contact").addEventListener("click", () => {
  const contactDiv = document.querySelector("#cont");
  contactDiv.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#about").addEventListener("click", () => {
  const contactDiv = document.querySelector("#myimg");
  contactDiv.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#Projects").addEventListener("click", () => {
  const contactDiv = document.querySelector("#project");
  contactDiv.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#home").addEventListener("click", () => {
  const contactDiv = document.querySelector(".navbar");
  contactDiv.scrollIntoView({ behavior: "smooth" });
});