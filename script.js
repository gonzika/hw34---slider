var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    centeredSlides: true,
    grabCursor: true,

    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }

});
swiper.on('slideChange', function () {
    changeActiveSlide()
});

changeActiveSlide()
function changeActiveSlide() {
    visible = document.querySelectorAll('.swiper-slide-visible')
    len = visible.length
    for (let i = 0; i < len; i++) {
        visible[i].classList.remove('swiper-slide-last')
        if (i == len - 1) {
            visible[i].classList.add('swiper-slide-last')
        }
    }
}