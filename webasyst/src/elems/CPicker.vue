<template>
    <div class="color-picker-wrap">
        <div class="color-picker">
            <span v-on:click="toggle($event)" class="color-replacer"><i class="icon16 color" :style="'background:' + block[prop]"></i></span>
        </div>
        <div class="color-picker__palette" v-show="show">
            <color-panel v-model="block[prop]"></color-panel>
        </div>
    </div>
</template>

<script>
    import { ColorPanel } from 'one-colorpicker'

    export default {
        name: 'colorPicker',
        props: ['block', 'prop'],
        components: { 
            'color-panel': ColorPanel,
        },
        data () {
            return {
                show: false,
            }
        },

        methods: {
            toggle(e) {
                this.show = !this.show
            },
        },

    }
</script>

<style scoped>
    
    .color-picker-wrap {
        display: inline-block;
        vertical-align: text-top;
    }
    .color-picker {
        position: relative;
    }
    .color-replacer {
        cursor: pointer;
        width: 16px;
        height: 16px;
        cursor: pointer;
        display: inline-block;
    }
    .color-replacer .color {
        width: inherit;
        height: inherit;
        display: inline-block;
        border-radius: 8px;
        border: 1px solid #818181;
    }
    .color-picker__palette {
        margin: 15px 0 0 -205px;
    }

</style>