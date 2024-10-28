export class NavigationThemeBusinessLogic {
    constructor(theme) {
        this.theme = theme
        this.isLastStory = false
    }

    next() {
        if (this.theme.sliderStory.isEnd) {
            this.theme.sliderGroupStories.slideNext()
        } else {
            this.theme.sliderStory.slideNext()
        }

        if (this.isLastStory) {
            this.theme.modal.close()
        } 

        if (this.theme.sliderGroupStories.isEnd) {
            if (this.theme.sliderStory.isEnd) {
                this.isLastStory = true
            }
        }
    }

    prev() {
        this.isLastStory = false
        
        if (this.theme.sliderStory.isBeginning) {
            this.theme.sliderGroupStories.slidePrev()
        } else {
            this.theme.sliderStory.slidePrev()
        }
    }

    destroy() {
        this.theme = null
    }
}