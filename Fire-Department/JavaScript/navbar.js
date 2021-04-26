var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');


function openMenu(event) {
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    event.stopImmediatePropagation();
}

function closeMenu(event) {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
    }
}
navButton.addEventListener('click', openMenu, false);

window.addEventListener('click', closeMenu, false);