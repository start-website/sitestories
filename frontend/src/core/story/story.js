export class Story {
    constructor(params) {
        this.wrapper = params.wrapper
        this.el = this.wrapper.querySelector('.sitestories-story')
        this.type = this.el.getAttribute('data-type')
        this.bullets = params.bullets
        this.slideActiveIndex = params.slideActiveIndex
        this.activeBullet = params.activeBullet
        this.eventListeners = {}
        this.typeStory = this.getTypeStory()
        this.srcMedia = this.getSrcMedia()
        this.speedAutoplayMS = this.wrapper.getAttribute('data-speed')
        this.bulletAnimEl = this.activeBullet.querySelector('.sitestories-story-pagination__bullet_anim')
    }

    active() {
        /* Event: active */
        if ('active' in this.eventListeners) this.eventListeners.active(this)
    }

    reset() {
        /* Event: reset */
        if ('reset' in this.eventListeners) this.eventListeners.reset(this)
    }

    subscribeEvent(event, listener) {
        this.eventListeners[event] = listener
    }

    getSrcMedia() {
        const media = this.el.querySelector('#story-media')
        return media.children[0].src
    }

    getTypeStory() {
        const media = this.el.querySelector('#story-media')

        if (media.getAttribute('data-type')) {
            return media.getAttribute('data-type')
        }

        switch (media.children[0].nodeName) {
            case 'IMG':
                return 'img'
            case 'VIDEO':
                return 'video'
            default:
                console.log('[sitestories]: unknown media node name' + media.children[0].nodeName)
        }

    }

    activeAnimate() {
        const animElems = this.el.querySelectorAll('[data-anim]')

        for (let i = 0; i < animElems.length; i++) {
            const animEl = animElems[i]
            const anim = animEl.getAttribute('data-anim')
            animEl.className += ' ' + anim          
        }
    }

    resetAnimate() {
        const animElems = this.el.querySelectorAll('[data-anim]')

        for (let i = 0; i < animElems.length; i++) {
            const animEl = animElems[i]
            const anim = animEl.getAttribute('data-anim')
            const re = new RegExp(' ' + anim, 'gi')
            animEl.className = animEl.className.replace(re, '')        
        }
    }
}