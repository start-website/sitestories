<i18n src="./locales/common.json"></i18n>

<template>
    <tr class="sitestories-stories__story" ref="story">
        <td class="align-center min-width sitestories-stories__story-preview-elem">
            <a href="javascript:void(0)">
                <i class="fas fa-mobile text-black"></i>
            </a>
        </td>
        <td class="sitestories-stories__story-preview-elem">
            <a href="javascript:void(0)" class="" v-on:click.prevent="openStoryBody">{{ story['name'] ? story['name'] : 'Story name' }}
                <span class="hint">{{ $t('story') }}</span>
            </a>
        </td>
        <td class="sitestories-stories__story-preview-elem">
            <span>{{ story['story_type'] }}</span>
        </td>
        <td class="sitestories-stories__story-preview-elem">
            <a href="javascript:void(0)">
                <span style="color:green;" v-if="story['state'] === 'enabled'">{{ $t('Working') }}</span>
                <span style="color:red;" v-else>{{ $t('Stopped') }}</span>
            </a>
        </td>
        <td class="align-right sitestories-stories__story-preview-elem">
            <template v-if="vars['ui_version'] == 1">
                <a class="inline-link" href="javascript:void(0);" style="display: inline-block;" v-on:click.prevent="openStoryBody">
                    <i class="icon16 edit"></i>
                </a>
                <a class="inline-link" href="javascript:void(0);" style="display: inline-block;" v-on:click.prevent="removeStory">
                    <i class="icon16 delete"></i>
                </a>
            </template>

            <template v-if="vars['ui_version'] == 2">
                <a class="inline-link" href="javascript:void(0);" v-on:click.prevent="openStoryBody"><b><i class="fas fa-cog"></i></b></a>
                <a class="inline-link" href="javascript:void(0);" v-on:click.prevent="removeStory"><b><i class="fas fa-trash"></i></b></a>
            </template>
        </td>
    </tr>
</template>
 
<script>
// import { form } from '../widgets'
import { mapGetters, mapMutations } from 'vuex'

//import draggable from 'vuedraggable'

export default {
    name: 'StoryPreview',
    props: ['story', 'group', 'index_story'],
    // components: {
    //     draggable,
    // },

    methods: {
        openStoryBody() {
            this.story['is_closed_settings'] = false
            this.setStateStoryPreviews('hide')
        },

        removeStory() {
            this.group['story_list'].splice(this.index_story, 1)
        },

        ...mapMutations(['loadImage', 'deleteImage', 'setStateStoryPreviews'])
    },

    computed: {
        ...mapGetters(['rule_params', 'rules_name', 'vars'])
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
    .sitestories-stories__story-body {
        display: none;
        background-color: red;
    }

    .sitestories-stories__story_open .sitestories-stories__story-body {
        display: block;
    }

    .sitestories-stories__story_open .sitestories-stories__story-preview-elem {
        display: none;
    }
</style>
