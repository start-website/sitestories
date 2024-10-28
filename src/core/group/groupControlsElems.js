export class GroupControlsElems {
    static #instance = null

    constructor(wrapperControlsElems) {
        this.wrapperControlsElems = wrapperControlsElems
        this.elems = this.wrapperControlsElems.querySelectorAll('.sitestories-control-elem')
    }

    getInstance() {
        if (GroupControlsElems.#instance === null) {
            GroupControlsElems.#instance = this
        }

        return GroupControlsElems.#instance
    }

    show() {
        for (let i = 0; i < this.elems.length; i++) {
            const elem = this.elems[i]
            elem.classList.remove('sitestories-control-elem_hide')
        }
    }

    hide() {
        for (let i = 0; i < this.elems.length; i++) {
            const elem = this.elems[i]
            elem.classList.add('sitestories-control-elem_hide')
        }
    }

    reset() {
        for (let i = 0; i < this.elems.length; i++) {
            const elem = this.elems[i]
            elem.style.transition = 'none'
            elem.classList.remove('sitestories-control-elem_hide')

            setTimeout(function () {
                elem.style.transition = ''
            }, 1)
        }
    }

    destroy() {
        GroupControlsElems.#instance = null
    }
}