import { Story } from './story'
import { StoryVideoManager } from './storyVideoManager'
import { StoryProduct } from './storyProduct'
import { StoryProductCollection } from './storyProductCollection'
import { StoryTimePassed } from './storyTimePassed'
import { StoryProductCard } from './storyProductCard'
import { StoryProductPreview } from './storyProductPreview'

export class StoryFacade {
    constructor(params) {
        this.storyEl = params.wrapper.querySelector('.sitestories-story')
        this.control = new Story(params)
        this.videoManager = new StoryVideoManager(this.storyEl)
        this.product = null
        this.productCard = null
        this.productCollection = null
        this.productPreview = null
        this.timePassed = null
        this.eventListeners = {}
    }

    subscribeEvent(event, listener) {
        this.eventListeners[event] = listener
    }

    setProduct(el) {
        this.product = new StoryProduct(el)
    }

    setProductCollection(el) {
        this.productCollection = new StoryProductCollection(el)
    }
    
    setProductPreview(el) {
        this.productPreview = new StoryProductPreview(el)
    }

    setTimePassed(groupEl, lang) {
        this.timePassed = new StoryTimePassed(groupEl, this.storyEl, lang)
    }

    setProductCard(el) {
        this.productCard = new StoryProductCard(el)
    }

    destroy() {
        if ('destroy' in this.eventListeners) {
            this.eventListeners.destroy()
        }

        this.control.reset()

        if (this.product !== null) {
            this.product.destroy()
        }

        if (this.productCard !== null) {
            this.productCard.destroy()
        }

        if (this.productCollection !== null) {
            this.productCollection.destroy()
        }

        if (this.productPreview !== null) {
            this.productPreview.destroy()
        }

        this.eventListeners = {}
    }
}