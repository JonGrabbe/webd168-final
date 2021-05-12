document.getElementById('menu-button').addEventListener('click', function(e) {
    //opens header menu
    document.getElementById('menu').classList.toggle('menu-opened');
    //change button image
    let isOpen = document.getElementById('menu').classList.contains('menu-opened');
    console.log(isOpen);
    const buttonImg = '<img src="images/close.svg"/>';
    const openMenu = '<img src="images/menu.svg"/>';
    if(isOpen) {
        e.currentTarget.innerHTML = buttonImg;
    } else {
        e.currentTarget.innerHTML = openMenu;
    }
})