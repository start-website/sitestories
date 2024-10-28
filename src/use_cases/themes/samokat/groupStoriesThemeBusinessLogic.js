export class GroupStoriesThemeBusinessLogic {
    constructor(theme) {
        this.theme = theme
    }

    eventClick(e) {
        const self = this

        if (e.target.closest('.sitestories-story-play[data-state="play"]')) {
            window.requestAnimationFrame(function() {
                window.requestAnimationFrame(function() {
                    self.theme.sliderStory.autoplayStart()
                    self.theme.groupStories.getStatesIconsPlay().play()
                    self.theme.isPlaying = true 
                })
            })
        }

        if (e.target.closest('.sitestories-story-play[data-state="pause"]')) {
            this.theme.sliderStory.autoplayStop()
            this.theme.groupStories.getStatesIconsPlay().pause()
            this.theme.isPlaying = false
        }

        if (e.target.closest('.sitestories-story-sound[data-state="disable"]')) {
            window.requestAnimationFrame(function() {
                window.requestAnimationFrame(function() {
                    self.theme.story.videoManager.enableSound()
                    self.theme.groupStories.getStatesSoundIcons().enable()
                    self.theme.isSoundOn = true
                })
            })
        }

        if (e.target.closest('.sitestories-story-sound[data-state="enable"]')) {
            this.theme.story.videoManager.disableSound()
            this.theme.groupStories.getStatesSoundIcons().disable()
            this.theme.isSoundOn = false
        }
    }

    eventMouseout(e) {
        this.theme.groupStories.getControlsElems().show()
    }
}