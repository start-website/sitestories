export class StoryProduct {
    constructor(el) {
        this.el = el
        this.action = this.el.getAttribute('data-action')
        this.eventListeners = {}
        this.sliderImages = null
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

    setSliderImages(slider) {
        this.sliderImages = slider
    }

    initSliderImages(params) {
        this.sliderImages.init(params)
    }

    destroy() {
        for (const event in this.eventListeners) {
            if (Object.hasOwnProperty.call(this.eventListeners, event)) {
                this.el.removeEventListener(event, this.eventListeners[event], false)
            }
        }

        if (this.sliderImages) this.sliderImages.destroy()
        this.eventListeners = {}
    }
}