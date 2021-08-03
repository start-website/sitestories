var app = new Vue({
    delimiters: ['%%', '%%'],
    el: '.start',
    data: {
        plugin_url: document.querySelector('#plugin_url').value,
        groups_count: Number(document.querySelector('#groups_count').value),
        url: document.querySelector('#url').value,
        custom_css_instruction: false,
        loading: true,
        button_save_disabled: false,
        error_image: false,
        error_video: false,

        // Settings default
        settings: {
            custom_css: '',
            'groups_1_group_count_t-number': 1,
            'groups_1_group_1_stories_count_t-number': 1,
            'groups_1_group_1_story_1_t-number': false,
            groups_1_tab_active: 1,
            groups_1_height_group: 200,
            groups_1_width_group: 150,
            groups_1_round_corners: 10,
            groups_1_stroke_color: 'royalblue',
        }
    },
    filters: {
        bool: function (value) {
            if (!value) return ''
            value = Boolean(value)
            return value
        },

        int: function (value) {
            if (!value) return ''
            value = Number(value)
            return value
        },
    },
    methods: {
        addGroup() {
            this.groups_count++
            
            Vue.set(this.settings, 'groups_' + this.groups_count + '_group_count_t-number', 1)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_group_1_group_count_t-number', 1)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_group_1_active', true)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_group_1_stories_count_t-number', 1)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_group_1_story_1_t-number', false)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_tab_active', 1)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_height_group', 200)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_stroke_color', 'royalblue')
            Vue.set(this.settings, 'groups_' + this.groups_count + '_width_group', 150)
            Vue.set(this.settings, 'groups_' + this.groups_count + '_round_corners', 10)
        },

        delGroup() {
            if (this.groups_count > 1) {
                const regExp = new RegExp('^groups_' + this.groups_count)

                for (const item in this.settings) {
                    if (this.settings.hasOwnProperty(item)) {
                        if (regExp.test(item) && !/count/.test(item)) {
                            console.log(item)
                            this.settings[item] = ''
                        }
                    }
                }
                console.log(this.settings)
                this.groups_count--
            } 
        },

        selectTab(e, tabNumber, numberGroups) {
            let tabButton = e.target.parentElement
            if (e.target.tagName === 'LI') tabButton = e.target

            const key = 'groups_' + numberGroups + '_tab_active'

            this.settings[key] = tabNumber;
        },

        addTab(e, numberGroups) {
            const groupCountKey = 'groups_' + numberGroups + '_group_count_t-number'
            this.settings[groupCountKey]++

            const groupActiveKey = 'groups_' + numberGroups + '_group_' + this.settings[groupCountKey] + '_active'
            Vue.set(this.settings, groupActiveKey, true)

            const storiesCountKey = 'groups_' + numberGroups + '_group_' + this.settings[groupCountKey] + '_stories_count_t-number'
            Vue.set(this.settings, storiesCountKey, 1)

            const storyNumberkey = 'groups_' + numberGroups + '_group_' + this.settings[groupCountKey] + '_story_1_t-number'
            Vue.set(this.settings, storyNumberkey, false)

            this.settings['groups_' + numberGroups + '_tab_active'] = this.settings[groupCountKey]
        },

        delTab(e, numberGroups) {
            const groupCountKey = 'groups_' + numberGroups + '_group_count_t-number'
            if (this.settings[groupCountKey] > 1) {
                const regExp = new RegExp('^groups_' + numberGroups + '_group_' + this.settings[groupCountKey])

                for (const item in this.settings) {
                    if (this.settings.hasOwnProperty(item)) {
                        if (regExp.test(item)) {
                            console.log(item)
                            this.settings[item] = ''
                        }
                    }
                }

                this.settings[groupCountKey]--
                this.settings['groups_' + numberGroups + '_tab_active'] = this.settings[groupCountKey]
            } 
        },

        addStory(e, numberGroups, numberGroup) {
            const storiesCountKey = 'groups_' + numberGroups + '_group_' + numberGroup + '_stories_count_t-number'

            this.settings[storiesCountKey]++
            Vue.set(this.settings, storiesCountKey, this.settings[storiesCountKey])

            const storyNumberkey = 'groups_' + numberGroups + '_group_' + numberGroup + '_story_' + this.settings[storiesCountKey] + '_t-number'
            Vue.set(this.settings, storyNumberkey, false)
        },

        delStory(e, numberGroups, numberGroup) {
            const key = 'groups_' + numberGroups + '_group_' + numberGroup + '_stories_count_t-number'

            if (this.settings[key] > 1) {
                const regExp = new RegExp('^groups_' + numberGroups + '_group_' + numberGroup + '_story_' + this.settings[key])

                for (const item in this.settings) {
                    if (this.settings.hasOwnProperty(item)) {
                        if (regExp.test(item)) {
                            this.settings[item] = ''
                        }
                    }
                }

                this.settings[key]--
            } 
        },

        storyShow(e, numberGroups, numberGroup, numberStory) {
            const key = 'groups_' + numberGroups + '_group_' + numberGroup + '_story_' + numberStory + '_t-number'

            Vue.set(this.settings, key, !this.settings[key])
        },

        delImageProduct(e, key) {
            this.settings[key] = ''
        },

        checkImage(e) {
            const valueElem = e.target.parentElement.parentElement
            let hintError

            for (let index = 0; index < valueElem.children.length; index++) {
                const elem = valueElem.children[index]

                if (elem.className && /hint-error/gi.test(elem.className)) {
                    hintError = elem
                }
            }

            if (e.target.value && !/(png|jpe?g|gif|svg|webp)$/i.test(e.target.value)) {
                this.button_save_disabled = true
                this.error_image = true
                if (hintError) hintError.style.display = ''
            } else {
                this.button_save_disabled = false
                this.error_image = false
                if (hintError) hintError.style.display = 'none'
            }
        },

        checkVideo(e) {
            const valueElem = e.target.parentElement.parentElement
            let hintError

            for (let index = 0; index < valueElem.children.length; index++) {
                const elem = valueElem.children[index]

                if (elem.className && /hint-error/gi.test(elem.className)) {
                    hintError = elem
                }
            }

            if (e.target.value && !/(ogv|oga|ogx|ogg|mp4|webm|mkv)$/i.test(e.target.value)) {
                this.button_save_disabled = true
                this.error_video = true
                if (hintError) hintError.style.display = ''
            } else {
                this.button_save_disabled = false
                this.error_video = false
                if (hintError) hintError.style.display = 'none'
            }
        },

        pageReload() {
            setTimeout(function () {
                window.location.reload();
            }, 500);
        },
    },
    mounted: function () {
        axios
            .get(this.url + 'sitestories-settings/')
            .then(response => {
                const settingsDB = response.data.data.result

                // Привидение к числу свойств t-number
                for (const item in settingsDB) {
                    if (settingsDB.hasOwnProperty(item)) {
                        if (/_t-number/gi.test(item)) {
                            settingsDB[item] = Number(settingsDB[item])
                        }
                    }
                }

                const settingsMerge = Object.assign({}, this.settings, settingsDB)
                this.settings = settingsMerge
            })
            .catch(error => console.log(error))
            .finally(() => (this.loading = false))
    }

})