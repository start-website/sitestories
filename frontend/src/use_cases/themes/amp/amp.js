// Core
import {
    saveViewStoriesGroup,
    updateStatePreview,
    Modal,
    StoryFacade,
} from '../../../core/core'

// Adapters
import { SliderSwiperAdapter } from '../../../adapters/sliders/sliders'

// Use cases
import { PreviewsThemeBusinessLogic } from './previewsThemeBusinessLogic'
import { StoryThemeBusinessLogic } from './storyThemeBusinessLogic'

// Libs
const fslightbox = require('fslightbox')

export default class Amp {
    constructor(params) {
        this.storiesEl = params.storiesEl
        this.storiesId = this.storiesEl.getAttribute('id')
        this.isMobile = this.storiesEl.getAttribute('data-device') === 'mobile'
        this.lang = this.storiesEl.getAttribute('data-lang') ? this.storiesEl.getAttribute('data-lang') : 'en'
        this.style = this.storiesEl.getAttribute('data-style')
        this.previewsEl = this.storiesEl.querySelector('.sitestories__previews')
        this.previewlistElems = this.previewsEl.querySelectorAll('.sitestories__preview')
        this.modalEl = this.storiesEl.querySelector('.sitestories__modal')
        this.modal = new Modal(this.modalEl)
        // this.modalBackground = new ModalBackground(this.modalEl)
        //this.iconCloseElems = this.modalEl.querySelectorAll('.sitestories__modal-close')
        // this.sliderGroupStories = null
        this.sliderPreviews = null
        this.story = null
        this.isPlaying = null
        this.isSoundOn = null
        this.isInit = null

        this.init()
    }

    init() {
        const self = this

        this.modal.subscribeEvent('close', function () {
            self.destroy()
        })

        this.previewsInit()
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
                saveViewStoriesGroup(self.storiesId, groupId)
                updateStatePreview(previewEl, self.storiesId, groupId)
                self.modal.open()
                self.createStories(i)
            })
        }

        this.previewsEl.style.opacity = ''
    }

    createStories(previewIndex) {
        const self = this
        // this.loadCSS('https://cdn.ampproject.org/amp-story-player-v0.css')
        // this.loadScript("https://cdn.ampproject.org/v0.js")
        //     .then(function(script2) { return self.loadScript("https://cdn.ampproject.org/v0/amp-story-player-0.1.js") })
        //     .then(function(script2) { return self.loadScript("https://cdn.ampproject.org/amp-story-player-v0.js", [
        //         {
        //             name: 'custom-element',
        //             value: 'amp-story-player'
        //         }
        //     ]) })
        //     .then(function(script2) {
        //         const ampStoryPlayer = document.createElement('amp-story-player')
        //         ampStoryPlayer.setAttribute('layout', 'fill')
        //         // ampStoryPlayer.setAttribute('width', '360')
        //         // ampStoryPlayer.setAttribute('height', '600')

        //         const script = document.createElement('script')
        //         script.setAttribute('type', 'application/json')
        //         const params = {
        //             "behavior": {
        //                 "autoplay": false,
        //                 "pageScroll": false
        //             },
        //             "controls": [{
        //                 "name": "close",
        //                 "position": "start"
        //             }]
        //         }
        //         script.innerHTML = JSON.stringify(params)
        //         ampStoryPlayer.append(script)

        //         for (let i = 0; i < self.previewlistElems.length; i++) {
        //             const previewEl = self.previewlistElems[i]
        //             const a = document.createElement('a')
        //             a.setAttribute('href', previewEl.getAttribute('data-link'))
        //             ampStoryPlayer.append(a)
        //         }

        //         self.modalEl.append(ampStoryPlayer)

        //         const controlPlayer = new AmpStoryPlayer(window, ampStoryPlayer)
        //         controlPlayer.load()
        //         let currentGroupStories

        //         if (controlPlayer.isReady) {
        //             currentGroupStories = controlPlayer.getStories()[previewIndex]
        //             controlPlayer.show(currentGroupStories.href)
        //             //controlPlayer.rewind()
        //             controlPlayer.play()
        //         } else {
        //             controlPlayer.addEventListener('ready', function () {
        //                 currentGroupStories = controlPlayer.getStories()[previewIndex]
        //                 controlPlayer.show(currentGroupStories.href)
        //                 //controlPlayer.rewind()
        //                 controlPlayer.play()
        //             })
        //         }

        //         controlPlayer.addEventListener('amp-story-player-close', function () {
        //             controlPlayer.pause()
        //             self.modal.close()

        //             setTimeout(function () {
        //                 const ampStoryPlayerEl = self.storiesEl.querySelector('amp-story-player')
        //                 ampStoryPlayerEl.parentNode.removeChild(ampStoryPlayerEl)

        //                 const scripts = document.querySelectorAll('#sitestories-js-amp')
        //                 const links = document.querySelectorAll('#sitestories-css-amp')

        //                 for (let i = 0; i < scripts.length; i++) {
        //                     const script = scripts[i]
        //                     document.head.removeChild(script)
        //                 }

        //                 for (let i = 0; i < links.length; i++) {
        //                     const link = links[i]
        //                     document.head.removeChild(link)
        //                 }
        //             }, 350)
        //         })
        //     })

        // var l = new URL(window.location.href);
        // l.searchParams.set("wpstory", 'sdfsdf'),
        // history.pushState({}, null, l)

        const ampStoryPlayer = document.createElement('amp-story-player')
        ampStoryPlayer.setAttribute('layout', 'fill')
        ampStoryPlayer.setAttribute('width', '360')
        ampStoryPlayer.setAttribute('height', '600')
        //ampStoryPlayer.setAttribute('amp-cache', 'cdn.ampproject.org')

        ampStoryPlayer.style.width = '100%'
        ampStoryPlayer.style.height = '100%'

        const script = document.createElement('script')
        script.setAttribute('type', 'application/json')
        const params = {
            "behavior": {
                "autoplay": false,
                "pageScroll": false
            },
            "controls": [{
                "name": "close",
                "position": "start"
            }]
        }
        script.innerHTML = JSON.stringify(params)
        ampStoryPlayer.append(script)

        for (let i = 0; i < self.previewlistElems.length; i++) {
            const previewEl = self.previewlistElems[i]
            const a = document.createElement('a')
            a.setAttribute('href', previewEl.getAttribute('data-link'))
            ampStoryPlayer.append(a)
        }

        self.modalEl.append(ampStoryPlayer)

        const controlPlayer = new AmpStoryPlayer(window, ampStoryPlayer)
        controlPlayer.load()
        let currentGroupStories

        if (controlPlayer.isReady) {
            currentGroupStories = controlPlayer.getStories()[previewIndex]
            controlPlayer.show(currentGroupStories.href)
            //controlPlayer.rewind()
            controlPlayer.play()
        } else {
            controlPlayer.addEventListener('ready', function () {
                currentGroupStories = controlPlayer.getStories()[previewIndex]
                controlPlayer.show(currentGroupStories.href)
                //controlPlayer.rewind()
                controlPlayer.play()
            })
        }

        controlPlayer.addEventListener('amp-story-player-close', function () {
            controlPlayer.pause()
            self.modal.close()

            setTimeout(function () {
                const ampStoryPlayerEl = self.storiesEl.querySelector('amp-story-player')
                ampStoryPlayerEl.parentNode.removeChild(ampStoryPlayerEl)

                const scripts = document.querySelectorAll('#sitestories-js-amp')
                const links = document.querySelectorAll('#sitestories-css-amp')

                for (let i = 0; i < scripts.length; i++) {
                    const script = scripts[i]
                    document.head.removeChild(script)
                }

                for (let i = 0; i < links.length; i++) {
                    const link = links[i]
                    document.head.removeChild(link)
                }

                // var t = new URL(window.location.href);
                // t.searchParams.delete("wpstory"),
                // history.pushState({}, null, t)
            }, 350)
        })
    }

    loadCSS(href, attrs) {
        return new Promise(function (resolve, reject) {
            const link = document.createElement('link')
            link.setAttribute('href', href)
            link.setAttribute('id', 'sitestories-css-amp')
            link.setAttribute('rel', 'stylesheet')
            link.setAttribute('type', 'text/css')

            if (attrs) {
                for (let i = 0; i < attrs.length; i++) {
                    const obj = attrs[i]
                    link.setAttribute(obj.name, obj.value)
                }
            }

            link.onload = function () {
                return resolve(link)
            }
            link.onerror = function () {
                return reject(new Error('Error loading: ' + src))
            }

            document.head.append(link)
        })
    }

    loadScript(src, attrs) {
        return new Promise(function (resolve, reject) {
            const script = document.createElement('script')
            script.setAttribute('src', src)
            script.setAttribute('id', 'sitestories-js-amp')

            if (attrs) {
                for (let i = 0; i < attrs.length; i++) {
                    const obj = attrs[i]
                    script.setAttribute(obj.name, obj.value)
                }
            }

            script.onload = function () {
                return resolve(script)
            }
            script.onerror = function () {
                return reject(new Error('Error loading: ' + src))
            }

            document.head.append(script)
        })
    }

    loadScripts() {
        return new Promise(function (resolve, reject) {
            const script = document.createElement('script')
            const src = 'https://cdn.ampproject.org/v0.js'
            script.src = src


            script.onload = function (event) {
                return resolve(script)
            }
            script.onerror = function () {
                return console.error('[Sitestories] error loading: ' + src)
            }
        })
            .then(function (script) {
                document.head.append(script)
            })
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
        if (this.story) {
            this.story.destroy()

            this.story = null
            this.isPlaying = null
            this.isSoundOn = null
            this.isInit = null
        }
    }
}