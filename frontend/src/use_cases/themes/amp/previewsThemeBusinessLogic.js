export class PreviewsThemeBusinessLogic {
    constructor(theme) {
        this.theme = theme
    }

    getParamsSlider() {
        const spaceBetweenPreviews = this.theme.previewsEl.getAttribute('data-space-between') ? this.theme.previewsEl.getAttribute('data-space-between') : 10

        return {
            el: this.theme.previewsEl.querySelector('#previews-slider'),
            containerModifierClass: 'sitestories-previews-slider_',
            wrapperClass: 'sitestories-previews-slider__wrapper',
            slideClass: 'sitestories-previews-slider__slide',
            slideActiveClass: 'sitestories-previews-slider__slide_active',
            slideNextClass: 'sitestories-previews-slider__slide_next',
            slidePrevClass: 'sitestories-previews-slider__slide_prev',
            slidesPerView: 'auto',
            effect: 'slide',
            simulateTouch: true,
            allowTouchMove: true,
            spaceBetween: spaceBetweenPreviews,
            centeredSlides: false,
            slideToClickedSlide: true,
            initialSlide: 0,
            navigation: {
                nextEl: '.sitestories-previews-slider__button-nav_next',
                prevEl: '.sitestories-previews-slider__button-nav_prev',
                disabledClass: 'sitestories-previews-slider__button-nav_disabled'
            },
            direction: this.theme.style === 'whatsapp' ? 'vertical' : 'horizontal',
        }
    }
}