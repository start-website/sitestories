// Core
import { 
    saveViewStoriesGroup, 
    updateStatePreview, 
    Modal,
    ModalBackground,
    GroupStoriesFacade,
    StoryFacade,
} from '../../../core/core'

// Adapters
import { SliderSwiperAdapter } from '../../../adapters/sliders/sliders'

// Use cases
import { PreviewsThemeBusinessLogic } from './previewsThemeBusinessLogic'
import { SliderGroupStoriesThemeBusinessLogic } from './sliderGroupStoriesThemeBusinessLogic'
import { GroupStoriesThemeBusinessLogic } from './groupStoriesThemeBusinessLogic'
import { StorySliderThemeBusinessLogic } from './storySliderThemeBusinessLogic'
import { StoryThemeBusinessLogic } from './storyThemeBusinessLogic'
import { NavigationThemeBusinessLogic } from './navigationThemeBusinessLogic'

// Libs
const fslightbox = require('fslightbox')

export default class Vk {
    constructor(params) {
        this.storiesEl = params.storiesEl
        this.storiesId = this.storiesEl.getAttribute('id')
        this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile'
        this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en'
        this.previewsEl = this.storiesEl.querySelector('.sitestories__previews')
        this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview')
        this.modalEl = this.storiesEl.querySelector('.sitestories__modal')
        this.modal = new Modal(this.modalEl)
        this.modalBackground = new ModalBackground(this.modalEl)
        this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close')
        this.sliderGroupStories = null
        this.sliderPreviews = null
        this.groupStories = null
        this.sliderStory = null
        this.story = null
        this.navigation = null
        this.isPlaying = null
        this.isSoundOn = null
        this.isInit = null

        this.init()
    }

    init() {
        const self = this

        this.modal.subscribeEvent('close', function() {
            self.destroy()
        })

        for (let i = 0; i < this.iconCloseElems.length; i++) {
            const iconClose = this.iconCloseElems[i]
            iconClose.addEventListener('click', this.modalClose.bind(this), false)
        }

        this.previewsInit()
    }

    modalClose() {
        this.modal.close()
    }

    previewsInit() {
        const self = this

        this.sliderPreviews = new SliderSwiperAdapter()
        const previewsThemeBusinessLogic = new PreviewsThemeBusinessLogic(this)
        const paramsSliderPreviews = previewsThemeBusinessLogic.getParamsSlider()
        this.sliderPreviews.init(paramsSliderPreviews)

        for (let i = 0; i < this.previewlistElems.length; i++) {
            const previewEl = this.previewlistElems[i]
            const groupId = previewEl.getAttribute('data-group')
            updateStatePreview(previewEl, this.storiesId, groupId)

            previewEl.addEventListener('click', function () {
                self.modal.open()
                self.initSliderGroupStories(i)
            })
        }

        this.previewsEl.style.opacity = ''
    }

    initSliderGroupStories(indexGroup) {
        const sliderGroupStoriesThemeBusinessLogic = new SliderGroupStoriesThemeBusinessLogic(this)
        const paramsSliderGroupStories = sliderGroupStoriesThemeBusinessLogic.getParamsSlider(indexGroup)
        this.sliderGroupStories = new SliderSwiperAdapter()

        this.sliderGroupStories.subscribeEvent('slideChange', function () {
            sliderGroupStoriesThemeBusinessLogic.eventSlideChange()
        })

        this.sliderGroupStories.subscribeEvent('pointerdown', function (e) {
            sliderGroupStoriesThemeBusinessLogic.eventPointerdown(e)
        })

        this.sliderGroupStories.subscribeEvent('pointerup', function (e) {
            sliderGroupStoriesThemeBusinessLogic.eventPointerup(e)
        })
        
        function iOS() {
            return [
              'iPad Simulator',
              'iPhone Simulator',
              'iPod Simulator',
              'iPad',
              'iPhone',
              'iPod'
            ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        }

        if (iOS) {
            paramsSliderGroupStories.effect = 'slide'
        }

        this.sliderGroupStories.init(paramsSliderGroupStories)
        this.initGroupStories()
    }

    initGroupStories() {
        const previewEl = this.previewlistElems[this.sliderGroupStories.activeIndex]
        const groupId = previewEl.getAttribute('data-group')
        saveViewStoriesGroup(this.storiesId, groupId)
        updateStatePreview(previewEl, this.storiesId, groupId)

        const groupStoriesThemeBusinessLogic = new GroupStoriesThemeBusinessLogic(this)
        const activeSlide = this.sliderGroupStories.activeSlide
        const groupEl = activeSlide.querySelector('.sitestories-group-stories')
        this.groupStories = new GroupStoriesFacade(groupEl)

        this.groupStories.getControl().subscribeEvent('click', function (e) {
            groupStoriesThemeBusinessLogic.eventClick(e)
        })

        this.groupStories.getControl().subscribeEvent('mouseout', function (e) {
            groupStoriesThemeBusinessLogic.eventMouseout(e)
        })

        this.groupStories.getControl().init()
        this.initStorySlider()
    }

    initStorySlider() {
        this.sliderStory = new SliderSwiperAdapter()
        const storySliderThemeBusinessLogic = new StorySliderThemeBusinessLogic(this)
        const paramsSliderStory = storySliderThemeBusinessLogic.getParamsSlider()

        this.sliderStory.subscribeEvent('autoplayStop', function () {
            storySliderThemeBusinessLogic.eventAutoplayStop()
        })

        this.sliderStory.subscribeEvent('autoplayStart', function () {
            storySliderThemeBusinessLogic.eventAutoplayStart()
        })

        this.sliderStory.subscribeEvent('autoplayResume', function () {
            storySliderThemeBusinessLogic.eventAutoplayResume()
        })

        this.sliderStory.subscribeEvent('autoplayPause', function () {
            storySliderThemeBusinessLogic.eventAutoplayPause()
        })

        this.sliderStory.subscribeEvent('slideChange', function () {
            storySliderThemeBusinessLogic.eventSlideChange()
        })

        this.sliderStory.init(paramsSliderStory)
        this.navigation = new NavigationThemeBusinessLogic(this)
        this.initStory()
    }

    initStory() {
        this.story = new StoryFacade({
            wrapper: this.sliderStory.activeSlide,
            bullets: this.sliderStory.bullets,
            slideActiveIndex: this.sliderStory.activeIndex,
            activeBullet: this.sliderStory.activeBullet
        })

        const storyThemeBusinessLogic = new StoryThemeBusinessLogic(this)

        this.story.control.subscribeEvent('active', function (storyControl) {
            storyThemeBusinessLogic.eventActive(storyControl)
        })

        if (this.story.control.type === 'product') {
            storyThemeBusinessLogic.typeProduct()
        }

        if (this.story.control.type === 'product-collection') {
            storyThemeBusinessLogic.typeProductCollection()
        }

        if (this.story.control.type === 'product-list') {
            storyThemeBusinessLogic.typeProductList()
        }

        this.story.control.subscribeEvent('reset', function (story) {
            storyThemeBusinessLogic.eventReset()
        })

        this.story.control.active()
        this.isInit = true
    }

    destroy() {
        if (this.sliderGroupStories) {
            this.story.destroy()
            this.sliderStory.destroy()
            this.groupStories.destroy()
            this.sliderGroupStories.destroy()
            
            this.sliderGroupStories = null
            this.groupStories = null
            this.sliderStory = null
            this.story = null
            this.navigation = null
            this.isPlaying = null
            this.isSoundOn = null
            this.isInit = null
        }

        for (let i = 0; i < this.iconCloseElems.length; i++) {
            const iconClose = this.iconCloseElems[i]
            iconClose.removeEventListener('click', this.modalClose.bind(this), false)
        }
    }
}