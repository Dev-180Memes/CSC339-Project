let hidden = true
let nav = document.querySelector(".nav")

const handleNavClick = () => {
    if (hidden === true) {
        nav.style.display = "flex"
        hidden = false
    } else {
        nav.style.display = "none"
        hidden = true
    }
};

const handleBodyClick = () => {
    nav.style.display = "none"
    hidden = true
}

let navLogo = document.getElementById("navLogo")

navLogo.addEventListener("click", handleNavClick);