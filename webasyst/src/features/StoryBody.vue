<i18n src="./locales/common.json"></i18n>

<template>
    <div class="sitestories-stories__story-body alert" ref="story-body" v-if="!story['is_closed_settings']">
        <template v-if="vars['ui_version'] == 1">
            <a href="javascript:void(0);" class="back nowrap" v-on:click.prevent="closeStoryBody">←&nbsp;{{ $t('Back') }}</a>
        </template>

        <template v-if="vars['ui_version'] == 2">
            <a class="button rounded light-gray s-hidden-action" href="javascript:void(0);" v-on:click.prevent="closeStoryBody">{{ $t('Back') }}</a>
        </template>

        <div class="sitestories-stories__story-id">ID: <b>{{ story['id'] }}</b></div>
    
        <h6 style="margin-top: 20px;">{{ $t('Settings') }}</h6>

        <div class="fields">
            <div class="field">
                <div class="name">
                    {{ $t('State') }}
                </div>
                <div class="value">
                    <label>
                        <select v-model="story['state']">
                            <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                            <option value="enabled">{{ $t('Work') }}</option>
                            <option value="disabled">{{ $t('Do not work') }}</option>
                        </select>
                    </label>
                    <div class="hint">{{ $t('Enabling or disabling history.') }}</div>
                </div>
            </div>

            <div class="field">
                <div class="name">
                    {{ $t('Name') }}
                </div>
                <div class="value">
                    <label>
                        <input type="text" class="long" v-model="story['name']">
                    </label>
                    <div class="hint">{{ $t('The name should express the essence of the story in 1-2 words.') }}</div>
                </div>
            </div>

            <div class="field">
                <div class="name">
                    {{ $t('Speed ​​of history') }} {{ $t('(sec)') }} 
                </div>
                <div class="value">
                    <label>
                        <input type="number" min="1" v-model="story['story_speed']">
                    </label>
                    <div class="hint">{{ $t('History playback time') }}</div>
                </div>
            </div>

            <div class="field">
                <div class="name">
                    {{ $t('Darken the story') }}
                </div>
                <div class="value">
                    <label>
                        <input type="checkbox" v-model="story['story_darken']">
                    </label>
                    <div class="hint">{{ $t('A slight darkening of the story, used to highlight the light content.') }}</div>
                </div>
            </div>

            <div class="field">
                <div class="name">
                    {{ $t('Start of publication of the story') }}
                </div>
                <div class="value">
                    <label>
                        <input type="date" v-model="story['story_data_start']">
                    </label>
                    <label>
                        <input type="time" v-model="story['story_time_start']">
                    </label>
                </div>
            </div>

            <div class="field">
                <div class="name">
                    {{ $t('The end of the publication of the story') }}
                </div>
                <div class="value">
                    <label>
                        <input type="date" v-model="story['story_data_end']">
                    </label>
                    <label>
                        <input type="time" v-model="story['story_time_end']">
                    </label>
                </div>
            </div>

            <!-- <div class="field">
                <div class="name">
                    {{ $t('Custom CSS') }}
                </div>
                <div class="value">
                    <label>
                        <textarea rows="9" v-model="story['custom_css']"></textarea>
                    </label>
                    <div class="hint"><a href="javascript:void(0);" v-on:click.prevent="openPopupCssInstruction">{{ $t('Instruction') }}</a></div>
                </div>
            </div> -->
        </div>


        <h6>{{ $t('Content') }}</h6>

        <div class="fields">
            <div class="field">
                <div class="name">
                    {{ $t('Media story type') }}
                </div>
                <div class="value">
                    <label>
                        <select v-model="story['media_story_type']">
                            <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                            <option value="image">{{ $t('Image') }}</option>
                            <option value="video">{{ $t('Video') }}</option>
                        </select>
                    </label>
                    <div class="hint">{{ $t('The story can only be in the form of an image or a video clip.') }}</div>
                </div>
            </div>

            <div class="field" v-if="story['media_story_type'] === 'image'">
                <div class="name">
                    {{ $t('Image') }}
                </div>
                <div class="value">
                    <label>
                        <input type="file"
                            v-on:change="loadImage({
                                'e': $event,
                                'obj': story,
                                'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] + '/' + 'story' + '/' + story['id'],
                                'prop_name': 'image_name',
                                'prop_dir': 'image_dir',
                                'prop_path': 'image_path',
                                'prop_invalid_format': 'image_invalid_format',
                                'prop_invalid_name': 'image_invalid_name'
                            })"    
                        >
                    </label>
                    <div class="hint">{{ $t('The recommended size is 370px in width and 645px in height. But it can be anything at your discretion.') }}</div>
                    <div class="hint">{{ $t('Acceptable formats:') }} png, jpg, svg, webp</div>
                    <div class="hint hint-error" v-show="story['image_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                    <div class="hint hint-error" v-show="story['image_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                    <div class="image"
                        v-if="story['image_path']">
                        <img class="transparent-sprite"
                            :src="story['image_path']">
                        <br>
                        <a class="small delete-image" v-on:click.prevent="deleteImage({
                            'file_name': story['image_name'],
                            'obj': story,
                            'prop_name': 'image_name',
                            'prop_path': 'image_path',
                            'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] + '/' + 'story' + '/' + story['id'],
                            
                            })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                    </div>
                </div>
            </div>

            <div class="field" v-if="story['media_story_type'] === 'video'">
                <div class="name">
                    {{ $t('Video') }}
                </div>
                <div class="value">
                    <label>
                        <input type="file"
                            v-on:change="loadImage({
                                'e': $event,
                                'obj': story,
                                'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] + '/' + 'story' + '/' + story['id'],
                                'prop_name': 'image_name',
                                'prop_dir': 'image_dir',
                                'prop_path': 'image_path',
                                'load_type_file': 'video',
                                'prop_invalid_format': 'image_invalid_format',
                                'prop_invalid_name': 'image_invalid_name'
                            })"    
                        >
                    </label>
                    <div class="hint">{{ $t('The recommended size is 370px in width and 645px in height. But it can be anything at your discretion.') }}</div>
                    <div class="hint">{{ $t('Acceptable formats:') }} ogv, oga, ogx, ogg, mp4, webm, mkv</div>
                    <div class="hint hint-error" v-show="story['image_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                    <div class="hint hint-error" v-show="story['image_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                    <div class="image" v-if="story['image_name']">
                        <p>{{ story['image_name'] }}</p>
                        <a class="small delete-image" v-on:click.prevent="deleteImage({
                            'file_name': story['image_name'],
                            'obj': story,
                            'prop_name': 'image_name',
                            'prop_path': 'image_path',
                            'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] + '/' + 'story' + '/' + story['id'],
                            
                            })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                    </div>
                </div>
            </div>

            
            <div class="field" v-if="story['media_story_type'] === 'video'">
                <div class="name">
                    {{ $t('Video poster') }}
                </div>
                <div class="value">
                    <label>
                        <input type="file"
                            v-on:change="loadImage({
                                'e': $event,
                                'obj': story,
                                'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] + '/' + 'story' + '/' + story['id'],
                                'prop_name': 'video_poster_name',
                                'prop_dir': 'video_poster_dir',
                                'prop_path': 'video_poster_path',
                                'prop_invalid_format': 'video_poster_invalid_format',
                                'prop_invalid_name': 'video_poster_invalid_name'
                            })"    
                        >
                    </label>
                    <div class="hint">{{ $t('The recommended size is 370px in width and 645px in height. But it can be anything at your discretion.') }}</div>
                    <div class="hint">{{ $t('Acceptable formats:') }} png, jpg, svg, webp</div>
                    <div class="hint hint-error" v-show="story['video_poster_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                    <div class="hint hint-error" v-show="story['video_poster_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                    <div class="image"
                        v-if="story['video_poster_path']">
                        <img class="transparent-sprite"
                            :src="story['video_poster_path']">
                        <br>
                        <a class="small delete-image" v-on:click.prevent="deleteImage({
                            'file_name': story['video_poster_name'],
                            'obj': story,
                            'prop_name': 'video_poster_name',
                            'prop_path': 'video_poster_path',
                            'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] + '/' + 'story' + '/' + story['id'],
                            
                            })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="name">
                    {{ $t('Type content') }}
                </div>
                <div class="value">
                    <label>
                        <select v-model="story['story_type']">
                            <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                            <option value="simple">{{ $t('Text-graphic') }}</option>
                            <option value="product">{{ $t('Product') }}</option>
                            <option value="product-collection">{{ $t('Product collection') }}</option>
                            <option value="product-list" v-if="rule_params['stories']['stories_type'] === 'custom'">{{ $t('Product list') }}</option>
                        </select>
                    </label>
                    <div class="hint">{{ $t('The contents of the story.') }}</div>
                </div>
            </div>

            <div class="field" v-if="story['story_type'] === 'simple'">
                <div class="name">
                    {{ $t('Vertical centering') }}
                </div>
                <div class="value">
                    <label>
                        <select v-model="story['content_vertical_position']">
                            <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                            <option value="top">{{ $t('Top') }}</option>
                            <option value="center">{{ $t('Center') }}</option>
                            <option value="Bottom">{{ $t('Bottom') }}</option>
                        </select>
                    </label>
                    <div class="hint">{{ $t('Vertical centering of content.') }}</div>
                </div>
            </div>

            <c-blocks v-if="story['story_type'] == 'simple'" :storyObj="story" :group="group"></c-blocks>

            <template  v-if="story['story_type'] === 'product-collection' || story['story_type'] === 'product-list'">
                <div class="field">
                    <div class="name">
                        {{ $t('Product List ID') }}
                    </div>
                    <div class="value">
                        <label>
                            <input type="text" v-model="story['list_id']" v-on:change="getProductsCollection({
                                    'e': $event,
                                    'story': story,
                                })">
                        </label>
                        <span class="smaller" v-if="story['products']">{{ $t('Products') }}: {{ story['products'].length }}</span>
                        <div class="hint" v-show="rule_params['stories']['stories_type'] === 'seo'"><a href="javascript:void(0);" v-on:click.prevent="openPopupShoppingTag"><b>{{ $t('Shopping tag for SEO product story') }}</b></a></div>
                        <div class="hint hint-error" v-show="story['is_error_list_id']">{{ $t('Non-existent product list ID') }}</div>
                    </div>
                </div>
            </template>

            <template  v-if="story['story_type'] === 'product'">
                <div class="field">
                    <div class="name">
                        {{ $t('Product ID') }}
                    </div>
                    <div class="value">
                        <label>
                            <input type="text" v-model="story['product_id']" v-on:change="getProduct({
                                    'e': $event,
                                    'story': story,
                                })">
                        </label>
                        <p class="smaller" v-if="story['product']">{{ story['product']['name'] }}</p>
                        <div class="hint" v-show="rule_params['stories']['stories_type'] === 'seo'"><a href="javascript:void(0);" v-on:click.prevent="openPopupShoppingTag"><b>{{ $t('Shopping tag for SEO product story') }}</b></a></div>
                        <div class="hint hint-error" v-show="story['is_error_product_id']">{{ $t('Non-existent product ID') }}</div>
                    </div>
                </div>
            </template>

        </div>

    </div>
</template>
 
<script>
// import { form } from '../widgets'
import { mapGetters, mapMutations } from 'vuex'
import blocks from './content/Blocks.vue'

//import draggable from 'vuedraggable'

export default {
    name: 'StoryBody',
    props: ['story', 'group'],
    components: {
        'c-blocks': blocks,
    },

    methods: {
        closeStoryBody() {
            this.setStateStoryPreviews('show')
            this.story['is_closed_settings'] = true
        },

        ...mapMutations(['loadImage', 'deleteImage', 'setStateStoryPreviews', 'getProduct', 'getProductsCollection', 'openPopupCssInstruction', 'openPopupShoppingTag'])
    },

    computed: {
        ...mapGetters(['rule_params', 'rules_name', 'vars'])
    },

    created() {
        this.story['is_closed_settings'] = true
        //this.$store.dispatch('getSettings')
    },

    mounted() {
        const locale = document.querySelector('#app-locale').value.slice(0, 2)
        this.$i18n.locale = locale
    }
}
</script>

<style scoped>
    .sitestories-stories__story-body-body {
        display: none;
        background-color: red;
    }

    .sitestories-stories__story-body_open .sitestories-stories__story-body-body {
        display: block;
    }

    .sitestories-stories__story-body_open . {
        display: none;
    }

    .ui-1 .sitestories-stories__story-body {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 20px;
    }

    .sitestories-stories__story-body {
        position: relative;
    }


    .sitestories-stories__story-id {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
    }

    .ui-1 .fields {
        padding-left: 10px;
        margin-bottom: 20px;
    }
</style>
