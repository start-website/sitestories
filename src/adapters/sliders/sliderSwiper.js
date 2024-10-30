// import Swiper bundle with all modules installed
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Controller, EffectCube, EffectFade } from 'swiper/modules';

export class SliderSwiperAdapter {
    constructor() {
        this.eventListeners = {}
        this.slides = null
        this.activeIndex = null
        this.activeSlide = null
        this.swiper
        this.isEnd
        this.isBeginning
    }

    init(params) {
        const self = this

        const swiperSettings = {
            modules: [Navigation, Pagination, EffectCube, EffectFade, Autoplay, Controller],
            slideToClickedSlide: params.slideToClickedSlide,
            centeredSlides: params.centeredSlides,
            containerModifierClass: params.containerModifierClass,
            wrapperClass: params.wrapperClass,
            slideClass: params.slideClass,
            slideActiveClass: params.slideActiveClass,
            slideNextClass: params.slideNextClass,
            slidePrevClass: params.slidePrevClass,
            slidesPerView: params.slidesPerView,
            spaceBetween: params.spaceBetween,
            simulateTouch: params.simulateTouch,
            allowTouchMove: params.allowTouchMove,
            initialSlide: params.initialSlide,
            slideFullyVisibleClass: params.slideFullyVisibleClass ? params.slideFullyVisibleClass : 'sitestories__slide-fully-visible',
            slideVisibleClass: params.slideVisibleClass ? params.slideVisibleClass : 'sitestories__slide-visible',
            direction: params.direction ? params.direction : 'horizontal',

            on: {
                init(swiper) {
                    //console.log('event init', swiper.el)
                    self.initProps(swiper)
                    if ('init' in self.eventListeners) self.eventListeners.init()
                },

                slideChange(swiper) {
                    self.initProps(swiper)
                    if ('slideChange' in self.eventListeners) self.eventListeners.slideChange()
                },

                reachEnd(swiper) {
                    self.initProps(swiper)
                    if ('reachEnd' in self.eventListeners) self.eventListeners.reachEnd()
                },

                click(swiper, e) {
                    // console.log('click swiper event')
                    self.initProps(swiper)
                    if ('click' in self.eventListeners) self.eventListeners.click(e)
                },

                autoplayPause(swiper) {
                    // console.log('autoplay pause')
                    self.initProps(swiper)
                    if ('autoplayPause' in self.eventListeners) self.eventListeners.autoplayPause()
                },
                autoplayResume(swiper) { 
                    // console.log('autoplay resume')
                    self.initProps(swiper)
                    if ('autoplayResume' in self.eventListeners) self.eventListeners.autoplayResume()
                },
                autoplayStop(swiper) {
                    // console.log('autoplayStop')
                    self.initProps(swiper)
                    if ('autoplayStop' in self.eventListeners) self.eventListeners.autoplayStop()
                },
                autoplayStart(swiper) {
                    // console.log('autoplayStart')
                    self.initProps(swiper)
                    if ('autoplayStart' in self.eventListeners) self.eventListeners.autoplayStart()
                },

                touchStart(swiper, e) {
                    // console.log('touchStart', swiper, e.target)
                    self.initProps(swiper)
                    if ('pointerdown' in self.eventListeners) self.eventListeners.pointerdown(e)
                },
                touchEnd(swiper, e) {  
                    //console.log('touchEnd')                  
                    self.initProps(swiper)
                    if ('pointerup' in self.eventListeners) self.eventListeners.pointerup(e)
                },

                autoplay(swiper) {
                    //console.log('autoplay')
                },

                sliderMove(swiper, e) {
                    //console.log('sliderMove', e)
                },

                resize(swiper) {
                    //console.log('resize event', swiper.getTranslate())
                }

            }
        }

        if ('pagination' in params) {
            swiperSettings.pagination = {
                el: params.pagination.el,
                clickable: true,
                type: 'bullets',
                bulletClass: params.bulletClass,
                bulletActiveClass: params.bulletClass + '_active',
                bulletElement: 'div',
                progressbarOpposite: false,
                renderBullet: function (index, className) {
                    return '<div class="' + className + '">' + '<span class="' + params.bulletClass + '_anim"></span>' + '</div>';
                }
            }
        }

        if ('autoplay' in params) {
            swiperSettings.autoplay = {
                delay: 0,
                pauseOnMouseEnter: false,
                stopOnLastSlide: true,
                disableOnInteraction: false,
            }
        }

        if ('effect' in params) {
            swiperSettings.effect = params.effect

            if (params.effect === 'fade') {
                swiperSettings.fadeEffect = {
                    crossFade: true
                }
            }

            if (params.effect === 'cube') {
                swiperSettings.fadeEffect = {
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }
            }
        }

        if ('navigation' in params) {
            swiperSettings.navigation = {
                nextEl: params.navigation.nextEl,
                prevEl: params.navigation.prevEl,
                disabledClass: params.navigation.disabledClass
            }
        }

        this.swiper = new Swiper(params.el, swiperSettings)
        
        this.initProps()
    }

    initProps(swiper) {
        
        if (swiper) {
            this.el = swiper.el
            this.slides = swiper.slides
            this.activeIndex = swiper.activeIndex
            this.activeSlide = this.slides[this.activeIndex]
            this.bullets = swiper.pagination.bullets
            this.activeBullet = this.bullets[swiper.activeIndex]
            this.isEnd = swiper.isEnd
            this.isBeginning = swiper.isBeginning
            this.isIos = swiper.device.ios
            this.isAndroid = swiper.device.android
        }
        
    }

    slideNext() {
        //console.log('swiper slide next')
        this.swiper.slideNext()
    }

    slidePrev() {
        //console.log('swiper slide prev')
        this.swiper.slidePrev()
    }

    autoplayResume() {
        this.swiper.autoplay.resume()
    }

    autoplayPause() {
        this.swiper.autoplay.pause()
    }

    autoplayStart() {
        this.swiper.autoplay.start()
    }

    autoplayStop() {
        this.swiper.autoplay.stop()
    }

    destroy() {
        this.eventListeners = {}
        this.swiper.destroy()
    }

    subscribeEvent(event, listener) {
        this.eventListeners[event] = listener
    }

    disable() {
        this.swiper.disable()
    }

    enable() {
        this.swiper.enable()
    }
}
