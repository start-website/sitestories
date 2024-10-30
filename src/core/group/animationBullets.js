export class AnimationBullets {
    static #instance = null

    constructor() {
        this.intervalFunc = ''
        this.distance = 0
    }

    getInstance() {
        if (AnimationBullets.#instance === null) {
            AnimationBullets.#instance = this
        }

        return AnimationBullets.#instance
    }

    start(el, timeMS) {
        return this._startAnimation(el, timeMS, 0)
    }

    resume(el, timeMS) {
        return this._startAnimation(el, timeMS, this.distance)
    }

    stop(el) {
        clearInterval(this.intervalFunc)
        el.style.transform = "scaleX(" + this.distance + ")"
    }

    reset() {
        this.distance = 0
        clearInterval(this.intervalFunc)
    }

    updateState(bullets, slideActiveIndex) {
        for (let bulletIndex = 0; bulletIndex < bullets.length; bulletIndex++) {
            const bulletAnimEl = bullets[bulletIndex].querySelector('.sitestories-story-pagination__bullet_anim')

            if (bulletIndex >= slideActiveIndex) {
                bulletAnimEl.style.transform = "scaleX(0)"
            } else {
                bulletAnimEl.style.transform = "scaleX(1)"
            }
        }
    }

    destroy() {
        this.reset()
        AnimationBullets.#instance = null
    }

    _startAnimation(el, timeMS, distance) {
        clearInterval(this.intervalFunc)
        this.distance = distance
        const timeSEC = timeMS / 1000
        const self = this

        return new Promise((resolve) => {
            const intervalFunc = setInterval(() => {
                self.distance += 1 / (100 * timeSEC)
                el.style.transform = "scaleX(" + self.distance + ")"

                if (self.distance >= 1) {
                    resolve()
                    clearInterval(intervalFunc)
                }
            }, 10)

            this.intervalFunc = intervalFunc
        })
    }
}