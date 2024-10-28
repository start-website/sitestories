<i18n src="./locales/common.json"></i18n>

<template>
    <div class="sitestories-stories">
        <div class="sitestories-stories__content">
            <input type="hidden" :name="rules_name + '[rule_params][stories][groups_stories]'" :value="rule_params['stories']['groups_stories'] | json">
            <draggable
                :list="rule_params['stories']['groups_stories']"
                @start="drag = true" 
                @end="drag = false" 
                v-bind="dragOptions"
                tag="div" 
                draggable=".sitestories-group__group" 
                class="sitestories-stories__content-inner" 
                :disabled="false"
            >
                <c-group-stories v-for="group, index_group in rule_params['stories']['groups_stories']" :key="group['id']" :group="group" :index_group="index_group"></c-group-stories>
                
            </draggable>

            <p id="sitestories-group-sorting" v-show="rule_params['stories']['groups_stories'].length > 1" class="gray small"><i>{{ $t('Use drag and drop to change sorting') }}</i></p>
            <div class="sitestories-stories__button-plus" :class="rule_params['stories']['groups_stories'].length == 0 ? 'sitestories-stories__button-plus_empty' : 'sitestories-stories__button-plus_full'">
                <template v-if="vars['ui_version'] == 1">
                    <a class="inline-link" href="javascript:void(0);" v-on:click.prevent="addGroupStories">
                        <i class="icon16 plus"></i>
                    </a>
                    <p v-show="rule_params['stories']['groups_stories'].length == 0" class="gray" style="font-size: 12px;">{{ $t('Click to add the first group of stories') }}</p>
                </template>

                <template v-if="vars['ui_version'] == 2">
                    <a class="button circle" :class="rule_params['stories']['groups_stories'].length == 0  ? 'pulsar' : ''" href="javascript:void(0);" v-on:click.prevent="addGroupStories"><i class="fas fa-plus"></i></a>
                </template>
            </div>
            
        </div>
        
    </div>
</template>
 
<script>
import { groupStories } from '../entities'
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'

export default {
    data() {
        return {
        }
    },
    name: 'stories',
    components: {
        draggable,
        'c-group-stories': groupStories,
    },

    filters: {
        json: function (value) {
            if (!value) return ''
            value = JSON.stringify(value)
            return value
        }
    },

    methods: {
        addGroupStories() {
            const id = 'id' + this.uid()
            this.rule_params['stories']['groups_stories'].push({
                'id': id,
                'state' : 'enabled',
                'creating_stories' : '',
                'amp_page_url': this.vars['url_public_files'] + '/amp/group/' + id + '/amp.html',
                'amp_page_path': this.vars['path_public_files'] + '/amp/group/' + id + '/amp.html',
                'story_list': []
            })

            console.log(this.rule_params)
        },

        uid() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        }
    },

    computed: {
            dragOptions() {
                return {
                    animation: 200,
                    group: "stories_groups",
                    ghostClass: "ghost"
                };
            },
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
    .sitestories-stories {
        margin-top: 20px;
    }

    .sitestories-stories__content {
        position: relative;
        display: inline-block;
        max-width: 97%;
    }

    .ui-1 .sitestories-stories__content-inner {
        display: block;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .ui-2 .sitestories-stories__content-inner {
        display: flex;
        overflow-x: auto;
    }

    .sitestories-stories__button-plus {
    }

    .sitestories-stories__button-plus_empty {
        position: relative;
        padding: 80px 0 50px 30px;
    }

    .sitestories-stories__button-plus_full {
        position: absolute;
        right: -50px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>