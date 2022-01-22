$(document).ready(function() {
    window.addEventListener('scroll', () => {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    })

    const browseNav = document.getElementsByClassName('browse-nav-button');
    var lastActive = browseNav[0];
    lastActive.classList.toggle('active');
    for (item of browseNav) {
        item.addEventListener('click', (e) => {
            lastActive.classList.toggle('active');
            e.target.classList.toggle('active');
            lastActive = e.target;
            console.log(e.target)
        })
    }
})