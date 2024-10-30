export class StoryProductPreview {
    constructor(el) {
        this.el = el
        this.type = this.el.getAttribute('data-type')
        this.eventListeners = {}
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

    destroy() {
        for (const event in this.eventListeners) {
            if (Object.hasOwnProperty.call(this.eventListeners, event)) {
                this.el.removeEventListener(event, this.eventListeners[event], false)
            }
        }

        this.eventListeners = {}
    }
}