export class StoryProductCollection {
    constructor(el) {
        this.el = el
        this.eventListeners = {}
        this.slider = null
    }

    subscribeEvent(event, listener) {
        this.eventListeners[event] = listener
    }

    init() {
        if ('init' in this.eventListeners) {
            this.eventListeners.init()
        }

        for (const event in this.eventListeners) {
            if (Object.hasOwnProperty.call(this.eventListeners, event)) {
                this.el.addEventListener(event, this.eventListeners[event])
            }
        }
    }

    open() {
        this.el.classList.add('sitestories-story-product-card_active')
    }

    close() {
        this.el.classList.remove('sitestories-story-product-card_active')
    }

    setSlider(slider) {
        this.slider = slider
    }

    initSlider(params) {
        this.slider.init(params)
    }

    destroy() {
        if ('destroy' in this.eventListeners) {
            this.eventListeners.destroy()
        }

        for (const event in this.eventListeners) {
            if (Object.hasOwnProperty.call(this.eventListeners, event)) {
                this.el.removeEventListener(event, this.eventListeners[event], false)
            }
        }
        this.slider.destroy()
        this.eventListeners = {}
    }
}