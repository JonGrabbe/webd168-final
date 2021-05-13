//back to top button
if(scrollY === 0) {
    document.getElementById('back-to-top-btn').setAttribute('style', 'display: none');
}

//scroll
window.onscroll = function() {
    if(scrollY > 0) {
        document.getElementById('back-to-top-btn').removeAttribute('style');
    }
    if(scrollY === 0) {
        document.getElementById('back-to-top-btn').setAttribute('style', 'display: none');
    }
}