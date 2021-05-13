function elm(id) {
    return document.getElementById(id);
}

function addEventToId(id, func, eventName = 'click') {
    elm(id).addEventListener(eventName, func);
}

function toggleClass(id, className) {
    elm(id).classList.toggle(className);
}


addEventToId('menu-button', function() {
    //open menu
    elm('menu').classList.toggle('menu-closed');    
})


function openFindPetSubMenu() {
    // elm('find-a-pet-dropdown').classList.toggle()
    toggleClass('find-a-pet-dropdown', 'menu-opened');
}

addEventToId('find-a-pet-dropdown-button', function() {
    openFindPetSubMenu()
})

addEventToId('find-a-pet-submenu-close-button', openFindPetSubMenu);