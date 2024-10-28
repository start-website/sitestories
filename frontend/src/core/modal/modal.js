export class Modal {
    constructor(modalEl) {
        this.el = modalEl
        this.eventListeners = {}
    }

    open() {
        const self = this
        document.body.classList.add('sitestories_no-scroll')

        this.el.classList.add('sitestories__modal_start-open')

        window.requestAnimationFrame(function() {
            window.requestAnimationFrame(function() {
                self.el.classList.remove('sitestories__modal_start-open')
                self.el.classList.add('sitestories__modal_open')
            })
        })
    }

    close() {
        const self = this
        
        this.el.classList.add('sitestories__modal_start-close')

        window.requestAnimationFrame(function() {
            window.requestAnimationFrame(function() {
                self.el.classList.remove('sitestories__modal_start-close')
                self.el.classList.remove('sitestories__modal_open')
                self.el.classList.add('sitestories__modal_close')
            })
        })

        function handler(e) {
            self.el.classList.remove('sitestories__modal_close')
            document.body.classList.remove('sitestories_no-scroll')

            /* Event: close */
            if ('close' in self.eventListeners) self.eventListeners.close()

            self.el.removeEventListener('transitionend', handler)
        }

        this.el.addEventListener('transitionend', handler)
    }

    subscribeEvent(event, listener) {
        this.eventListeners[event] = listener
    }
}