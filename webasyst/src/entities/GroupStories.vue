<i18n src="./locales/common.json"></i18n>

<template>
    <div class="sitestories-group__group" ref="group">
        <div class="sitestories-group__preview">
            <div class="sitestories-group__preview-image">
                <img v-if="group['image_path']" class="sitestories-group__preview-image-src" :src="group['image_path']" alt="preview image"/>
            </div>

            <div class="sitestories-group__preview-block">
                <div class="sitestories-group__title">{{ group['title'] ? group['title'] : $t('Title') }}</div>
                <template v-if="vars['ui_version'] == 1">
                    <a class="inline-link sitestories-group__button-edit" href="javascript:void(0);" v-on:click.prevent="openGroupStoriesBody">
                        <i class="icon16 edit"></i>
                        <b><i> {{ $t('Edit') }}</i></b>
                    </a>
                    <a class="inline-link sitestories-group__button-remove" href="javascript:void(0);" v-on:click.prevent="removeGroupStories">
                        <i class="icon16 delete"></i>
                        <b><i>{{ $t('Remove') }}</i></b>
                    </a>
                </template>

                <template v-if="vars['ui_version'] == 2">
                    <a class="button rounded light-gray sitestories-group__button-edit" href="javascript:void(0);" v-on:click.prevent="openGroupStoriesBody">
                        <i class="fas fa-pencil-alt text-blue"></i> {{ $t('Edit') }}
                    </a>
                    <a class="button rounded light-gray sitestories-group__button-remove" href="javascript:void(0);" v-on:click.prevent="removeGroupStories">
                        <i class="fas fa-trash-alt text-red"></i> {{ $t('Remove') }}
                    </a>
                </template>
            </div>
            
        </div>
        

        <div class="sitestories-group__body alert">
            <div class="sitestories-group__button-cancel-box">
                <template v-if="vars['ui_version'] == 1">
                    <a href="javascript:void(0);" class="back nowrap" v-on:click.prevent="closeGroupStoriesBody">←&nbsp;{{ $t('Back') }}</a>
                </template>

                <template v-if="vars['ui_version'] == 2">
                    <a class="button rounded light-gray sitestories-group__buBack" href="javascript:void(0);"  v-on:click.prevent="closeGroupStoriesBody">{{ $t('Back') }}</a>
                </template>
            </div>

            <div class="sitestories-group__id small">ID: <b>{{ group.id }}</b></div>

            <div class="sitestories-group__settings-block">
                <h4>{{ $t('Group of stories') }}</h4>
                <div class="field">
                    <div class="name">
                        {{ $t('State') }}
                    </div>
                    <div class="value">
                        <label>
                            <select v-model="group['state']">
                                <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                <option value="enabled">{{ $t('Work') }}</option>
                                <option value="disabled">{{ $t('Do not work') }}</option>
                            </select>
                        </label>
                        <div class="hint">{{ $t('Enabling or disabling a group of stories.') }}</div>
                    </div>
                </div>

                <div class="field">
                    <div class="name">
                        {{ $t('Title') }}
                    </div>
                    <div class="value">
                        <label>
                            <input type="text" v-model="group['title']">
                        </label>
                    </div>
                </div>

                <div class="field">
                    <div class="name">
                        {{ $t('Image') }}
                    </div>
                    <div class="value">
                        <label>
                            <input type="file"
                                v-on:change="loadImage({
                                    'e': $event,
                                    'obj': group,
                                    'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'],
                                    'prop_name': 'image_name',
                                    'prop_dir': 'image_dir',
                                    'prop_path': 'image_path',
                                    'prop_invalid_format': 'image_invalid_format',
                                    'prop_invalid_name': 'image_invalid_name'
                                })"    
                            >
                        </label>
                        <div class="hint">{{ $t('The image used as the cover for a group of stories.') }}</div>
                        <div class="hint">{{ $t('The recommended size is in the range of 200-300 px in width and height.') }}</div>
                        <div class="hint">{{ $t('Acceptable formats:') }} png, jpg, svg, webp</div>
                        <div class="hint hint-error" v-show="group['image_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                        <div class="hint hint-error" v-show="group['image_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                        <div class="image"
                            v-if="group['image_name']">
                            <img class="transparent-sprite"
                                :src="vars['url_public_files'] + '/' + group['image_dir'] + '/' + group['image_name']">
                            <br>
                            <a class="small delete-image" v-on:click.prevent="deleteImage({
                                'file_name': group['image_name'],
                                'obj': group,
                                'prop_name': 'image_name',
                                'prop_path': 'image_path',
                                'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'],
                                
                                })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                        </div>
                    </div>
                </div>

                <div class="field" v-if="rule_params['stories']['stories_type'] === 'seo'">
                    <div class="name">
                        {{ $t('Poster') }}
                    </div>
                    <div class="value">
                        <label>
                            <input type="file"
                                v-on:change="loadImage({
                                    'e': $event,
                                    'obj': group,
                                    'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'],
                                    'prop_name': 'poster_name',
                                    'prop_dir': 'poster_dir',
                                    'prop_path': 'poster_path',
                                    'prop_invalid_format': 'poster_invalid_format',
                                    'prop_invalid_name': 'poster_invalid_name'
                                })"    
                            >
                        </label>
                        <div class="hint">{{ $t('The image used as the cover for a group of stories.') }}</div>
                        <div class="hint">{{ $t('The size must be at least 640 x 853 pixels and maintain an aspect ratio of 3:4.') }}</div>
                        <div class="hint">{{ $t('Acceptable formats:') }} png, jpg, svg, webp</div>
                        <div class="hint hint-error" v-show="group['poster_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                        <div class="hint hint-error" v-show="group['poster_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                        <div class="image"
                            v-if="group['poster_name']">
                            <img class="transparent-sprite"
                                :src="vars['url_public_files'] + '/' + group['poster_dir'] + '/' + group['poster_name']">
                            <br>
                            <a class="small delete-image" v-on:click.prevent="deleteImage({
                                'file_name': group['poster_name'],
                                'obj': group,
                                'prop_name': 'poster_name',
                                'prop_path': 'poster_path',
                                'dir': 'img/stories' + '/' + rule_params['stories_id']+ '/group/' + group['id'],
                                
                                })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                        </div>
                    </div>
                </div>

                <h5>{{ $t('Stories') }}</h5>

                <div class="field">
                    <div class="name">
                        {{ $t('Creating stories') }}
                    </div>
                    <div class="value">
                        <label>
                            <select v-model="group['creating_stories']" v-on:change="checkStories">
                                <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                <option value="manually">{{ $t('Manually') }}</option>
                                <option value="auto_based_list">{{ $t('Atomatically based on the list') }}</option>
                            </select>
                        </label>
                        <div class="hint"><b>{{ $t('Attention! Changing this option resets the created stories.') }}</b></div>
                    </div>
                </div>

                <template v-if="group['creating_stories'] === 'manually'">
                    <div class="wa-list sitestories-group__story-list">
                        <table class="zebra bigdata wa-tr-hover wa-nobreak-line" v-show="group['story_list'] && stateStoryPreviews === 'show'">
                            <thead>
                                <tr>
                                    <th class="min-width"></th>
                                    <th>
                                        <a href="javascript:void(0)" rel="name" class="wa-sort">
                                            <span>{{ $t('Name') }}</span>
                                        </a>
                                    </th>
                                    <th>{{ $t('Type content') }}</th>
                                    <th>{{ $t('Status') }}</th>
                                    <th class="align-right">
                                        <a href="javascript:void(0)" class="wa-sort">
                                            <span>{{ $t('Settings') }}</span>
                                        </a>
                                    </th>
                                </tr>
                            </thead>

                            <draggable
                                :list="group['story_list']"
                                @start="drag = true" 
                                @end="drag = false" 
                                v-bind="dragOptions"
                                tag="tbody" 
                                draggable=".sitestories-stories__story" 
                                class="sitestories-group__story-preview-list" 
                                :disabled="false"
                            >
                                <c-story-preview v-for="(story, index_story) in group['story_list']" :key="story.id" :story="story" :group="group" :index_story="index_story"></c-story-preview>
                            </draggable>
                           
                        </table>

                        <p v-show="group['story_list'].length > 1" class="gray small"><i>{{ $t('Use drag and drop to change sorting') }}</i></p>

                        <div class="sitestories-group__story-body-list">
                            <c-story-body v-for="(story, index_story) in group['story_list']" :key="story.id" :story="story" :group="group"></c-story-body>
                        </div>

                        <a class="nowrap button rounded light-gray" :class="group['story_list'].length == 0 ? 'pulsar mt30' : ''" href="javascript:void(0);" v-on:click.prevent="addStory" v-show="stateStoryPreviews === 'show'">
                            <i class="fas fa-copy text-gray custom-mr-4"></i> {{ $t('Create a story') }}
                        </a>
                    </div>
                </template>

                <template  v-if="group['creating_stories'] === 'auto_based_list'">
                    <div class="field">
                        <div class="name">
                            {{ $t('Product List ID') }}
                        </div>
                        <div class="value">
                            <label>
                                <input type="text" v-model="group['list_id']" v-on:change="getListProducts({
                                    'e': $event,
                                    'group': group,
                                })">
                            </label>
                            <span class="smaller">{{ $t('Products') }}: {{ group['story_list'].length }}</span>
                            <div class="hint" v-show="rule_params['stories']['stories_type'] === 'seo'"><a href="javascript:void(0);" v-on:click.prevent="openPopupShoppingTag"><b>{{ $t('Shopping tag for SEO product story') }}</b></a></div>
                            <div class="hint hint-error" v-show="group['is_error_list_id']">{{ $t('Non-existent product list ID') }}</div>
                        </div>
                    </div>
                </template>
                
            </div>
            
        </div>
    </div>
</template>
 
<script>
import { storyPreview, storyBody } from '../features'
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios'

import draggable from 'vuedraggable'

export default {
    data() {
        return {
        }
    },
    name: 'groupStories',
    props: ['group', 'index_group', 'sss1'],
    components: {
        draggable,
        'c-story-preview': storyPreview,
        'c-story-body': storyBody
    },

    methods: {
        openGroupStoriesBody() {
            const groupEl = this.$refs['group']
            groupEl.classList.add('sitestories-group__group_open')
            document.querySelector('.sitestories-stories__button-plus').style.display = 'none'
            document.querySelector('#sitestories-group-sorting').classList.add('d-none')

            for (const child of groupEl.parentElement.children) {
                if (child.className && /sitestories-group__group/.test(child.className) && !/sitestories-group__group_open/.test(child.className)) {
                    child.classList.add('sitestories-group__group_close')                 
                }
            }
        },

        closeGroupStoriesBody() {
            const groupEl = this.$refs['group']

            for (const child of groupEl.parentElement.children) {
                if (child.className && /sitestories-group__group/.test(child.className) && !/sitestories-group__group_open/.test(child.className)) {
                    child.classList.remove('sitestories-group__group_close')                 
                }
            }

            groupEl.classList.remove('sitestories-group__group_open')
            document.querySelector('.sitestories-stories__button-plus').style.display = ''
            document.querySelector('#sitestories-group-sorting').classList.remove('d-none')
        },

        removeGroupStories() {
            this.rule_params['stories']['groups_stories'].splice(this.index_group, 1)
        },

        addStory() {
            this.group['story_list'].push({
                'id': 'id' + this.uid(),
                'state': 'enabled',
                'media_story_type': '',
                'content_vertical_position': '',
                'story_type': '',
                'is_closed_settings': true,
                'text_graphic_blocks' : []
            })
        },

        uid() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        },

        getCookie(name) {
            var matches = document.cookie.match(
                new RegExp(
                    "(?:^|; )" +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
                )
            );
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        checkStories() {
            this.group['story_list'] = []
            this.group['list_id'] = ''
        },

        ...mapMutations(['loadImage', 'deleteImage', 'getListProducts', 'openPopupShoppingTag'])
    },

    computed: {
        dragOptions() {
            return {
                animation: 200,
                group: "story_list",
                ghostClass: "ghost"
            };
        },
        ...mapGetters(['rule_params', 'rules_name', 'vars', 'stateStoryPreviews'])
    },

    created() {
        //this.$store.dispatch('getSettings')
    },

    mounted() {
        const locale = document.querySelector('#app-locale').value.slice(0, 2)
        this.$i18n.locale = locale
    }
}
</script>

<style scoped>
    .sitestories-group__preview {
        margin-right: 10px;
    }
    
    .sitestories-group__preview:last-child {
        margin-right: 0;
    }

    .sitestories-group__id {
        position: absolute;
        right: 20px;
        top: 10px;
    }
    
    .sitestories-group__preview-image {
        width: 112px;
        height: 160px;
        background-color: #ccc;
        cursor: pointer;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        margin: auto;
    }

    .sitestories-group__preview-image:after {
        content: 'NO IMAGE';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        display: block;
        text-align: center;
        width: 100%;
        z-index: 10;
    }

    .sitestories-group__title {
        text-align: center;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .ui-1 .sitestories-group__title {
        margin-top: 5px;
    }

    .ui-1 .sitestories-group__button-edit {
        display: block;
        text-align: center;
        margin-bottom: 7px;
    }

    .ui-1 .sitestories-group__button-remove {
        display: block;
        text-align: center;
    }

    .ui-2 .sitestories-group__button-edit {
        margin-bottom: 5px;
        display: block;
    }

    .ui-2 .sitestories-group__button-remove {
        display: block;
    }

    .ui-1 .sitestories-group__group {
        display: inline-block;
        margin-bottom: 20px;
        margin-right: 10px;
    }

    .ui-1 .sitestories-group__story-list {
        margin-top: 30px;
    }

    .ui-1 .sitestories-group__story-list table {
        margin-bottom: 30px;
    }

    .sitestories-group__body {
        background-color: #fff;
        display: none;
    }

    .ui-1 .sitestories-group__body {
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .sitestories-group__group_close {
        display: none;
    }

    .ui-1 .sitestories-group__group_close {
        display: none;
    }

    .sitestories-group__group_open .sitestories-group__body {
        display: block;
    }

    .sitestories-group__button-cancel-box {
        text-align: left;
        margin: 10px;
    }

    .sitestories-group__settings-block {
        padding: 10px
    }

    .sitestories-group__group_open .sitestories-group__preview {
        display: none;
    }

    .sitestories-group__preview-image-src {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        position: relative;
        z-index: 100;
    }
    
</style>
