export class ModalBackground {
    static #instance = null

    constructor(modal) {
        this.modalEl = modal
        this.video = this.modalEl.querySelector('.sitestories__modal-overlay-video')
    }

    getInstance() {
        if (ModalBackground.#instance === null) {
            ModalBackground.#instance = this
        }

        return ModalBackground.#instance
    }

    setBackground(src, type) {
        const videoModalOverlay = this.modalEl.querySelector('.sitestories__modal-overlay-video')
        const imgModalOverlay = this.modalEl.querySelector('.sitestories__modal-overlay-img')
        imgModalOverlay.classList.remove('sitestories__modal-overlay-img_active')
        videoModalOverlay.classList.remove('sitestories__modal-overlay-video_active')

        switch (type) {
            case 'img':
                imgModalOverlay.src = src
                imgModalOverlay.classList.add('sitestories__modal-overlay-img_active')
                imgModalOverlay.classList.remove('sitestories__modal-overlay-img_anim')

                window.requestAnimationFrame(function () {
                    window.requestAnimationFrame(function () {
                        imgModalOverlay.classList.add('sitestories__modal-overlay-img_anim')
                    })
                })
                break;
            case 'video':
                const isPlaying = videoModalOverlay.currentTime > 0 && !videoModalOverlay.paused && !videoModalOverlay.ended && videoModalOverlay.readyState > videoModalOverlay.HAVE_CURRENT_DATA

                if (!isPlaying) {
                    videoModalOverlay.src = src
                    videoModalOverlay.classList.add('sitestories__modal-overlay-video_active')
                    videoModalOverlay.classList.remove('sitestories__modal-overlay-video_anim')

                    window.requestAnimationFrame(function () {
                        window.requestAnimationFrame(function () {
                            videoModalOverlay.classList.add('sitestories__modal-overlay-video_anim')
                        })
                    })
                }
                
                break;
            default:
                console.log('[sitestories]: Unknown type story' + type)
                break;
        }
    }

    playVideo() {
        const isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA

        if (!isPlaying) {
            this.video.play()
        }
    }

    pauseVideo() {
        const isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > this.video.HAVE_CURRENT_DATA

        if (isPlaying) {
            this.video.pause()
        }
    }

    reset() {
        this.pauseVideo()
        this.video.currentTime = 0
    }
}