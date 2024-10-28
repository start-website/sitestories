export class StoryVideoManager {
    static #instance = null

    constructor(story) {
        this.el = story
        this.video = this.el.querySelector('.sitestories-story__video')
    }

    getInstance() {
        if (StoryVideoManager.#instance === null) {
            StoryVideoManager.#instance = this
        }

        return StoryVideoManager.#instance
    }

    play() {
        if (!this.video) return

        const isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA

        if (!isPlaying) {
            this.video.play()
        }
    }

    pause() {
        if (!this.video) return

        const isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA

        if (isPlaying) {
            this.video.pause()
        }
    }

    enableSound() {
        if (!this.video) return

        this.video.muted = false
    }

    disableSound() {
        if (!this.video) return

        this.video.muted = true
    }

    reset() {
        if (this.video) {
            this.pause()
            this.video.currentTime = 0
        }
    }
}