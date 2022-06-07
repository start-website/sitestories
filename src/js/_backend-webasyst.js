var el = '[data-content-stories="' + content_id + '"]';
var prop = {};
var rule_params;

if (params.rule) {
    if (params.rule.rule_params) {
        rule_params = params.rule.rule_params

        if (params.rule.rule_params.stories) {
            prop = params.rule.rule_params.stories;
        }
    }
}

var app = new Vue({
    delimiters: ['%%', '%%'],
    el: el,
    data: {
        path_public_files: varsPlugin.path_public_files,
        shop_url: varsPlugin.shop_url,
        custom_css_instruction: false,
        mobile_fields: false,
        loading: true,
        button_save_disabled: false,
        error_image: false,
        error_video: false,
        drag: false,
        group_previews_active: true,
        custom_css: '',
        rule_params: rule_params ? rule_params : {
            stories: {
                bottom_indent: 0,
                preview_height: 200,
                width_group: 150,
                margin_group: 0,
                round_corners: 0,
                stroke_color: 'royalblue',
                group_count: ['1'],
                group_active: [],
                story_active: [],

                bottom_indent_mobile: 0,
                preview_height_mobile: 200,
                width_group_mobile: 150,
                margin_group_mobile: 0,
                round_corners_mobile: 0,
                stroke_color_mobile: 'royalblue',
                swipe_movement: 'horizontally',

                group_1: {
                    story_count: ['1'],
                    group_content_active: false,
                    story_1: {
                        story_content_active: false,
                        story_title: '',
                        story_desc: '',
                        text_button: '',
                        css_button: '',
                        link: '',
                        start_date: '',
                        start_date_time: '',
                        end_date: '',
                        end_date_time: '',
                    }
                }
            },
        },

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

        json: function (value) {
            if (!value) return ''
            value = JSON.parse(value)
            return value
        }
    },
    methods: {
        addGroup() {
            function getMaxOfArray(numArray) {
                return Math.max.apply(null, numArray);
            }

            var uniq_key = getMaxOfArray(this.rule_params['stories']['group_count']) + 1

            this.rule_params['stories']['group_count'].push(uniq_key)
            Vue.set(this.rule_params['stories'], ['group_' + uniq_key], {
                story_count: ['1'],
                group_content_active: false,
                story_1: {
                    story_content_active: false,
                    story_title: '',
                    story_desc: '',
                    text_button: '',
                    css_button: '',
                    link: '',
                    start_date: '',
                    start_date_time: '',
                    startend_time: '',
                    startend_time_time: '',
                }
            })
        },

        delGroup() {
            if (this.rule_params['stories']['group_count'].length > 1) {
                this.rule_params['stories']['group_count'].pop()
            }
        },

        activeGroupContent(e, group_item) {
            this.group_previews_active = false
            Vue.set(this.rule_params['stories']['group_' + group_item], 'group_content_active', true)
        },

        disableGroupContent(e, group_item) {
            this.group_previews_active = true
            Vue.set(this.rule_params['stories']['group_' + group_item], 'group_content_active', false)
        },

        activeStoryContent(e, group_item, story_item) {
            Vue.set(this.rule_params['stories']['group_' + group_item]['story_' + story_item], 'story_content_active', true)
        },

        disableStoryContent(e, group_item, story_item) {
            e.stopPropagation()
            Vue.set(this.rule_params['stories']['group_' + group_item]['story_' + story_item], 'story_content_active', false)
        },

        addStory(e, group_item) {
            var story_count = this.rule_params['stories']['group_' + group_item]['story_count'].length
            this.rule_params['stories']['group_' + group_item]['story_count'].push(story_count + 1)

            Vue.set(this.rule_params['stories']['group_' + group_item], 'story_' + (story_count + 1), {
                story_content_active: false,
            })
        },

        delStory(e, group_item) {
            if (this.rule_params['stories']['group_' + group_item]['story_count'].length > 1) {
                this.rule_params['stories']['group_' + group_item]['story_count'].pop()
            }
        },


        loadImage(e, obj, key) {
            var file_name = e.target.files[0].name
            Vue.set(obj, key + '_format', false)
            Vue.set(obj, key + '_name', false)

            var type_file = 'image'

            if (/^video_story$/.test(key)) type_file = 'video'

            if (!/(png|jpe?g|gif|svg|webp)$/i.test(file_name) && type_file !== 'video') {
                Vue.set(obj, key + '_format', true)
                return;
            }

            if (!/(ogv|oga|ogx|ogg|mp4|webm|mkv)$/i.test(file_name) && type_file === 'video') {
                Vue.set(obj, key + '_format', true)
                return;
            }

            if (/( |#|%|&|{|}|\\\|<|>|\?|\/|\$|:|@|\+|`|\||=)/i.test(file_name)) {
                Vue.set(obj, key + '_name', true)
                return;
            }

            var file = (e.target.files ? e.target.files[0] : null);

            if (!file) return;

            function getCookie(name) {
                let matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }

            var data = new FormData();
            data.append('image', file);
            data.append('type_file', type_file);
            data.append('_csrf', getCookie('_csrf'));

            var url = this.shop_url + '?plugin=sitestories&module=marketing&action=UploadImage'

            axios({
                method: 'post',
                url: url,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('sitestories uploaded file: ', response);
                    Vue.set(obj, key, file_name)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        delImage(e, obj, key) {
            var file_name = obj[key]

            if (!file_name) return

            function getCookie(name) {
                let matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }

            var data = new FormData();
            data.append('file_name', file_name);
            data.append('_csrf', getCookie('_csrf'));

            var url = this.shop_url + '?plugin=sitestories&module=marketing&action=DelImage'

            axios({
                method: 'post',
                url: url,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('sitestories del file: ', response);
                    Vue.set(obj, key, '')
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    },
    created: function () {

    },
    beforeCreate: function () {
        if (rule_params) {
            function isObject(obj) {
                if (obj.constructor.name === 'Object' && obj !== null && obj !== 'function') {
                    return true
                }
            }

            function findKey(object, target_key, func) {
                const reg = new RegExp('^' + target_key)

                for (const key in object) {
                    if (Object.hasOwnProperty.call(object, key)) {
                        if (reg.test(key)) {
                            return func(object, key)
                        } else {
                            if (isObject(object[key])) {
                                rule_params.stories = findKey(object[key], target_key, func)
                            }
                        }
                    }
                }

                return object
            }

            rule_params.stories = findKey(rule_params.stories, 'group_count', function (object, key) {
                object[key] = JSON.parse(object[key])
                return object
            })

            rule_params.stories = findKey(rule_params.stories, 'story_count', function (object, key) {
                object[key] = JSON.parse(object[key])
                return object
            })

            rule_params.stories = findKey(rule_params.stories, 'group_content_active', function (object, key) {
                object[key] = JSON.parse(object[key])
                return object
            })

            rule_params.stories = findKey(rule_params.stories, 'story_content_active', function (object, key) {
                object[key] = JSON.parse(object[key])
                return object
            })
        }
    },
})
