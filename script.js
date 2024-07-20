const body = document.querySelector("body");
const btn = document.getElementById("switch");
const icon = btn.querySelector("i");

let isToggled  = false;

btn.addEventListener('click', (e) => {

    e.preventDefault();

    isToggled = !isToggled;
    body.style.setProperty("--valueBg", isToggled ? "#1f1f1f" : "#f3eded");
    body.style.setProperty("--valueText", isToggled ? "#f3eded" : "#1f1f1f");
    
    icon.classList.toggle("bi-sunset", !isToggled);
    icon.classList.toggle("bi-sunrise-fill", isToggled);
    
});