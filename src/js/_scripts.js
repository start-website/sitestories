class WebasystStories {
    constructor(props) {
        this.storiesSection = document.querySelector(props.storiesSelector)
        this.previews = document.querySelector(props.previewsSelector)
        this.storiesGroups = document.querySelector(props.storySelector)
        this.isMobile = props.isMobile
        this.body = document.querySelector('body')
        this.arrowRight = ''
        this.arrowLeft = ''
        this.timer = props.timer
        this.previewsWidth = 0
        this.timerSpeed = Number(props.timerSpeed + '0')
        this.indexStory = 0
        this.indexGroup = 0
        this.storyWidth = 0
        this.windowHeight = 0
        this.storyPositionX = 0
        this.storyPositionY = 0
        this.media = ''
        this.soundIcon = ''
        this.playIcon = ''
        this.storiesListWrap = ''
        this.storiesList = ''
        this.storiesGroupBG = ''
        this.buttons = ''
        this.buttonsLine = ''
        this.slideType = ''
        this.currentVideo = ''
        this.timerIndicator = ''
        this.storyMessages = ''
        this.isStoryMessageViewed = false
        this.previewsMoveEvent = false
        this.switchStoryEvent = false
        this.listenerSwitchRight = new Set()
        this.listenerSwitchLeft = new Set()
        this.listenerRemoveClick = new Set()
        this.listenerVideoPlay = new Set()
        this.listenerVideoBGPlay = new Set()
        this.listenerSoundIconVideoMuted = new Set()
        this.listenerCloseStoriesGroup = new Set()
        this.listenerDragsFunc = new Set()
        this.listenerSwipeFunc = new Set()
        this.listenerButtons = new WeakSet();

        this.view = {
            addElemSlider: function (slider, elem) {
                slider.appendChild(elem);
            },
        },

            this.model = {
                openStoriesGroup(storiesGroup, indexGroup) {
                    if (this.previewsMoveEvent) return

                    this.body.style.overflow = 'hidden'
                    this.storiesGroups.classList.add('active')
                    this.storiesGroups.children[indexGroup].classList.add('active')
                    this.storiesListWrap = this.model._getElem(storiesGroup, 'webasyst-stories__list-wrap')
                    this.storiesList = this.model._getElem(storiesGroup, 'webasyst-stories__list')
                    this.media = this.model._getMedia(this.storiesList, ['img', 'source'])
                    this.storiesGroupBG = this.model._getElem(storiesGroup, 'webasyst-stories__bg')
                    this.storiesGroupBGVideo = this.model._getElem(storiesGroup, 'webasyst-stories__bg_video')
                    this.buttons = this.model._getElem(storiesGroup, 'webasyst-stories__buttons')
                    this.buttonsLine = this.model._getElems(this.buttons, 'webasyst-stories__button-line')
                    this.soundIcon = this.model._getElem(storiesGroup, 'webasyst-stories__sound')
                    this.arrowRight = this.model._getElem(storiesGroup, 'webasyst-stories__arrow-right')
                    this.storyMessages = this.model._getElems(this.storiesGroups, 'webasyst-stories__message-wrap')
                    this.arrowLeft = this.model._getElem(storiesGroup, 'webasyst-stories__arrow-left')
                    this.storiesList.children[0].classList.add('active')
                    this.buttons.children[0].classList.add('active')
                    this.storiesList.style.transform = 'translate(0px, 0px)'
                    this.indexStory = 0
                    this.indexGroup = indexGroup

                    this.slideType = this.model._checkSlideType(this.storiesList.children[this.indexStory].children[0])

                    if (this.slideType === 'img') {
                        this.soundIcon.style.display = 'none'
                    }

                    this.model._setBackground(this.storiesGroupBG, this.storiesGroupBGVideo, this.slideType)

                    this.currentVideo = this.model._getTag(this.storiesList.children[0].children[0], 'VIDEO')

                    if (this.currentVideo) {
                        this.playIcon = this.model._getElem(this.storiesList.children[0], 'webasyst-stories__play-icon')
                        this.soundIcon.style.display = ''
                        this.model._controlVideo(this.currentVideo, this.storiesGroupBGVideo, this.soundIcon, this.playIcon)
                    }

                    this.windowHeight = window.innerHeight
                    this.storyWidth = Math.floor(this.windowHeight * 0.6) <= window.innerWidth ? Math.floor(this.windowHeight * 0.6) : window.innerWidth

                    this.buttonsLine.forEach(btn => {
                        btn.style.width = '0'
                    })

                    this.storyPositionX = this.storyWidth * this.indexStory
                    this.storyPositionY = this.windowHeight * this.indexStory

                    if (!this.listenerCloseStoriesGroup.has(this.indexGroup)) {
                        this.model.addClickStoriesGroup(storiesGroup, this.model.closeStoriesGroup)
                        this.listenerCloseStoriesGroup.add(this.indexGroup)
                    }

                    this.model.arrowsSwitch(storiesGroup)
                    this.model.buttonsSwitch(storiesGroup)
                    this.model.timerSwitch(storiesGroup)
                    this.model._checkSlideEnd()

                    if (this.isMobile) {
                        this.model.switchSwipe(storiesGroup)
                    } else {
                        this.model.switchDrag(storiesGroup)
                    }

                    window.addEventListener('resize', () => {
                        this.windowHeight = window.innerHeight
                        this.storyWidth = Math.floor(this.windowHeight * 0.6) <= window.innerWidth ? Math.floor(this.windowHeight * 0.6) : window.innerWidth
                        this.storyPositionX = this.storyWidth * this.indexStory
                        this.storyPositionY = this.windowHeight * this.indexStory

                        if (this.isMobile) {
                            this.storiesList.style.transform = `translateY(-${this.storyPositionY}px)`
                            this.model.switchSwipe(storiesGroup)
                        } else {
                            this.storiesList.style.transform = `translateX(-${this.storyPositionX}px)`
                            this.model.switchDrag(storiesGroup)
                        }

                        this.model.arrowsSwitch(storiesGroup)
                        this.model.buttonsSwitch(storiesGroup)
                    })

                    if (!this.isStoryMessageViewed) {
                        for (let i = 0; i < this.storyMessages.length; i++) {
                            const storyMessage = this.storyMessages[i];
                            storyMessage.style.display = ''

                            setTimeout(() => {
                                storyMessage.className += ' webasyst-stories__fade-out'
                            }, 1500)
        
                            setTimeout(() => {
                                storyMessage.style.display = 'none'
                                this.isStoryMessageViewed = true
                            }, 2500)
                        }
                    }
                },

                closeStoriesGroup() {
                    clearInterval(this.timerIndicator)
                    this.body.style.overflow = ''
                    this.storiesList.style.transform = ''
                    this.arrowRight.style.opacity = ''
                    this.storiesGroups.classList.remove('active')
                    this.model._removeClasses(this.storiesGroups.children, 'active')
                    this.model._removeClasses(this.storiesList.children, 'active')
                    this.model._removeClasses(this.storiesList.children, 'switch-left')
                    this.model._removeClasses(this.storiesList.children, 'switch-right')
                    this.model._removeClasses(this.buttons.children, 'active')

                    if (this.currentVideo) {
                        this.model._videoStop(this.storiesGroupBGVideo, this.currentVideo)
                    }
                },

                addClickStoriesGroup(storiesGroup, fn, removeEvent) {
                    const action = (e) => {
                        if (e.target.className && /(webasyst-stories__bg|webasyst-stories__close|webasyst-stories__icon-close)/gi.test(e.target.className)) {
                            fn()
                        }

                        if (removeEvent) storiesGroup.removeEventListener('click', action)
                    }
                    storiesGroup.addEventListener('click', action)
                },

                addClickPreview(preview, storiesGroup, indexGroup) {
                    preview.addEventListener('click', () => {
                        this.model.openStoriesGroup(storiesGroup, indexGroup)
                    })
                },

                buttonsSwitch(storiesGroup) {
                    const storiesLength = this.storiesList.children.length
                    const buttonWidth = this.storyWidth / storiesLength - 15
                    this.buttons.style.width = this.storyWidth + 'px'

                    this.buttons.children.forEach((button, btnInx) => {
                        button.style.width = buttonWidth + 'px'

                        if (!this.listenerButtons.has(button)) {
                            button.addEventListener('click', () => {
                                this.indexStory = btnInx
                                this.storyPositionX = this.storyWidth * this.indexStory
                                this.storyPositionY = this.windowHeight * this.indexStory

                                this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup)

                                this.storiesList.children[btnInx].classList.add('active')
                                button.classList.add('active')

                                clearInterval(this.timerIndicator)
                                this.model.timerSwitch(storiesGroup, this.indexGroup)

                                this.buttonsLine.forEach((btn, btnInx) => {
                                    if (btnInx < this.indexStory) {
                                        btn.style.width = '100%'
                                    } else {
                                        btn.style.width = '0'
                                    }
                                })
                            })

                            this.listenerButtons.add(button)
                        }

                    })
                },

                arrowsSwitch(storiesGroup) {
                    let storiesWidth = 0
                    let storiesHeight = 0
                    this.storiesList.children.forEach(story => {
                        story.style.width = this.storyWidth + 'px'
                        storiesWidth += this.storyWidth
                        storiesHeight += this.windowHeight
                    })

                    this.storiesListWrap.style.width = this.storyWidth + 'px'

                    if (this.isMobile) {
                        this.storiesList.style.width = 'inherit'
                        this.storiesList.style.height = storiesHeight + 'px'
                    } else {
                        this.storiesList.style.width = storiesWidth + 'px'
                    }

                    if (!this.listenerSwitchRight.has(this.indexGroup)) {
                        this.arrowRight.addEventListener('click', this.model._switchRight.bind(this, storiesGroup))
                        this.listenerSwitchRight.add(this.indexGroup)
                    }

                    if (!this.listenerSwitchLeft.has(this.indexGroup)) {
                        this.arrowLeft.addEventListener('click', this.model._switchLeft.bind(this, storiesGroup))
                        this.listenerSwitchLeft.add(this.indexGroup)
                    }
                },

                timerSwitch(storiesGroup) {
                    if (!this.timer) return

                    const storiesGroupsLength = this.storiesGroups.children.length
                    const storiesLength = this.storiesList.children.length
                    let lineWidth = 0
                    const self = this

                    this.timerIndicator = setInterval(function () {
                        if (self.isMobile && !self.isStoryMessageViewed) return

                        const storiesListEnd = self.indexStory == storiesLength - 1
                        const storiesGroupEnd = self.indexGroup == storiesGroupsLength - 1

                        if (lineWidth >= 100) clearInterval(self.timerIndicator)

                        if (lineWidth < 100) {
                            lineWidth += 1
                            self.buttonsLine[self.indexStory].style.width = lineWidth + '%'
                        }

                        // Переключение истории
                        if (lineWidth == 100 && !storiesListEnd) {
                            self.model._switchRight(storiesGroup)
                        }
                        
                        // Переключение группы
                        if (lineWidth == 100 && storiesListEnd && !storiesGroupEnd) {
                            self.model._switchGroupRight()
                        }

                    }, self.timerSpeed)
                },

                switchDrag(storiesGroup) {
                    let startX
                    let differenceX
                    let positionMoveX

                    this.storiesList.children.forEach(story => {
                        const move = (e) => {
                            story.style.cursor = 'grabbing'
                            differenceX = e.clientX - startX
                            positionMoveX = this.storyPositionX - differenceX
                            this.storiesList.style.transform = `translateX(-${positionMoveX}px)`
                        }

                        if (!this.listenerDragsFunc.has(story)) {
                            // Нажатие кнопки мыши на историю
                            story.addEventListener('mousedown', (e) => {
                                e.preventDefault()

                                startX = e.clientX
                                story.addEventListener('mousemove', move);
                            })

                            // Поднятие кнопки мыши на истории
                            story.addEventListener('mouseup', () => {
                                story.style.cursor = 'grab'
                                this.storiesList.style.transform = `translateX(-${this.storyPositionX}px)`

                                this.switchStoryEvent = false

                                // Движение вправо
                                if (differenceX < -50) {
                                    this.model._switchRight(storiesGroup)
                                    this.switchStoryEvent = true
                                }

                                // Движение влево
                                if (differenceX > 50) {
                                    this.model._switchLeft(storiesGroup)
                                    this.switchStoryEvent = true
                                }

                                differenceX = 0
                                story.removeEventListener('mousemove', move)
                            })

                            // Наведение нажатой кнопки мыши на историю
                            story.addEventListener('mouseenter', () => {
                                story.style.cursor = 'grab'
                            })

                            // Покидание мыши с истории
                            story.addEventListener('mouseleave', () => {
                                this.storiesList.style.transform = `translateX(-${this.storyPositionX}px)`
                                story.removeEventListener('mousemove', move);
                            })

                            this.listenerDragsFunc.add(story)
                        }

                    })
                },

                switchSwipe(storiesGroup) {
                    let touchStartY
                    let touchDifferenceY

                    if (!this.listenerSwipeFunc.has(storiesGroup)) {
                        storiesGroup.addEventListener('touchstart', function (e) {
                            touchStartY = e.touches[0].clientY
                        })

                        storiesGroup.addEventListener('touchmove', (e) => {
                            touchDifferenceY = Math.ceil(touchStartY - e.touches[0].clientY)

                            let positionMoveY = this.storyPositionY + touchDifferenceY
                            this.storiesList.style.transform = `translateY(-${positionMoveY}px)`
                        })

                        storiesGroup.addEventListener('touchend', (e) => {
                            this.storiesList.style.transform = `translateY(-${this.storyPositionY}px)`

                            this.switchStoryEvent = false

                            // swipe up
                            if (touchDifferenceY > 70) {
                                this.model._switchRight(storiesGroup)
                                this.switchStoryEvent = true
                            }

                            if (touchDifferenceY < -70) {
                                this.model._switchLeft(storiesGroup)
                                this.switchStoryEvent = true
                            }

                            touchDifferenceY = 0
                        })

                        this.listenerSwipeFunc.add(storiesGroup)
                    }

                },

                _switchHistory(storyPositionY, storyPositionX, storiesGroup) {
                    this.model._removeClasses(this.storiesList.children, 'active')
                    this.storiesList.children[this.indexStory].classList.add('active')

                    if (this.currentVideo) {
                        this.model._videoStop(this.storiesGroupBGVideo, this.currentVideo)
                    }

                    this.currentVideo = this.model._getTag(this.storiesList.children[this.indexStory].children[0], 'VIDEO')

                    if (this.currentVideo) {
                        this.playIcon = this.model._getElem(this.storiesList.children[this.indexStory], 'webasyst-stories__play-icon')
                        this.soundIcon.style.display = ''
                        this.model._controlVideo(this.currentVideo, this.storiesGroupBGVideo, this.soundIcon, this.playIcon)
                    } else {
                        this.soundIcon.style.display = 'none'
                    }

                    this.slideType = this.model._checkSlideType(this.storiesList.children[this.indexStory].children[0])
                    this.model._setBackground(this.storiesGroupBG, this.storiesGroupBGVideo, this.slideType)

                    this.model._removeClasses(this.buttons.children, 'active')
                    this.buttons.children[this.indexStory].classList.add('active')

                    if (this.isMobile) {
                        this.storiesList.style.transform = `translateY(-${storyPositionY}px)`
                        this.model.switchSwipe(storiesGroup)
                    } else {
                        this.storiesList.style.transform = `translateX(-${storyPositionX}px)`
                        this.model.switchDrag(storiesGroup)
                    }

                    this.model._checkSlideEnd()
                },

                _switchGroupRight() {
                    this.indexGroup++
                    this.indexStory = 0
                    this.model.closeStoriesGroup()
                    this.model.openStoriesGroup(this.storiesGroups.children[this.indexGroup], this.indexGroup)
                    if (!this.isMobile) {
                        this.storiesList.children[this.indexStory].classList.add('switch-right')
                        setTimeout(() => {
                            this.storiesList.children[this.indexStory].classList.remove('switch-right')
                        }, 200)
                    }
                },

                _switchGroupLeft() {
                    this.indexGroup--
                    this.model.closeStoriesGroup()
                    this.model.openStoriesGroup(this.storiesGroups.children[this.indexGroup], this.indexGroup)
                    this.indexStory = this.storiesList.children.length - 1
                    this.buttonsLine.forEach((btn, btnInx) => {
                        if (btnInx < this.indexStory) {
                            btn.style.width = '100%'
                        }
                    })
                    if (!this.isMobile) {
                        this.storiesList.children[this.indexStory].classList.add('switch-left')
                        setTimeout(() => {
                            this.storiesList.children[this.indexStory].classList.remove('switch-left')
                        }, 200)
                    }
                },

                _switchRight(storiesGroup) {
                    clearInterval(this.timerIndicator)

                    this.indexStory++

                    this.buttonsLine.forEach((btn, btnInx) => {
                        if (btnInx < this.indexStory) {
                            btn.style.width = '100%'
                        }
                    })

                    const storiesGroupsLength = this.storiesGroups.children.length
                    const storiesLength = this.storiesList.children.length
                    const storiesListEnd = this.indexStory == storiesLength
                    const storiesGroupEnd = this.indexGroup == storiesGroupsLength - 1

                    // Переключение истории вправо
                    if (this.indexStory < storiesLength) {
                        this.storyPositionX = this.storyWidth * this.indexStory
                        this.storyPositionY = this.windowHeight * this.indexStory
                        this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup)
                    }

                    // Переключение группы вправо
                    if (storiesListEnd && !storiesGroupEnd) {
                        this.model._switchGroupRight()
                    } else {
                        this.model.timerSwitch(storiesGroup)
                    }

                    if (storiesGroupEnd && storiesListEnd) {
                        this.indexStory = storiesLength - 1
                    }
                },

                _switchLeft(storiesGroup) {
                    clearInterval(this.timerIndicator)

                    this.indexStory--

                    this.buttonsLine.forEach((btn, btnInx) => {
                        if (btnInx > this.indexStory) {
                            btn.style.width = '0'
                        }
                    })

                    // Переключение группы в лево
                    if (this.indexStory == -1 && this.indexGroup > 0) {
                        this.model._switchGroupLeft()
                    } else {
                        this.model.timerSwitch(storiesGroup)
                    }

                    if (this.indexStory == -1) {
                        this.indexStory = 0
                    }

                    // Переключение истории в лево
                    if (this.indexStory >= 0) {
                        this.storyPositionX = this.storyWidth * this.indexStory
                        this.storyPositionY = this.windowHeight * this.indexStory
                        this.model._switchHistory(this.storyPositionY, this.storyPositionX, storiesGroup)
                    }
                },

                _removeClasses(elems, className) {
                    elems.forEach(elem => {
                        elem.classList.remove(className)
                    })
                },

                _getElem(elem, className) {
                    let result
                    function findELem(goal) {
                        for (let index = 0; index < goal.children.length; index++) {
                            const element = goal.children[index]
                            const regExp = new RegExp(className + '$', 'gi')
                            let elemClass = element.className
                            if (element.tagName && element.tagName === 'svg') {
                                elemClass = element.className.animVal
                            }
                            if (element.className && regExp.test(elemClass)) {
                                result = element
                                return
                            } else {
                                findELem(element)
                            }
                        }
                    }
                    findELem(elem)

                    return result
                },

                _getElems(elem, className) {
                    let result = []
                    function findELem(goal) {
                        for (let index = 0; index < goal.children.length; index++) {
                            const element = goal.children[index]
                            const regExp = new RegExp(className + '$', 'gi')
                            if (element.className && regExp.test(element.className)) {
                                result.push(element)
                                return
                            } else {
                                findELem(element)
                            }
                        }
                    }
                    findELem(elem)

                    return result
                },

                _getMedia(container, tagsArr) {
                    let result = []

                    function getSrcMedia(elems) {
                        elems.forEach(elem => {
                            if (elem.src) {
                                tagsArr.forEach(tag => {
                                    const regExp = new RegExp('^' + tag + '$', 'gi')
                                    if (regExp.test(elem.tagName)) {
                                        result.push(elem.src)
                                        return
                                    }
                                })
                            } else {
                                getSrcMedia(elem.children)
                            }
                        })
                    }
                    getSrcMedia(container.children)

                    return result
                },

                _checkSlideType(elem) {
                    let el = elem

                    if (el.tagName === 'A') {
                        el = el.children[0]
                    }

                    switch (el.tagName) {
                        case 'IMG':
                            return 'img'
                        case 'VIDEO':
                            this.currentVideo = elem
                            return 'video'
                    }
                },

                _getTag(elem, tagName) {
                    if (elem.tagName && elem.tagName === tagName) {
                        return elem
                    }
                },

                _videoStop(storiesGroupBGVideo, video) {
                    video.pause()
                    video.currentTime = 0
                    storiesGroupBGVideo.pause()
                    storiesGroupBGVideo.currentTime = 0
                    storiesGroupBGVideo.style.display = 'none'
                },

                _setBackground(storiesGroupBG, storiesGroupBGVideo, elem) {
                    if (this.isMobile) return

                    switch (elem) {
                        case 'img':
                            storiesGroupBG.style.backgroundImage = `url(${this.media[this.indexStory]})`
                            break
                        case 'video':
                            const videoSource = storiesGroupBGVideo.children[0]
                            videoSource.src = this.media[this.indexStory]
                            storiesGroupBGVideo.load()

                            const storiesBGvideoPromise = storiesGroupBGVideo.play()
                            if (storiesBGvideoPromise !== undefined) {
                                storiesBGvideoPromise
                                    .then(_ => {
                                        // Automatic playback started!
                                        // Show playing UI.
                                        storiesGroupBGVideo.style.display = ''
                                    })
                                    .catch(error => {
                                        // Auto-play was prevented
                                        // Show paused UI.
                                    });
                            }

                            this.currentVideo.play()
                            break
                    }

                },

                _controlVideo(video, videoBG, soundIcon, playIcon) {
                    const videoPlay = (video) => {
                        if (this.switchStoryEvent) return

                        if (video.paused) {
                            video.play()
                            playIcon.style.display = 'none'
                            video.style.opacity = ''
                            this.model.timerSwitch(this.storiesGroup)
                        } else {
                            video.pause()
                            playIcon.style.display = ''
                            video.style.opacity = '0.5'
                            clearInterval(this.timerIndicator)
                        }
                    }

                    const videoBGPlay = (video) => {
                        if (this.switchStoryEvent) return

                        if (video.paused) {
                            video.play()
                        } else {
                            video.pause()
                        }
                    }

                    const videoMuted = () => {
                        if (video.muted) {
                            video.muted = false
                            soundIcon.children[0].classList.add('webasyst-stories__icon-sound')
                            soundIcon.children[0].classList.remove('webasyst-stories__icon-sound-none')
                        } else {
                            video.muted = true
                            soundIcon.children[0].classList.remove('webasyst-stories__icon-sound')
                            soundIcon.children[0].classList.add('webasyst-stories__icon-sound-none')
                        }
                    }

                    // Запуск видео
                    const videoPlayPromise = video.play()
                    playIcon.style.display = 'none'
                    video.style.opacity = ''
                    if (videoPlayPromise !== undefined) {
                        videoPlayPromise
                            .then(_ => {
                                // Automatic playback started!
                                // Show playing UI.
                                if (!this.listenerVideoPlay.has(video)) {
                                    video.addEventListener('click', videoPlay.bind(this, video))
                                    playIcon.addEventListener('click', videoPlay.bind(this, video))

                                    this.listenerVideoPlay.add(video)
                                }
                            })
                            .catch(error => {
                                // Auto-play was prevented
                                // Show paused UI.
                                playIcon.style.display = 'none'
                                video.style.opacity = ''
                            })
                    }

                    // Запуск видео фона
                    const videoBGplayPromise = videoBG.play()
                    if (videoBGplayPromise !== undefined) {
                        videoBGplayPromise
                            .then(_ => {
                                // Automatic playback started!
                                // Show playing UI.
                                if (!this.listenerVideoBGPlay.has(video)) {
                                    video.addEventListener('click', videoBGPlay.bind(this, videoBG))
                                    playIcon.addEventListener('click', videoBGPlay.bind(this, videoBG))

                                    this.listenerVideoBGPlay.add(video)
                                }
                            })
                            .catch(error => {
                                // Auto-play was prevented
                                // Show paused UI.
                            })
                    }

                    // sound icon
                    video.muted = false
                    soundIcon.children[0].classList.add('webasyst-stories__icon-sound')
                    soundIcon.children[0].classList.remove('webasyst-stories__icon-sound-none')
                    if (!this.listenerSoundIconVideoMuted.has(soundIcon)) {
                        soundIcon.addEventListener('click', videoMuted)

                        this.listenerSoundIconVideoMuted.add(soundIcon)
                    }

                },

                _checkSlideEnd() {
                    if (this.indexStory === 0 && this.indexGroup === 0) {
                        this.arrowLeft.style.opacity = '0.3'
                    } else {
                        this.arrowLeft.style.opacity = ''
                    }

                    if (this.indexStory === this.storiesList.children.length - 1 && this.indexGroup === this.storiesGroups.children.length - 1) {
                        this.arrowRight.style.opacity = '0.3'
                    } else {
                        this.arrowRight.style.opacity = ''
                    }
                }
            },

            this.controller = {
                storiesControl() {
                    const switchDrag = (previews) => {
                        let startX = 0
                        let differenceX = 0
                        let positionMoveX = 0
                        let currentPositionX = 0

                        const move = (e) => {
                            previews.style.cursor = 'grabbing'
                            differenceX = e.clientX - startX
                            positionMoveX = currentPositionX + differenceX
                            this.previews.style.transform = `translateX(${positionMoveX}px)`                            
                        }

                        previews.addEventListener('mousedown', (e) => {
                            e.preventDefault()
                            this.previewsMoveEvent = false

                            startX = e.clientX
                            previews.addEventListener('mousemove', move);
                        })

                        // Поднятие кнопки мыши на истории
                        previews.addEventListener('mouseup', () => {
                            previews.style.cursor = 'grab'
                            currentPositionX = positionMoveX

                            if (differenceX < -10) {
                                this.previewsMoveEvent = true
                            }

                            if (differenceX > 10) {
                                this.previewsMoveEvent = true
                            }

                            if (positionMoveX > 0) {
                                this.previews.style.transform = `translateX(0px)`
                                currentPositionX = 0
                            }

                            differenceX = 0
                            previews.removeEventListener('mousemove', move)
                        })

                        // Наведение нажатой кнопки мыши на историю
                        previews.addEventListener('mouseenter', () => {
                            previews.style.cursor = 'grab'
                        })

                        // Покидание мыши с истории
                        previews.addEventListener('mouseleave', () => {
                            previews.removeEventListener('mousemove', move);
                        })
                    }

                    const switchSwipe = (previews) => {
                        let touchStartX = 0
                        let touchDifferenceX = 0
                        let currentPositionX = 0
                        let positionMoveX = 0

                        previews.addEventListener('touchstart', function (e) {
                            touchStartX = e.touches[0].clientX
                            this.previewsMoveEvent = false
                        })

                        previews.addEventListener('touchmove', (e) => {
                            touchDifferenceX = Math.ceil(touchStartX - e.touches[0].clientX)

                            positionMoveX = currentPositionX - touchDifferenceX
                            this.previews.style.transform = `translateX(${positionMoveX}px)`
                        })

                        previews.addEventListener('touchend', (e) => {
                            currentPositionX = positionMoveX

                            if (touchDifferenceX > 10) {
                                this.previewsMoveEvent = true
                            }

                            if (touchDifferenceX < -10) {
                                this.previewsMoveEvent = true
                            }

                            if (positionMoveX > 0) {
                                this.previews.style.transform = `translateX(0px)`
                                currentPositionX = 0
                            }

                            // if (positionMoveX < (100 - this.previewsWidth)) {
                            //     this.previews.style.transform = `translateX(0px)`
                            //     currentPositionX = 0
                            // }

                            touchDifferenceX = 0
                        })

                    }

                    switchDrag(this.previews)
                    switchSwipe(this.previews)

                    const previewsArr = this.previews.children
                    const storiesArr = this.storiesGroups.children
                    this.previewsWidth = 0

                    for (let index = 0; index < previewsArr.length; index++) {
                        this.model.addClickPreview(previewsArr[index], storiesArr[index], index)
                        this.previewsWidth += previewsArr[index].offsetWidth
                    }

                    if (this.isMobile) this.storiesSection.classList.add('mobile')

                    this.previews.style.width = this.previewsWidth + 'px'

                },

            },

            this.app = {
                init() {
                    this.app.bindContext(this, this.view)
                    this.app.bindContext(this, this.model)
                    this.app.bindContext(this, this.controller)
                    this.app.main.call(this);
                },

                main() {
                    this.controller.storiesControl()
                },

                bindContext(self, object) {
                    for (let key in object) {
                        if (typeof object[key] == 'function') {
                            object[key] = object[key].bind(self);
                        }
                    }
                },
            }

        this.app.init.call(this);
    }
}


    const webasystStoriesSettings = {
        storiesSelector: '[data-stories-section="1"]',
        previewsSelector: '[data-stories-previews="1"]',
        storySelector: '[data-stories-groups="1"]',
        timer: 1,
        timerSpeed: '10',
        isMobile: 0,
    }
    new WebasystStories(webasystStoriesSettings)

    const webasystStoriesSettings2 = {
        storiesSelector: '[data-stories-section="2"]',
        previewsSelector: '[data-stories-previews="2"]',
        storySelector: '[data-stories-groups="2"]',
        timer: 1,
        timerSpeed: '10',
        isMobile: 1,
    }
    new WebasystStories(webasystStoriesSettings2)



