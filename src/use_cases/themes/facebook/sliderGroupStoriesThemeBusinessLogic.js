export class SliderGroupStoriesThemeBusinessLogic {
    constructor(theme) {
        this.theme = theme
    }

    eventSlideChange() {
        if (this.theme.isInit) {
            this.theme.story.destroy()
            this.theme.sliderStory.destroy()
            this.theme.groupStories.getControlsElems().hide()
            this.theme.groupStories.destroy()
            this.theme.story = null
            this.theme.sliderStory = null
            this.theme.initGroupStories()

            if (this.theme.isPlaying === false) {
                this.theme.sliderStory.autoplayStop()
                this.theme.groupStories.getStatesIconsPlay().pause()
            }
        }
    }

    eventPointerdown(e) {
        const self = this

        if (!e.target.closest('.sitestories-story-content-product-link__product-images') &&
            !e.target.closest('.sitestories-group-stories__header') &&
            !e.target.closest('.sitestories-story-product-card') &&
            !e.target.closest('.sitestories-story-product__button-box') &&
            !e.target.closest('.sitestories-story-product-card__close') &&
            !e.target.closest('.sitestories-story-product__product-images') &&
            !e.target.closest('.sitestories-product-list__product-preview') &&
            !e.target.closest('.sitestories-product-collection__product-preview')
            ) {
                this.theme.groupStories.getControl().timeoutTouchStart = setTimeout(function () {
                    self.theme.sliderStory.autoplayStop()
                    self.theme.groupStories.getControlsElems().hide()
                }, 150)
        
                this.theme.groupStories.getControl().timeTouchStart = new Date().valueOf()
            }
    }

    eventPointerup(e) {
        clearTimeout(this.theme.groupStories.getControl().timeoutTouchStart)
        this.theme.groupStories.getControl().timeTouchEnd = new Date().valueOf()
        const timeTouchMS = this.theme.groupStories.getControl().timeTouchEnd - this.theme.groupStories.getControl().timeTouchStart
        const clientX = this.theme.isMobile ? e.changedTouches[0].clientX : e.clientX

        if (timeTouchMS < 150) {
            const halfWidthWindow = window.innerWidth / 2

            if ((clientX) > halfWidthWindow) {
                this.theme.navigation.next()
            }

            if ((clientX) < halfWidthWindow) {
                this.theme.navigation.prev()
            }

        } else {
            if (this.theme.isPlaying || this.theme.isPlaying === null) {
                this.theme.sliderStory.autoplayStart()
            } 

            this.theme.groupStories.getControlsElems().show()
        }
    }

    getParamsSlider(indexGroup) {
        return {
            el: this.theme.modalEl.querySelector('#slider-groups'),
            containerModifierClass: 'sitestories-slider-groups_',
            wrapperClass: 'sitestories-slider-groups__wrapper',
            slideClass: 'sitestories-slider-groups__slide',
            slideActiveClass: 'sitestories-slider-groups__slide_active',
            slideNextClass: 'sitestories-slider-groups__slide_next',
            slidePrevClass: 'sitestories-slider-groups__slide_prev',
            slideFullyVisibleClass: 'sitestories-slider-groups__slide-fully-visible',
            slideVisibleClass: 'sitestories-slider-groups__slide-visible',
            slidesPerView: 'auto',
            effect: this.theme.isMobile ? 'cube' : 'slide',
            simulateTouch: true,
            allowTouchMove: this.theme.isMobile ? true : false,
            spaceBetween: 0,
            centeredSlides: true,
            slideToClickedSlide: false,
            initialSlide: indexGroup,
        }
    }
}