export class GroupStories {
    constructor(groupEl) {
        this.el = groupEl
        this.eventListeners = {}
        this.timeoutTouchStart = null
        this.timeTouchStart = 0
        this.timeTouchEnd = 0

        //this.el.prototype = this
    }

    init() {
        for (const event in this.eventListeners) {
            if (Object.hasOwnProperty.call(this.eventListeners, event)) {
                this.el.addEventListener(event, this.eventListeners[event])
            }
        }
    }

    subscribeEvent(event, listener) {
        this.eventListeners[event] = listener
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