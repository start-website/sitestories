<i18n src="./locales/common.json"></i18n>

<template>
    <div>
        <div class="sitestories-settings-content">
            <div class="s-fields-wrapper" v-if="rule_params && rule_params['stories']">
                <div class="sitestories-settings-block">
                    <h4>{{ $t('General settings') }}</h4>
                    <div class="fields-group">
                        <div class="field">
                            <div class="name">
                                {{ $t('Type of stories') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select :name="rules_name + '[rule_params][stories][stories_type]'" v-model="rule_params['stories']['stories_type']" required>
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="seo" v-if="vars['is_premium']">{{ $t('SEO stories') }}</option>
                                        <option value="seo" v-else disabled>{{ $t('SEO stories') }} ({{ $t('Only for premium version') }})</option>
                                        <option value="custom">{{ $t('Custom stories') }}</option>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('"SEO stories" - made on the basis of the "APM" format. Shown in Google search results.') }}</div>
                                <div class="hint">{{ $t('"Custom stories" - made on the basis of HTML. Shown only on the site.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Theme of stories') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select :name="rules_name + '[rule_params][stories][stories_theme]'" v-model="rule_params['stories']['stories_theme']" required>
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="instagram">{{ $t('Instagram') }}</option>
                                        
                                        <template v-if="vars['is_premium']">
                                            <option value="facebook">{{ $t('Facebook') }}</option>
                                            <option value="samokat">{{ $t('Samokat') }}</option>
                                            <option value="vkontakte">{{ $t('VKontakte') }}</option>
                                            <option value="whatsapp">{{ $t('WhatsApp') }}</option>
                                        </template>
                                        <template v-else>
                                            <option value="facebook" disabled>{{ $t('Facebook') }} ({{ $t('Only for premium version') }})</option>
                                            <option value="samokat" disabled>{{ $t('Samokat') }} ({{ $t('Only for premium version') }})</option>
                                            <option value="vkontakte" disabled>{{ $t('VKontakte') }} ({{ $t('Only for premium version') }})</option>
                                            <option value="whatsapp" disabled>{{ $t('WhatsApp') }} ({{ $t('Only for premium version') }})</option>
                                        </template>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Design theme. Reminiscent of famous platforms.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Lang') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select :name="rules_name + '[rule_params][stories][lang]'" v-model="rule_params['stories']['lang']" required>
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="ru">{{ $t('ru') }}</option>
                                        <option value="en">{{ $t('en') }}</option>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Language of stories.') }}</div>
                            </div>
                        </div>

                        <div class="field" v-if="rule_params['stories']['stories_type'] === 'seo'">
                            <div class="name">
                                {{ $t('Logo') }}
                            </div>
                            <div class="value">
                                <label>
                                    <input type="hidden" :name="rules_name + '[rule_params][stories][logo_path]'" v-model="rule_params['stories']['logo_path']">
                                    <input type="hidden" :name="rules_name + '[rule_params][stories][logo_name]'" v-model="rule_params['stories']['logo_name']">
                                    <input type="file"
                                        v-on:change="loadImage({
                                            'e': $event,
                                            'obj': rule_params['stories'],
                                            'dir': 'img/stories' + '/' + rule_params['stories_id'],
                                            'prop_name': 'logo_name',
                                            'prop_dir': 'logo_dir',
                                            'prop_path': 'logo_path',
                                            'prop_invalid_format': 'logo_invalid_format',
                                            'prop_invalid_name': 'logo_invalid_name'
                                        })"    
                                    >
                                </label>
                                <div class="hint">{{ $t('Web Story publisher logo image URL. The logo image must be greater than or equal to 96x96 pixels and maintain a 1:1 aspect ratio. This logo appears in the right corner at the top of the poster image on platforms that support Web Stories.') }}</div>
                                <div class="hint">{{ $t('Acceptable formats:') }} png, jpg, svg, webp</div>
                                <div class="hint hint-error" v-show="rule_params['stories']['logo_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                                <div class="hint hint-error" v-show="rule_params['stories']['logo_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                                <div class="image"
                                    v-if="rule_params['stories']['logo_path']">
                                    <img class="transparent-sprite"
                                        :src="rule_params['stories']['logo_path']">
                                    <br>
                                    <a class="small delete-image" v-on:click.prevent="deleteImage({
                                        'file_name': rule_params['stories']['logo_name'],
                                        'obj': rule_params['stories'],
                                        'prop_name': 'logo_name',
                                        'prop_path': 'logo_path',
                                        'dir': 'img/stories' + '/' + rule_params['stories_id'],
                                        
                                        })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="sitestories-settings-block">
                    <h4>{{ $t('Preview Settings') }}</h4>
                    <div class="fields-group">
                        <div class="field">
                            <div class="name">
                                {{ $t('Distance between previews') }} (px)
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" min="0" :name="rules_name + '[rule_params][stories][distance_between_previews]'" v-model="rule_params['stories']['distance_between_previews']" required>
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Align Preview') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select :name="rules_name + '[rule_params][stories][previews_position]'" v-model="rule_params['stories']['previews_position']" required>
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="center">{{ $t('Center') }}</option>
                                        <option value="left">{{ $t('Left') }}</option>
                                        <option value="light">{{ $t('Right') }}</option>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Horizontal positioning of previews.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Preview container width') }} (px)
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" min="0" :name="rules_name + '[rule_params][stories][preview_container_width]'" v-model="rule_params['stories']['preview_container_width']" required>
                                </label>
                                <div class="hint">{{ $t('Maximum width of the story preview container.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Maximum preview width') }} (px)
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" min="0" :name="rules_name + '[rule_params][stories][max_preview_width]'" v-model="rule_params['stories']['max_preview_width']" required>
                                </label>
                                <div class="hint">{{ $t('Maximum width of story previews. Exceeding this width will add scrolling.') }}</div>
                            </div>
                        </div>

                        <div class="field" v-if="rule_params['stories']['stories_theme'] === 'whatsapp'">
                            <div class="name">
                                {{ $t('Maximum preview height') }} (px)
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" min="0" :name="rules_name + '[rule_params][stories][max_preview_height]'" v-model="rule_params['stories']['max_preview_height']" required>
                                </label>
                                <div class="hint">{{ $t('Maximum height of story previews.') }}</div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="sitestories-settings-block">
                    <h4>{{ $t('Various') }}</h4>
                    <div class="fields-group">
                        <div class="field">
                            <div class="name">
                                {{ $t('Custom CSS') }}
                            </div>
                            <div class="value">
                                <label>
                                    <textarea :name="rules_name + '[rule_params][stories][custom_css]'" v-model="rule_params['stories']['custom_css']"></textarea>
                                </label>
                                <div class="hint">{{ $t('Customizable CSS to eliminate compatibility issues with themes, if any') }}</div>
                                <div class="hint"><a href="javascript:void(0);" v-on:click.prevent="openPopupCssInstruction">{{ $t('Instruction') }}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <c-stories></c-stories>

            </div>
        </div>
    </div>
</template>
 
<script>
import { stories } from '../widgets'
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'app',
    components: {
        'c-stories': stories,
    },

    methods: {
        ...mapMutations(['loadImage', 'deleteImage', 'openPopupCssInstruction'])
    },

    computed: {
        ...mapGetters(['settings', 'rule_params', 'rules_name', 'vars'])
    },

    created() {
        this.$store.dispatch('getSettings')
    },

    mounted() {
        const locale = document.querySelector('#app-locale').value.slice(0, 2)
        this.$i18n.locale = locale
        setTimeout(() => {
            document.querySelector('.sitestories-spinner').style.display = 'none'
        }, 300);
    }
}
</script>

<style>
    .field {
        margin-bottom: 10px;
    }

    .ui-1 .alert {
        padding: 10px;
        margin-bottom: 20px;
    }

    .image {
        max-width: 200px;
    }

    .image img {
        width: 100%;
    }

    .mt75 {
        margin-top: 75px;
    }

    .mt30 {
        margin-top: 30px;
    }

    .d-none {
        display: none;
    }

    .sitestories-settings-block {
        margin-bottom: 20px;
    }

    .fields-group {
        padding: 5px 20px;
    }
</style>