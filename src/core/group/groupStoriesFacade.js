import { GroupStories } from './groupStories'
import { AnimationBullets } from './animationBullets'
import { StatesIconsPlay } from './statesIconsPlay'
import { StatesSoundIcons } from './statesSoundIcons'
import { GroupControlsElems } from './groupControlsElems'


export class GroupStoriesFacade {
    constructor(groupEl) {
        this.control = new GroupStories(groupEl)
        this.animationBullets = new AnimationBullets(groupEl)
        this.statesIconsPlay = new StatesIconsPlay(groupEl)
        this.statesSoundIcons = new StatesSoundIcons(groupEl)
        this.controlsElems = new GroupControlsElems(groupEl)
    }

    getControl() {
        return this.control
    }

    getAnimBullets() {
        return this.animationBullets
    }

    getStatesIconsPlay() {
        return this.statesIconsPlay
    }

    getStatesSoundIcons() {
        return this.statesSoundIcons
    }

    getControlsElems() {
        return this.controlsElems
    }

    destroy() {
        this.control.destroy()
        this.animationBullets.destroy()

        this.control = null
        this.animationBullets = null
        this.statesIconsPlay = null
        this.statesSoundIcons = null
        this.controlsElems = null
    }
}