const gallery = document.querySelector('.projects-gallery');
let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 2;
    gallery.scrollLeft = scrollAmount;
    if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
        scrollAmount = 0;
    }
}, 30);
