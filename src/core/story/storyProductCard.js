export class StoryProductCard {
    constructor(el) {
        this.el = el
        this.type = this.el.getAttribute('data-type')
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

    setState(state) {
        this.el.setAttribute('data-state', state)    
    }

    setSlider(slider) {
        this.slider = slider
    }

    initSlider(params) {
        this.slider.init(params)
    }

    destroy() {
        for (const event in this.eventListeners) {
            if (Object.hasOwnProperty.call(this.eventListeners, event)) {
                this.el.removeEventListener(event, this.eventListeners[event], false)
            }
        }

        this.setState('hide')
        this.eventListeners = {}

        if (this.slider !== null) {
            this.slider.destroy()
        }
    }
}