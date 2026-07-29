"use strict";


const siteHeader = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");
const currentYear = document.getElementById("current-year");
const navigationLinks = document.querySelectorAll(".navigation-list a");


/* ================= CURRENT YEAR ================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ================= HEADER SCROLL EFFECT ================= */

function updateHeader() {
    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 40) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}

updateHeader();

window.addEventListener("scroll", updateHeader);


/* ================= MOBILE NAVIGATION ================= */

function closeNavigation() {
    if (!menuToggle || !mainNavigation) {
        return;
    }

    menuToggle.classList.remove("active");
    mainNavigation.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
}


if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", () => {

        const navigationIsOpen =
            mainNavigation.classList.toggle("open");

        menuToggle.classList.toggle(
            "active",
            navigationIsOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            navigationIsOpen.toString()
        );

        document.body.classList.toggle(
            "menu-open",
            navigationIsOpen
        );

    });

}


navigationLinks.forEach((link) => {

    link.addEventListener("click", closeNavigation);

});


/* ================= CLOSE MENU WITH ESCAPE ================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeNavigation();
    }

});