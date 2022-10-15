// Creating functionality for about section. To switch between about tabs
let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

// Function to trigger tab opening in about section
function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

let sideMenu = document.querySelector("#sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}

function closemenu() {
    sideMenu.style.right = "-200px";
}


// Google sheet contact 
