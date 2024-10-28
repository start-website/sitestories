export class StatesIconsPlay {
    static #instance = null
    static #isPlaying = null

    constructor(wrapperIcons) {
        this.wrapperIcons = wrapperIcons
        this.playBLockEl = this.wrapperIcons.querySelector('.sitestories-story-play')
    }

    getInstance() {
        if (StatesIconsPlay.#instance === null) {
            StatesIconsPlay.#instance = this
        }

        return StatesIconsPlay.#instance
    }

    play() {
        this.playBLockEl.setAttribute('data-state', 'pause')
        // const iconPlay = this.wrapperIcons.querySelector('.sitestories-story-play__icon')
        // const iconPause = this.wrapperIcons.querySelector('.sitestories-story-pause__icon')
        // iconPlay.classList.remove('sitestories-story-play__icon_show')
        // iconPause.classList.add('sitestories-story-pause__icon_show')
        StatesIconsPlay.#isPlaying = true
    }

    pause() {
        this.playBLockEl.setAttribute('data-state', 'play')
        // const iconPlay = this.wrapperIcons.querySelector('.sitestories-story-play__icon')
        // const iconPause = this.wrapperIcons.querySelector('.sitestories-story-pause__icon')
        // iconPlay.classList.add('sitestories-story-play__icon_show')
        // iconPause.classList.remove('sitestories-story-pause__icon_show')
        StatesIconsPlay.#isPlaying = false
    }

    isPlaying() {
        return StatesIconsPlay.#isPlaying
    }

    destroy() {
        StatesIconsPlay.#instance = null
    }
}
