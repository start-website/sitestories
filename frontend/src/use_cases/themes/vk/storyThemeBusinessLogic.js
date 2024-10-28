import { SliderSwiperAdapter } from '../../../adapters/sliders/sliders'
import ColorThief from '../../../../node_modules/colorthief/dist/color-thief.mjs'
const colorThief = new ColorThief()

export class StoryThemeBusinessLogic {
    constructor(theme) {
        this.theme = theme
    }

    typeProduct() {
        const self = this
        const productEl = this.theme.story.control.el.querySelector('#story-product')
        this.theme.story.setProduct(productEl)
        this.theme.story.product.subscribeEvent('init', function () {
            const img = self.theme.story.product.el.querySelector('.sitestories-slider-product-images__image')

            if (img.complete) {
                const imgMainColorArr = colorThief.getColor(img)
                self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')'
            } else {
                img.addEventListener('load', function () {
                    const imgMainColorArr = colorThief.getColor(img)
                    self.theme.story.control.el.style.background = 'rgba(' + imgMainColorArr[0] + ',' + imgMainColorArr[1] + ',' + imgMainColorArr[2] + ',' + '0.5' + ')'
                })
            }
        })

        if (this.theme.story.product.action === 'go-to-link') {
            this._typeProductActionLink()
        }

        if (this.theme.story.product.action === 'open-product-card') {
            this._typeProductActionCard()
        }
        
        this.theme.story.product.init()
    }

    _typeProductActionLink() {
        const self = this
        this.theme.story.product.subscribeEvent('click', function (e) {
            const halfWidthWindow = window.innerWidth / 2

            if (self.theme.story.product.sliderImages) {
                if ((e.clientX) > halfWidthWindow) {
                    self.theme.story.product.sliderImages.slideNext()
                } else {
                    self.theme.story.product.sliderImages.slidePrev()
                }
            }

            if (e.target.closest('.sitestories-story-product__button-box')) {
                self.theme.sliderStory.autoplayStop()
                self.theme.groupStories.getStatesIconsPlay().pause()
                self.theme.isPlaying = false
            }
        })

        const sliderProductImagesEl = this.theme.story.product.el.querySelector('.sitestories-slider-product-images')
        const sliderProductImagesParams = {
            el: sliderProductImagesEl,
            slideToClickedSlide: false,
            containerModifierClass: 'sitestories-slider-product-images_',
            wrapperClass: 'sitestories-slider-product-images__wrapper',
            slideClass: 'sitestories-slider-product-images__slide',
            slideActiveClass: 'sitestories-slider-product-images__slide_active',
            slideNextClass: 'sitestories-slider-product-images__slide_next',
            slidePrevClass: 'sitestories-slider-product-images__slide_prev',
            bulletClass: 'sitestories-slider-product-images__bullet',
            slidesPerView: 1,
            effect: 'fade',
            spaceBetween: 15,
            simulateTouch: true,
            allowTouchMove: true,
            initialSlide: 0,
            pagination: {
                el: sliderProductImagesEl.querySelector('.sitestories-slider-product-images__pagination')
            },
        }

        this.theme.story.product.setSliderImages(new SliderSwiperAdapter())
        this.theme.story.product.initSliderImages(sliderProductImagesParams)
    }

    _typeProductActionCard() {
        const self = this
        const productCardEl = this.theme.story.control.el.querySelector('#product-card')
        this.theme.story.setProductCard(productCardEl)
        this.theme.story.productCard.setSlider(new SliderSwiperAdapter())

        this.theme.story.product.subscribeEvent('click', function (e) {
            if (e.target.closest('.sitestories-story-product__button')) {
                e.preventDefault()
            }
        })
                
        this.theme.story.product.subscribeEvent('pointerup', function (e) {
            // Open card
            if (e.target.closest('.sitestories-story-product__button-box')) {
                e.preventDefault()
                self.theme.story.productCard.setState('card')
                self.theme.sliderStory.autoplayStop()
                self.theme.groupStories.getStatesIconsPlay().pause()
                self.theme.isPlaying = false
                self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened')
                self.theme.sliderGroupStories.disable()
                self.theme.sliderStory.disable()
            }

            // Go to checkout
            if (e.target.closest('.sitestories-story-product-card__response-button-checkout')) {
                const link = e.target.getAttribute('data-link') ? e.target.getAttribute('data-link') : '#no-link'
                window.location.href = link
            }
        })

        this.theme.story.productCard.subscribeEvent('click', function(e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {    
                self.theme.story.productCard.setState('hide')
                self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened')
                self.theme.sliderGroupStories.enable()
                self.theme.sliderStory.enable()
            }
        })

        this.theme.story.subscribeEvent('destroy', function() {
            self.theme.story.productCard.setState('hide')
            self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened')
        })

        const paramsSliderProductCard = this.getParamsSliderProductCard()
        paramsSliderProductCard.el = this.theme.story.control.el.querySelector('.sitestories-story-product-card__slider')
        this.theme.story.productCard.init()
        this.theme.story.productCard.initSlider(paramsSliderProductCard)
    }

    typeProductCollection() {
        const self = this
        const productCollectionEl = this.theme.story.control.el.querySelector('#product-collection')
        this.theme.story.setProductCollection(productCollectionEl)
        const sliderParams = this.getParamsSliderProductCollection()
        this.theme.story.productCollection.setSlider(new SliderSwiperAdapter())
        this.theme.story.productCollection.initSlider(sliderParams)
        const previewEl = this.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview')
        this.theme.story.setProductPreview(previewEl)

        this.theme.story.productCollection.slider.subscribeEvent('pointerdown', function () {
            self.theme.sliderGroupStories.disable()
            self.theme.sliderStory.disable()
        })

        this.theme.story.productCollection.slider.subscribeEvent('pointerup', function () {
            self.theme.sliderGroupStories.enable()
            self.theme.sliderStory.enable()
        })

        if (this.theme.story.productPreview.type === 'card') {
            this._typeProductCollectionCard()
        }

        if (this.theme.story.productPreview.type === 'link') {
            this._typeProductCollectionLink()
        }

        this.theme.story.productCollection.slider.subscribeEvent('slideChange', function (e) {
            self.theme.story.productPreview.destroy()
            const previewEl = self.theme.story.productCollection.slider.activeSlide.querySelector('#product-preview')
            self.theme.story.setProductPreview(previewEl)
            
            if (self.theme.story.productPreview.type === 'card') {
                self._typeProductCollectionCard()
            }

            if (self.theme.story.productPreview.type === 'link') {
                self._typeProductCollectionLink()
            }
        })

        this.theme.story.productPreview.init()
        this.theme.story.productCollection.init()

        this.theme.story.subscribeEvent('destroy', function() {
            if (self.theme.story.productCard) {
                self.theme.story.productCard.setState('hide')
            }
            
            self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened')
        })

        this.theme.story.productCollection.subscribeEvent('destroy', function () {
            if (self.theme.story.productCollection.slider.isEnd) {
                self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide')
            }
            self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width')
        })
    }

    _typeProductCollectionCard() {
        const self = this

        if (self.theme.story.productCard) {
            self.theme.story.productCard.destroy()
        }
        
        const cardEl = this.theme.story.control.el.querySelectorAll('#product-card')[this.theme.story.productCollection.slider.activeIndex]

        if (!cardEl) {
            console.error('[sitestories]: Couldn\'t find product card element')
            return
        }

        const paramsSliderProductCard = this.getParamsSliderProductCard()
        paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider')
        this.theme.story.setProductCard(cardEl)
        this.theme.story.productCard.setSlider(new SliderSwiperAdapter())
        
        // Open product card
        this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault()

            if (self.theme.story.productCollection.slider.isEnd) {
                self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width-end-slide')
            }

            self.theme.story.productCollection.slider.activeSlide.classList.add('sitestories-story-product-card__slide_over-width')
            self.theme.sliderGroupStories.disable()
            self.theme.sliderStory.disable()
            self.theme.story.productCollection.slider.disable()
            self.theme.story.productCard.setState('card')
            self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened')
            self.theme.sliderStory.autoplayStop()
            self.theme.groupStories.getStatesIconsPlay().pause()
            self.theme.isPlaying = false
        })

        this.theme.story.productCard.subscribeEvent('click', function(e) {
            // Close product card
            if (e.target.closest('.sitestories-story-product-card__close')) {
                if (self.theme.story.productCollection.slider.isEnd) {
                    self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width-end-slide')
                }
    
                self.theme.story.productCollection.slider.activeSlide.classList.remove('sitestories-story-product-card__slide_over-width')
                self.theme.sliderGroupStories.enable()
                self.theme.sliderStory.enable()
                self.theme.story.productCollection.slider.enable()
                self.theme.story.productCard.setState('hide')
                self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened')
            }
        })

        this.theme.story.productPreview.init()
        this.theme.story.productCard.init()
        this.theme.story.productCard.initSlider(paramsSliderProductCard)

    }

    _typeProductCollectionLink() {
        const self = this

        this.theme.story.productPreview.subscribeEvent('click', function (e) {
            e.preventDefault()

            const button = self.theme.story.productPreview.el.querySelector('.sitestories-product-collection__product-preview-button')
            const link = button.getAttribute('href')
            window.location.href = link
        })

        this.theme.story.productPreview.init()
    }

    typeProductList() {
        const self = this       
        const previewsElems = this.theme.story.control.el.querySelectorAll('#product-preview')
        const cardsElems = this.theme.story.control.el.querySelectorAll('#product-card')
        const paramsSliderProductCard = this.getParamsSliderProductCard()
    
        for (let i = 0; i < previewsElems.length; i++) {
            const previewEl = previewsElems[i]

            if (previewEl.getAttribute('data-type') === 'card') {
                const cardEl = cardsElems[i]
                paramsSliderProductCard.el = cardEl.querySelector('.sitestories-story-product-card__slider')
                this.theme.story.setProductPreview(previewEl)
                this.theme.story.setProductCard(cardEl)
                this.theme.story.productCard.setSlider(new SliderSwiperAdapter())

                // Open product card
                this.theme.story.productPreview.subscribeEvent('click', function (e) {
                    e.preventDefault()
                    self.theme.story.setProductCard(cardEl)
                    self.theme.story.productCard.setState('card')
                    self.theme.groupStories.control.el.classList.add('sitestories-group-stories_product-card-opened')
                    self.theme.sliderStory.autoplayStop()
                    self.theme.groupStories.getStatesIconsPlay().pause()
                    self.theme.isPlaying = false
                    self.theme.sliderGroupStories.disable()
                    self.theme.sliderStory.disable()
                })

                this.theme.story.productCard.subscribeEvent('click', function(e) {
                    // Close product card
                    if (e.target.closest('.sitestories-story-product-card__close')) {
                        self.theme.story.setProductCard(cardEl)
                        self.theme.story.productCard.setState('hide')
                        self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened')
                        self.theme.sliderGroupStories.enable()
                        self.theme.sliderStory.enable()
                    }
                })
                
                this.theme.story.productPreview.init()
                this.theme.story.productCard.init()
                this.theme.story.productCard.initSlider(paramsSliderProductCard)
            }

            if (previewEl.getAttribute('data-type') === 'link') {
                this.theme.story.setProductPreview(previewEl)
                this.theme.story.productPreview.subscribeEvent('click', function (e) {
                    e.preventDefault()

                    const button = previewEl.querySelector('.sitestories-product-list__product-button')
                    const link = button.getAttribute('href')
                    window.location.href = link
                })

                this.theme.story.productPreview.init()
            }
        }

        this.theme.story.subscribeEvent('destroy', function() {
            if (self.theme.story.productCard) {
                self.theme.story.productCard.setState('hide')
            }
            
            self.theme.groupStories.control.el.classList.remove('sitestories-group-stories_product-card-opened')
        })
    }
 
    getParamsSliderProductCollection() {
        return {
            el: this.theme.story.productCollection.el.querySelector('.sitestories-product-collection__slider'),
            slideToClickedSlide: true,
            containerModifierClass: 'sitestories-product-collection__slider_',
            wrapperClass: 'sitestories-product-collection__slider-wrapper',
            slideClass: 'sitestories-product-collection__slide',
            slideActiveClass: 'sitestories-product-collection__slide_active',
            slideNextClass: 'sitestories-product-collection__slide_next',
            slidePrevClass: 'sitestories-product-collection__slide_prev',
            bulletClass: 'sitestories-product-collection__slider-bullet',
            slidesPerView: 1.2,
            centeredSlides: false,
            spaceBetween: 0,
            effect: 'slide',
            simulateTouch: true,
            allowTouchMove: true,
            initialSlide: 0,
        }
    }

    getParamsSliderProductCard() {
        return {
            slideToClickedSlide: false,
            containerModifierClass: 'sitestories-story-product-card__slider_',
            wrapperClass: 'sitestories-story-product-card__slider-wrapper',
            slideClass: 'sitestories-story-product-card__slide',
            slideActiveClass: 'sitestories-story-product-card__slide_active',
            slideNextClass: 'sitestories-story-product-card__slide_next',
            slidePrevClass: 'sitestories-story-product-card__slide_prev',
            bulletClass: 'sitestories-story-product-card__slider-bullet',
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 10,
            effect: 'slide',
            simulateTouch: true,
            allowTouchMove: true,
            initialSlide: 0,
        }
    }

    eventActive(storyControl) {
        const self = this
        this.theme.modalBackground.setBackground(storyControl.srcMedia, storyControl.typeStory)
        this.theme.groupStories.getControlsElems().show()

        if (this.theme.isPlaying === null || this.theme.isPlaying) {
            this.theme.story.videoManager.play()
            this.theme.groupStories.getAnimBullets().start(storyControl.bulletAnimEl, storyControl.speedAutoplayMS).then(function () {
                self.theme.story.videoManager.pause()
                self.theme.modalBackground.pauseVideo()
                self.theme.navigation.next()
            })
            this.theme.groupStories.getStatesIconsPlay().play()

            if (storyControl.typeStory === 'video') {
                this.theme.modalBackground.playVideo()
            }
        }

        if (this.theme.isSoundOn) {
            this.theme.groupStories.getStatesSoundIcons().enable()
            this.theme.story.videoManager.enableSound()
        } else {
            this.theme.groupStories.getStatesSoundIcons().disable()
            this.theme.story.videoManager.disableSound()
        }

        this.theme.story.setTimePassed(this.theme.groupStories.control.el, this.theme.lang)
        this.theme.story.control.activeAnimate()
    }

    eventReset() {
        this.theme.modalBackground.reset()
        this.theme.story.videoManager.reset()
        this.theme.story.control.resetAnimate()
    }
}