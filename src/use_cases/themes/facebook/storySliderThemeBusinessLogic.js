export class StorySliderThemeBusinessLogic {
    constructor(theme) {
        this.theme = theme
    }

    eventAutoplayStop() {
        if (this.theme.story) {
            this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl)
            this.theme.groupStories.getControlsElems().show()
            this.theme.modalBackground.pauseVideo()
            this.theme.story.videoManager.pause()
        }
    }

    eventAutoplayStart() {
        const self = this

        if (this.theme.story) {
            if (this.theme.groupStories.getAnimBullets().distance >= 1) {
                this.theme.navigation.next()
            } else {
                this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
                    self.theme.story.videoManager.pause()
                    self.theme.modalBackground.pauseVideo()
                    self.theme.navigation.next()
                })
            }

            this.theme.groupStories.getControlsElems().show()
            this.theme.story.videoManager.play()
            this.theme.modalBackground.playVideo()
        }
    }

    eventAutoplayResume() {
        const self = this

        if (this.theme.story) {
            if (this.theme.groupStories.getAnimBullets().distance >= 1) {
                this.theme.navigation.next()
            } else {
                this.theme.groupStories.getAnimBullets().resume(this.theme.story.control.bulletAnimEl, this.theme.story.control.speedAutoplayMS).then(function () {
                    self.theme.story.videoManager.pause()
                    self.theme.modalBackground.pauseVideo()
                    self.theme.navigation.next()
                })
            }

            this.theme.groupStories.getControlsElems().show()
            this.theme.story.videoManager.play()
            this.theme.modalBackground.playVideo()
        }
    }

    eventAutoplayPause() {
        if (this.theme.story) {
            this.theme.groupStories.getAnimBullets().stop(this.theme.story.control.bulletAnimEl)
            this.theme.groupStories.getControlsElems().show()
            this.theme.modalBackground.pauseVideo()
            this.theme.story.videoManager.pause()
        }
    }

    eventSlideChange() {
        this.theme.story.destroy()
        this.theme.groupStories.getAnimBullets().reset()
        this.theme.initStory()

        if (this.theme.isSoundOn) {
            this.theme.story.videoManager.enableSound()
        } else {
            this.theme.story.videoManager.disableSound()
        }

        this.theme.groupStories.getAnimBullets().updateState(this.theme.sliderStory.bullets, this.theme.sliderStory.activeIndex)
    }

    getParamsSlider() {
        return {
            el: this.theme.groupStories.getControl().el.querySelector('.sitestories-slider-story'),
            containerModifierClass: 'sitestories-slider-story_',
            wrapperClass: 'sitestories-slider-story__wrapper',
            slideClass: 'sitestories-slider-story__slide',
            slideActiveClass: 'sitestories-slider-story__slide_active',
            slideNextClass: 'sitestories-slider-story__slide_next',
            slidePrevClass: 'sitestories-slider-story__slide_prev',
            bulletClass: 'sitestories-story-pagination__bullet',
            slidesPerView: 1,
            pagination: {
                el: this.theme.groupStories.getControl().el.querySelector('.sitestories-story-pagination')
            },
            //autoplay: {},
            //nested: false,
            effect: 'fade',
            simulateTouch: false,
            allowTouchMove: true,
            spaceBetween: 0,
            centeredSlides: false,
            slideToClickedSlide: false,
            initialSlide: 0
        }
    }
}