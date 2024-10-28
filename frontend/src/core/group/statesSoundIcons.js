export class StatesSoundIcons {
    static #instance = null
    static #isSoundOn = null

    constructor(wrapperIcons) {
        this.wrapperIcons = wrapperIcons
        this.soundBLockEl = this.wrapperIcons.querySelector('.sitestories-story-sound')
    }

    getInstance() {
        if (StatesSoundIcons.#instance === null) {
            StatesSoundIcons.#instance = this
        }

        return StatesSoundIcons.#instance
    }

    enable() {
        this.soundBLockEl.setAttribute('data-state', 'enable')
        StatesSoundIcons.#isSoundOn = true
    }

    disable() {
        this.soundBLockEl.setAttribute('data-state', 'disable')
        StatesSoundIcons.#isSoundOn = false
    }

    isSoundOn() {
        return StatesSoundIcons.#isSoundOn
    }

    destroy() {
        StatesSoundIcons.#instance = null
    }
}