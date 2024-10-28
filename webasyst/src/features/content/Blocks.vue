<i18n src="../locales/common.json"></i18n>

<template>
    <div class="sitestories-content-text-graphic">
        <div class="sitestories-content-text-graphic__buttons">
            <div class="sitestories-content-text-graphic__button" v-on:click.prevent="addBlock('text')">{{ $t('Text') }}</div>
            <div class="sitestories-content-text-graphic__button" v-on:click.prevent="addBlock('img')">{{ $t('Img') }}</div>
            <div class="sitestories-content-text-graphic__button" v-on:click.prevent="addBlock('button')">{{ $t('Button') }}</div>
            <div class="sitestories-content-text-graphic__button" v-on:click.prevent="addBlock('html')">{{ $t('HTML') }}</div>
        </div>
        <p class="gray small"><i>{{ $t('Click to add a text/graphic block') }}</i></p>
        <div class="sitestories-content-text-graphic__fields">
            <div class="zebra bigdata wa-tr-hover wa-nobreak-line">
                <draggable
                    :list="storyObj['text_graphic_blocks']"
                    @start="drag = true" 
                    @end="drag = false" 
                    v-bind="dragOptions" :group="{ name: 'previews' }"
                    tag="div" 
                    draggable=".sitestories-content-text-graphic__tr"  
                    :disabled="false"
                >
                    
                <div v-for="(block, block_index) in storyObj['text_graphic_blocks']" class="sitestories-content-text-graphic__tr" :key="block.id">
                    <div class="sitestories-content-text-graphic__td align-center min-width">
                        <a href="javascript:void(0);">
                            <i class="text-black" :class="vars['ui_version'] == 1 ? 'icon16 sort' : 'fas fa-sort'"></i>
                        </a>
                    </div>
                    <div class="sitestories-content-text-graphic__td">
                        <a href="javascript:void(0);" class="">{{ block['type'] }} <span class="hint">{{ $t('content block') }}</span>
                        </a></div>
                    
                    <div class="sitestories-content-text-graphic__td sitestories-content-text-graphic__td_open align-center min-width" :ref="'open-block-' + block['id']">
                        <a href="javascript:void(0);" v-on:click.prevent="openBlock(block)">
                            <i :class="vars['ui_version'] == 1 ? 'icon16 darr' : 'fas fa-caret-down'"></i>
                        </a>
                    </div>
                    <div class="sitestories-content-text-graphic__td sitestories-content-text-graphic__td_close align-center min-width" :ref="'close-block-' + block['id']">
                        <a href="javascript:void(0);" v-on:click.prevent="closeBlock(block)">
                            <i :class="vars['ui_version'] == 1 ? 'icon16 uarr' : 'fas fa-caret-up'"></i>
                        </a>
                    </div>
                    
                    <div class="sitestories-content-text-graphic__td align-center min-width">
                        <a href="javascript:void(0);" v-on:click.prevent="removeBlock(block_index)">
                            <i :class="vars['ui_version'] == 1 ? 'icon16 minus' : 'fas fa-trash'"></i>
                        </a>
                    </div>  
                
                

                    <div class="sitestories-content-text-graphic__td sitestories-content-text-graphic__td_content" :ref="'content-block-' + block['id']" v-if="block['type'] === 'html'">
                        <div class="field">
                            <div class="name">
                                {{ $t('Animation') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select v-model="block['data']['animate']">
                                        <option value=" " disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="">—</option>
                                        <template v-if="rule_params['stories']['stories_type'] === 'custom'">
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__bounce">{{ $t('Bounce') }}</option>
                                            <option value="animate__pulse">{{ $t('Pulse') }}</option>
                                            <option value="animate__rubberBand">{{ $t('RubberBand') }}</option>
                                            <option value="animate__shakeX">{{ $t('ShakeX') }}</option>
                                            <option value="animate__shakeY">{{ $t('ShakeY') }}</option>
                                            <option value="animate__headShake">{{ $t('HeadShake') }}</option>
                                            <option value="animate__swing">{{ $t('Swing') }}</option>
                                            <option value="animate__tada">{{ $t('Tada') }}</option>
                                            <option value="animate__wobble">{{ $t('Wobble') }}</option>
                                            <option value="animate__jello">{{ $t('Jello') }}</option>
                                            <option value="animate__heartBeat">{{ $t('HeartBeat') }}</option>
                                            <option value="animate__backInDown">{{ $t('BackInDown') }}</option>
                                            <option value="animate__backInLeft">{{ $t('BackInLeft') }}</option>
                                            <option value="animate__backInRight">{{ $t('BackInRight') }}</option>
                                            <option value="animate__backInUp">{{ $t('BackInUp') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutRight">{{ $t('BackOutRight') }}</option>
                                            <option value="animate__backOutUp">{{ $t('BackOutUp') }}</option>
                                            <option value="animate__bounceIn">{{ $t('BounceIn') }}</option>
                                            <option value="animate__bounceOutDown">{{ $t('BounceOutDown') }}</option>
                                            <option value="animate__bounceOutLeft">{{ $t('BounceOutLeft') }}</option>
                                            <option value="animate__bounceOutRight">{{ $t('BounceOutRight') }}</option>
                                            <option value="animate__bounceOutUp">{{ $t('BounceOutUp') }}</option>
                                            <option value="animate__fadeIn">{{ $t('FadeIn') }}</option>
                                            <option value="animate__fadeInDown">{{ $t('FadeInDown') }}</option>
                                            <option value="animate__fadeInDownBig">{{ $t('FadeInDownBig') }}</option>
                                            <option value="animate__fadeInLeft">{{ $t('FadeInLeft') }}</option>
                                            <option value="animate__fadeInLeftBig">{{ $t('FadeInLeftBig') }}</option>
                                            <option value="animate__fadeInRight">{{ $t('FadeInRight') }}</option>
                                            <option value="animate__fadeInRightBig">{{ $t('FadeInRightBig') }}</option>
                                            <option value="animate__fadeInUp">{{ $t('FadeInUp') }}</option>
                                            <option value="animate__fadeInUpBig">{{ $t('FadeInUpBig') }}</option>
                                            <option value="animate__fadeInTopLeft">{{ $t('FadeInTopLeft') }}</option>
                                            <option value="animate__fadeInTopRight">{{ $t('FadeInTopRight') }}</option>
                                            <option value="animate__fadeInBottomLeft">{{ $t('FadeInBottomLeft') }}</option>
                                            <option value="animate__fadeInBottomRight">{{ $t('FadeInBottomRight') }}</option>
                                            <option value="animate__fadeOut">{{ $t('FadeOut') }}</option>
                                            <option value="animate__fadeOutDown">{{ $t('FadeOutDown') }}</option>
                                            <option value="animate__fadeOutDownBig">{{ $t('FadeOutDownBig') }}</option>
                                            <option value="animate__fadeOutLeft">{{ $t('FadeOutLeft') }}</option>
                                            <option value="animate__fadeOutLeftBig">{{ $t('FadeOutLeftBig') }}</option>
                                            <option value="animate__fadeOutRight">{{ $t('FadeOutRight') }}</option>
                                            <option value="animate__fadeOutRightBig">{{ $t('FadeOutRightBig') }}</option>
                                            <option value="animate__fadeOutUp">{{ $t('FadeOutUp') }}</option>
                                            <option value="animate__fadeOutUpBig">{{ $t('FadeOutUpBig') }}</option>
                                            <option value="animate__fadeOutTopLeft">{{ $t('FadeOutTopLeft') }}</option>
                                            <option value="animate__fadeOutTopRight">{{ $t('FadeOutTopRight') }}</option>
                                            <option value="animate__fadeOutBottomRight">{{ $t('FadeOutBottomRight') }}</option>
                                            <option value="animate__fadeOutBottomLeft">{{ $t('FadeOutBottomLeft') }}</option>
                                            <option value="animate__flip">{{ $t('Flip') }}</option>
                                            <option value="animate__flipInX">{{ $t('FlipInX') }}</option>
                                            <option value="animate__flipInY">{{ $t('FlipInY') }}</option>
                                            <option value="animate__flipOutX">{{ $t('FlipOutX"') }}</option>
                                            <option value="animate__flipOutY">{{ $t('FlipOutY') }}</option>
                                            <option value="animate__lightSpeedInRight">{{ $t('LightSpeedInRight') }}</option>
                                            <option value="animate__lightSpeedInLeft">{{ $t('LightSpeedInLeft') }}</option>
                                            <option value="animate__lightSpeedOutRight">{{ $t('LightSpeedOutRight') }}</option>
                                            <option value="animate__lightSpeedOutLeft">{{ $t('LightSpeedOutLeft') }}</option>
                                            <option value="animate__rotateIn">{{ $t('RotateIn') }}</option>
                                            <option value="animate__rotateInDownLeft">{{ $t('RotateInDownLeft') }}</option>
                                            <option value="animate__rotateInDownRight">{{ $t('RotateInDownRight') }}</option>
                                            <option value="animate__rotateInUpLeft">{{ $t('RotateInUpLeft') }}</option>
                                            <option value="animate__rotateInUpRight">{{ $t('RotateInUpRight') }}</option>
                                            <option value="animate__rotateOut">{{ $t('RotateOut') }}</option>
                                            <option value="animate__rotateOutDownLeft">{{ $t('RotateOutDownLeft') }}</option>
                                            <option value="animate__rotateOutDownRight">{{ $t('RotateOutDownRight') }}</option>
                                            <option value="animate__rotateOutUpLeft">{{ $t('RotateOutUpLeft') }}</option>
                                            <option value="animate__rotateOutUpRight">{{ $t('RotateOutUpRight') }}</option>
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__jackInTheBox">{{ $t('JackInTheBox') }}</option>
                                            <option value="animate__rollIn">{{ $t('RollIn') }}</option>
                                            <option value="animate__rollOut">{{ $t('RollOut') }}</option>
                                            <option value="animate__zoomIn">{{ $t('ZoomIn') }}</option>
                                            <option value="animate__zoomInDown">{{ $t('ZoomInDown') }}</option>
                                            <option value="animate__zoomInLeft">{{ $t('ZoomInLeft') }}</option>
                                            <option value="animate__zoomInRight">{{ $t('ZoomInRight') }}</option>
                                            <option value="animate__zoomInUp">{{ $t('ZoomInUp') }}</option>
                                            <option value="animate__zoomOut">{{ $t('ZoomOut') }}</option>
                                            <option value="animate__zoomOutDown">{{ $t('ZoomOutDown') }}</option>
                                            <option value="animate__zoomOutLeft">{{ $t('ZoomOutLeft') }}</option>
                                            <option value="animate__zoomOutRight">{{ $t('ZoomOutRight') }}</option>
                                            <option value="animate__zoomOutUp">{{ $t('ZoomOutUp') }}</option>
                                            <option value="animate__slideInDown">{{ $t('SlideInDown') }}</option>
                                            <option value="animate__slideInLeft">{{ $t('SlideInLeft') }}</option>
                                            <option value="animate__slideInRight">{{ $t('SlideInRight') }}</option>
                                            <option value="animate__slideInUp">{{ $t('SlideInUp') }}</option>
                                            <option value="animate__slideOutDown">{{ $t('SlideOutDown') }}</option>
                                            <option value="animate__slideOutLeft">{{ $t('SlideOutLef') }}</option>
                                            <option value="animate__slideOutRight">{{ $t('SlideOutRight') }}</option>
                                            <option value="animate__slideOutUp">{{ $t('SlideOutUp') }}</option>
                                        </template>
                                        <template v-if="rule_params['stories']['stories_type'] === 'seo'">
                                            <option value="fade-in">{{ $t('Fade-In') }}</option>
                                            <option value="twirl-in">{{ $t('Twirl-In') }}</option>
                                            <option value="fly-in">{{ $t('Fly-In') }}</option>
                                            <option value="fly-in-right">{{ $t('Fly-In-Right') }}</option>
                                            <option value="fly-in-top">{{ $t('Fly-In-Top') }}</option>
                                            <option value="fly-in-bottom">{{ $t('Fly-In-Bottom') }}</option>
                                            <option value="rotate-in-left">{{ $t('Rotate-In-Left') }}</option>
                                            <option value="rotate-in-right">{{ $t('Rotate-In-Right') }}</option>
                                            <option value="drop-in">{{ $t('Drop-In') }}</option>
                                            <option value="whoosh-in-left">{{ $t('Whoosh-In-Left') }}</option>
                                            <option value="whoosh-in-right">{{ $t('Whoosh-In-Right') }}</option>
                                            <option value="zoom-in">{{ $t('Zoom-In') }}</option>
                                            <option value="zoom-out">{{ $t('Zoom-Out') }}</option>
                                            <option value="pan-left">{{ $t('Pan-Left') }}</option>
                                            <option value="pan-right">{{ $t('Pan-Right') }}</option>
                                            <option value="pan-up">{{ $t('Pan-Up') }}</option>
                                            <option value="pan-down">{{ $t('Pan-Down') }}</option>
                                        </template>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Animated block effect.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Margins') }} (px)
                            </div>
                            <div class="value">
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_top']">
                                    </label>
                                    <div class="hint">{{ $t('Top') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_right']">
                                    </label>
                                    <div class="hint">{{ $t('Right') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_bottom']">
                                    </label>
                                    <div class="hint">{{ $t('Bottom') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_left']">
                                    </label>
                                    <div class="hint">{{ $t('Left') }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('HTML') }}
                            </div>
                            <div class="value">
                                <label>
                                    <textarea rows="15" v-model="block['data']['html']"></textarea>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="sitestories-content-text-graphic__td sitestories-content-text-graphic__td_content" :ref="'content-block-' + block['id']" v-if="block['type'] === 'text'">
                        <div class="field">
                            <div class="name">
                                {{ $t('Animation') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select v-model="block['data']['animate']">
                                        <option value=" " disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="">—</option>
                                        <template v-if="rule_params['stories']['stories_type'] === 'custom'">
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__bounce">{{ $t('Bounce') }}</option>
                                            <option value="animate__pulse">{{ $t('Pulse') }}</option>
                                            <option value="animate__rubberBand">{{ $t('RubberBand') }}</option>
                                            <option value="animate__shakeX">{{ $t('ShakeX') }}</option>
                                            <option value="animate__shakeY">{{ $t('ShakeY') }}</option>
                                            <option value="animate__headShake">{{ $t('HeadShake') }}</option>
                                            <option value="animate__swing">{{ $t('Swing') }}</option>
                                            <option value="animate__tada">{{ $t('Tada') }}</option>
                                            <option value="animate__wobble">{{ $t('Wobble') }}</option>
                                            <option value="animate__jello">{{ $t('Jello') }}</option>
                                            <option value="animate__heartBeat">{{ $t('HeartBeat') }}</option>
                                            <option value="animate__backInDown">{{ $t('BackInDown') }}</option>
                                            <option value="animate__backInLeft">{{ $t('BackInLeft') }}</option>
                                            <option value="animate__backInRight">{{ $t('BackInRight') }}</option>
                                            <option value="animate__backInUp">{{ $t('BackInUp') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutRight">{{ $t('BackOutRight') }}</option>
                                            <option value="animate__backOutUp">{{ $t('BackOutUp') }}</option>
                                            <option value="animate__bounceIn">{{ $t('BounceIn') }}</option>
                                            <option value="animate__bounceOutDown">{{ $t('BounceOutDown') }}</option>
                                            <option value="animate__bounceOutLeft">{{ $t('BounceOutLeft') }}</option>
                                            <option value="animate__bounceOutRight">{{ $t('BounceOutRight') }}</option>
                                            <option value="animate__bounceOutUp">{{ $t('BounceOutUp') }}</option>
                                            <option value="animate__fadeIn">{{ $t('FadeIn') }}</option>
                                            <option value="animate__fadeInDown">{{ $t('FadeInDown') }}</option>
                                            <option value="animate__fadeInDownBig">{{ $t('FadeInDownBig') }}</option>
                                            <option value="animate__fadeInLeft">{{ $t('FadeInLeft') }}</option>
                                            <option value="animate__fadeInLeftBig">{{ $t('FadeInLeftBig') }}</option>
                                            <option value="animate__fadeInRight">{{ $t('FadeInRight') }}</option>
                                            <option value="animate__fadeInRightBig">{{ $t('FadeInRightBig') }}</option>
                                            <option value="animate__fadeInUp">{{ $t('FadeInUp') }}</option>
                                            <option value="animate__fadeInUpBig">{{ $t('FadeInUpBig') }}</option>
                                            <option value="animate__fadeInTopLeft">{{ $t('FadeInTopLeft') }}</option>
                                            <option value="animate__fadeInTopRight">{{ $t('FadeInTopRight') }}</option>
                                            <option value="animate__fadeInBottomLeft">{{ $t('FadeInBottomLeft') }}</option>
                                            <option value="animate__fadeInBottomRight">{{ $t('FadeInBottomRight') }}</option>
                                            <option value="animate__fadeOut">{{ $t('FadeOut') }}</option>
                                            <option value="animate__fadeOutDown">{{ $t('FadeOutDown') }}</option>
                                            <option value="animate__fadeOutDownBig">{{ $t('FadeOutDownBig') }}</option>
                                            <option value="animate__fadeOutLeft">{{ $t('FadeOutLeft') }}</option>
                                            <option value="animate__fadeOutLeftBig">{{ $t('FadeOutLeftBig') }}</option>
                                            <option value="animate__fadeOutRight">{{ $t('FadeOutRight') }}</option>
                                            <option value="animate__fadeOutRightBig">{{ $t('FadeOutRightBig') }}</option>
                                            <option value="animate__fadeOutUp">{{ $t('FadeOutUp') }}</option>
                                            <option value="animate__fadeOutUpBig">{{ $t('FadeOutUpBig') }}</option>
                                            <option value="animate__fadeOutTopLeft">{{ $t('FadeOutTopLeft') }}</option>
                                            <option value="animate__fadeOutTopRight">{{ $t('FadeOutTopRight') }}</option>
                                            <option value="animate__fadeOutBottomRight">{{ $t('FadeOutBottomRight') }}</option>
                                            <option value="animate__fadeOutBottomLeft">{{ $t('FadeOutBottomLeft') }}</option>
                                            <option value="animate__flip">{{ $t('Flip') }}</option>
                                            <option value="animate__flipInX">{{ $t('FlipInX') }}</option>
                                            <option value="animate__flipInY">{{ $t('FlipInY') }}</option>
                                            <option value="animate__flipOutX">{{ $t('FlipOutX"') }}</option>
                                            <option value="animate__flipOutY">{{ $t('FlipOutY') }}</option>
                                            <option value="animate__lightSpeedInRight">{{ $t('LightSpeedInRight') }}</option>
                                            <option value="animate__lightSpeedInLeft">{{ $t('LightSpeedInLeft') }}</option>
                                            <option value="animate__lightSpeedOutRight">{{ $t('LightSpeedOutRight') }}</option>
                                            <option value="animate__lightSpeedOutLeft">{{ $t('LightSpeedOutLeft') }}</option>
                                            <option value="animate__rotateIn">{{ $t('RotateIn') }}</option>
                                            <option value="animate__rotateInDownLeft">{{ $t('RotateInDownLeft') }}</option>
                                            <option value="animate__rotateInDownRight">{{ $t('RotateInDownRight') }}</option>
                                            <option value="animate__rotateInUpLeft">{{ $t('RotateInUpLeft') }}</option>
                                            <option value="animate__rotateInUpRight">{{ $t('RotateInUpRight') }}</option>
                                            <option value="animate__rotateOut">{{ $t('RotateOut') }}</option>
                                            <option value="animate__rotateOutDownLeft">{{ $t('RotateOutDownLeft') }}</option>
                                            <option value="animate__rotateOutDownRight">{{ $t('RotateOutDownRight') }}</option>
                                            <option value="animate__rotateOutUpLeft">{{ $t('RotateOutUpLeft') }}</option>
                                            <option value="animate__rotateOutUpRight">{{ $t('RotateOutUpRight') }}</option>
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__jackInTheBox">{{ $t('JackInTheBox') }}</option>
                                            <option value="animate__rollIn">{{ $t('RollIn') }}</option>
                                            <option value="animate__rollOut">{{ $t('RollOut') }}</option>
                                            <option value="animate__zoomIn">{{ $t('ZoomIn') }}</option>
                                            <option value="animate__zoomInDown">{{ $t('ZoomInDown') }}</option>
                                            <option value="animate__zoomInLeft">{{ $t('ZoomInLeft') }}</option>
                                            <option value="animate__zoomInRight">{{ $t('ZoomInRight') }}</option>
                                            <option value="animate__zoomInUp">{{ $t('ZoomInUp') }}</option>
                                            <option value="animate__zoomOut">{{ $t('ZoomOut') }}</option>
                                            <option value="animate__zoomOutDown">{{ $t('ZoomOutDown') }}</option>
                                            <option value="animate__zoomOutLeft">{{ $t('ZoomOutLeft') }}</option>
                                            <option value="animate__zoomOutRight">{{ $t('ZoomOutRight') }}</option>
                                            <option value="animate__zoomOutUp">{{ $t('ZoomOutUp') }}</option>
                                            <option value="animate__slideInDown">{{ $t('SlideInDown') }}</option>
                                            <option value="animate__slideInLeft">{{ $t('SlideInLeft') }}</option>
                                            <option value="animate__slideInRight">{{ $t('SlideInRight') }}</option>
                                            <option value="animate__slideInUp">{{ $t('SlideInUp') }}</option>
                                            <option value="animate__slideOutDown">{{ $t('SlideOutDown') }}</option>
                                            <option value="animate__slideOutLeft">{{ $t('SlideOutLef') }}</option>
                                            <option value="animate__slideOutRight">{{ $t('SlideOutRight') }}</option>
                                            <option value="animate__slideOutUp">{{ $t('SlideOutUp') }}</option>
                                        </template>
                                        <template v-if="rule_params['stories']['stories_type'] === 'seo'">
                                            <option value="fade-in">{{ $t('Fade-In') }}</option>
                                            <option value="twirl-in">{{ $t('Twirl-In') }}</option>
                                            <option value="fly-in">{{ $t('Fly-In') }}</option>
                                            <option value="fly-in-right">{{ $t('Fly-In-Right') }}</option>
                                            <option value="fly-in-top">{{ $t('Fly-In-Top') }}</option>
                                            <option value="fly-in-bottom">{{ $t('Fly-In-Bottom') }}</option>
                                            <option value="rotate-in-left">{{ $t('Rotate-In-Left') }}</option>
                                            <option value="rotate-in-right">{{ $t('Rotate-In-Right') }}</option>
                                            <option value="drop-in">{{ $t('Drop-In') }}</option>
                                            <option value="whoosh-in-left">{{ $t('Whoosh-In-Left') }}</option>
                                            <option value="whoosh-in-right">{{ $t('Whoosh-In-Right') }}</option>
                                            <option value="zoom-in">{{ $t('Zoom-In') }}</option>
                                            <option value="zoom-out">{{ $t('Zoom-Out') }}</option>
                                            <option value="pan-left">{{ $t('Pan-Left') }}</option>
                                            <option value="pan-right">{{ $t('Pan-Right') }}</option>
                                            <option value="pan-up">{{ $t('Pan-Up') }}</option>
                                            <option value="pan-down">{{ $t('Pan-Down') }}</option>
                                        </template>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Animated block effect.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Margins') }} (px)
                            </div>
                            <div class="value">
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_top']">
                                    </label>
                                    <div class="hint">{{ $t('Top') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_right']">
                                    </label>
                                    <div class="hint">{{ $t('Right') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_bottom']">
                                    </label>
                                    <div class="hint">{{ $t('Bottom') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_left']">
                                    </label>
                                    <div class="hint">{{ $t('Left') }}</div>
                                </div>
                            </div>
                        </div>

                        <el-tiptap v-model="block['data']['content']" :extensions="extensions" lang="ru"></el-tiptap>
                    </div>

                    <div class="sitestories-content-text-graphic__td sitestories-content-text-graphic__td_content" :ref="'content-block-' + block['id']" v-if="block['type'] === 'button'">
                        <div class="field">
                            <div class="name">
                                {{ $t('Animation') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select v-model="block['data']['animate']">
                                        <option value=" " disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="">—</option>
                                        <template v-if="rule_params['stories']['stories_type'] === 'custom'">
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__bounce">{{ $t('Bounce') }}</option>
                                            <option value="animate__pulse">{{ $t('Pulse') }}</option>
                                            <option value="animate__rubberBand">{{ $t('RubberBand') }}</option>
                                            <option value="animate__shakeX">{{ $t('ShakeX') }}</option>
                                            <option value="animate__shakeY">{{ $t('ShakeY') }}</option>
                                            <option value="animate__headShake">{{ $t('HeadShake') }}</option>
                                            <option value="animate__swing">{{ $t('Swing') }}</option>
                                            <option value="animate__tada">{{ $t('Tada') }}</option>
                                            <option value="animate__wobble">{{ $t('Wobble') }}</option>
                                            <option value="animate__jello">{{ $t('Jello') }}</option>
                                            <option value="animate__heartBeat">{{ $t('HeartBeat') }}</option>
                                            <option value="animate__backInDown">{{ $t('BackInDown') }}</option>
                                            <option value="animate__backInLeft">{{ $t('BackInLeft') }}</option>
                                            <option value="animate__backInRight">{{ $t('BackInRight') }}</option>
                                            <option value="animate__backInUp">{{ $t('BackInUp') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutRight">{{ $t('BackOutRight') }}</option>
                                            <option value="animate__backOutUp">{{ $t('BackOutUp') }}</option>
                                            <option value="animate__bounceIn">{{ $t('BounceIn') }}</option>
                                            <option value="animate__bounceOutDown">{{ $t('BounceOutDown') }}</option>
                                            <option value="animate__bounceOutLeft">{{ $t('BounceOutLeft') }}</option>
                                            <option value="animate__bounceOutRight">{{ $t('BounceOutRight') }}</option>
                                            <option value="animate__bounceOutUp">{{ $t('BounceOutUp') }}</option>
                                            <option value="animate__fadeIn">{{ $t('FadeIn') }}</option>
                                            <option value="animate__fadeInDown">{{ $t('FadeInDown') }}</option>
                                            <option value="animate__fadeInDownBig">{{ $t('FadeInDownBig') }}</option>
                                            <option value="animate__fadeInLeft">{{ $t('FadeInLeft') }}</option>
                                            <option value="animate__fadeInLeftBig">{{ $t('FadeInLeftBig') }}</option>
                                            <option value="animate__fadeInRight">{{ $t('FadeInRight') }}</option>
                                            <option value="animate__fadeInRightBig">{{ $t('FadeInRightBig') }}</option>
                                            <option value="animate__fadeInUp">{{ $t('FadeInUp') }}</option>
                                            <option value="animate__fadeInUpBig">{{ $t('FadeInUpBig') }}</option>
                                            <option value="animate__fadeInTopLeft">{{ $t('FadeInTopLeft') }}</option>
                                            <option value="animate__fadeInTopRight">{{ $t('FadeInTopRight') }}</option>
                                            <option value="animate__fadeInBottomLeft">{{ $t('FadeInBottomLeft') }}</option>
                                            <option value="animate__fadeInBottomRight">{{ $t('FadeInBottomRight') }}</option>
                                            <option value="animate__fadeOut">{{ $t('FadeOut') }}</option>
                                            <option value="animate__fadeOutDown">{{ $t('FadeOutDown') }}</option>
                                            <option value="animate__fadeOutDownBig">{{ $t('FadeOutDownBig') }}</option>
                                            <option value="animate__fadeOutLeft">{{ $t('FadeOutLeft') }}</option>
                                            <option value="animate__fadeOutLeftBig">{{ $t('FadeOutLeftBig') }}</option>
                                            <option value="animate__fadeOutRight">{{ $t('FadeOutRight') }}</option>
                                            <option value="animate__fadeOutRightBig">{{ $t('FadeOutRightBig') }}</option>
                                            <option value="animate__fadeOutUp">{{ $t('FadeOutUp') }}</option>
                                            <option value="animate__fadeOutUpBig">{{ $t('FadeOutUpBig') }}</option>
                                            <option value="animate__fadeOutTopLeft">{{ $t('FadeOutTopLeft') }}</option>
                                            <option value="animate__fadeOutTopRight">{{ $t('FadeOutTopRight') }}</option>
                                            <option value="animate__fadeOutBottomRight">{{ $t('FadeOutBottomRight') }}</option>
                                            <option value="animate__fadeOutBottomLeft">{{ $t('FadeOutBottomLeft') }}</option>
                                            <option value="animate__flip">{{ $t('Flip') }}</option>
                                            <option value="animate__flipInX">{{ $t('FlipInX') }}</option>
                                            <option value="animate__flipInY">{{ $t('FlipInY') }}</option>
                                            <option value="animate__flipOutX">{{ $t('FlipOutX"') }}</option>
                                            <option value="animate__flipOutY">{{ $t('FlipOutY') }}</option>
                                            <option value="animate__lightSpeedInRight">{{ $t('LightSpeedInRight') }}</option>
                                            <option value="animate__lightSpeedInLeft">{{ $t('LightSpeedInLeft') }}</option>
                                            <option value="animate__lightSpeedOutRight">{{ $t('LightSpeedOutRight') }}</option>
                                            <option value="animate__lightSpeedOutLeft">{{ $t('LightSpeedOutLeft') }}</option>
                                            <option value="animate__rotateIn">{{ $t('RotateIn') }}</option>
                                            <option value="animate__rotateInDownLeft">{{ $t('RotateInDownLeft') }}</option>
                                            <option value="animate__rotateInDownRight">{{ $t('RotateInDownRight') }}</option>
                                            <option value="animate__rotateInUpLeft">{{ $t('RotateInUpLeft') }}</option>
                                            <option value="animate__rotateInUpRight">{{ $t('RotateInUpRight') }}</option>
                                            <option value="animate__rotateOut">{{ $t('RotateOut') }}</option>
                                            <option value="animate__rotateOutDownLeft">{{ $t('RotateOutDownLeft') }}</option>
                                            <option value="animate__rotateOutDownRight">{{ $t('RotateOutDownRight') }}</option>
                                            <option value="animate__rotateOutUpLeft">{{ $t('RotateOutUpLeft') }}</option>
                                            <option value="animate__rotateOutUpRight">{{ $t('RotateOutUpRight') }}</option>
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__jackInTheBox">{{ $t('JackInTheBox') }}</option>
                                            <option value="animate__rollIn">{{ $t('RollIn') }}</option>
                                            <option value="animate__rollOut">{{ $t('RollOut') }}</option>
                                            <option value="animate__zoomIn">{{ $t('ZoomIn') }}</option>
                                            <option value="animate__zoomInDown">{{ $t('ZoomInDown') }}</option>
                                            <option value="animate__zoomInLeft">{{ $t('ZoomInLeft') }}</option>
                                            <option value="animate__zoomInRight">{{ $t('ZoomInRight') }}</option>
                                            <option value="animate__zoomInUp">{{ $t('ZoomInUp') }}</option>
                                            <option value="animate__zoomOut">{{ $t('ZoomOut') }}</option>
                                            <option value="animate__zoomOutDown">{{ $t('ZoomOutDown') }}</option>
                                            <option value="animate__zoomOutLeft">{{ $t('ZoomOutLeft') }}</option>
                                            <option value="animate__zoomOutRight">{{ $t('ZoomOutRight') }}</option>
                                            <option value="animate__zoomOutUp">{{ $t('ZoomOutUp') }}</option>
                                            <option value="animate__slideInDown">{{ $t('SlideInDown') }}</option>
                                            <option value="animate__slideInLeft">{{ $t('SlideInLeft') }}</option>
                                            <option value="animate__slideInRight">{{ $t('SlideInRight') }}</option>
                                            <option value="animate__slideInUp">{{ $t('SlideInUp') }}</option>
                                            <option value="animate__slideOutDown">{{ $t('SlideOutDown') }}</option>
                                            <option value="animate__slideOutLeft">{{ $t('SlideOutLef') }}</option>
                                            <option value="animate__slideOutRight">{{ $t('SlideOutRight') }}</option>
                                            <option value="animate__slideOutUp">{{ $t('SlideOutUp') }}</option>
                                        </template>
                                        <template v-if="rule_params['stories']['stories_type'] === 'seo'">
                                            <option value="fade-in">{{ $t('Fade-In') }}</option>
                                            <option value="twirl-in">{{ $t('Twirl-In') }}</option>
                                            <option value="fly-in">{{ $t('Fly-In') }}</option>
                                            <option value="fly-in-right">{{ $t('Fly-In-Right') }}</option>
                                            <option value="fly-in-top">{{ $t('Fly-In-Top') }}</option>
                                            <option value="fly-in-bottom">{{ $t('Fly-In-Bottom') }}</option>
                                            <option value="rotate-in-left">{{ $t('Rotate-In-Left') }}</option>
                                            <option value="rotate-in-right">{{ $t('Rotate-In-Right') }}</option>
                                            <option value="drop-in">{{ $t('Drop-In') }}</option>
                                            <option value="whoosh-in-left">{{ $t('Whoosh-In-Left') }}</option>
                                            <option value="whoosh-in-right">{{ $t('Whoosh-In-Right') }}</option>
                                            <option value="zoom-in">{{ $t('Zoom-In') }}</option>
                                            <option value="zoom-out">{{ $t('Zoom-Out') }}</option>
                                            <option value="pan-left">{{ $t('Pan-Left') }}</option>
                                            <option value="pan-right">{{ $t('Pan-Right') }}</option>
                                            <option value="pan-up">{{ $t('Pan-Up') }}</option>
                                            <option value="pan-down">{{ $t('Pan-Down') }}</option>
                                        </template>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Animated block effect.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Margins') }} (px)
                            </div>
                            <div class="value">
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_top']">
                                    </label>
                                    <div class="hint">{{ $t('Top') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_right']">
                                    </label>
                                    <div class="hint">{{ $t('Right') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_bottom']">
                                    </label>
                                    <div class="hint">{{ $t('Bottom') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_left']">
                                    </label>
                                    <div class="hint">{{ $t('Left') }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Text') }} 
                            </div>
                            <div class="value">
                                <label>
                                    <input type="text" class="long" v-model="block['data']['text']">
                                </label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="name">
                                {{ $t('Link') }} 
                            </div>
                            <div class="value">
                                <label>
                                    <input type="text" class="full-width" v-model="block['data']['link']">
                                </label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="name">
                                {{ $t('Width') }} 
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" v-model="block['data']['width']" placeholder="AUTO">
                                </label>
                                <label>
                                    <select v-model="block['data']['width_units_measurement']">
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="px">{{ $t('px') }}</option>
                                        <option value="%">{{ $t('%') }}</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Height') }} 
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" v-model="block['data']['height']" placeholder="AUTO">
                                </label>
                                <label>
                                    <select v-model="block['data']['height_units_measurement']">
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="px">{{ $t('px') }}</option>
                                        <option value="%">{{ $t('%') }}</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Background') }}
                            </div>
                            <div class="value">
                                <label>
                                    <input type="text" v-model="block['data']['background']" placeholder="transparent">
                                </label>
                                <color-picker :block="block['data']" :prop="'background'"></color-picker>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Color text') }}
                            </div>
                            <div class="value">
                                <label>
                                    <input type="text" v-model="block['data']['color']" placeholder="transparent">
                                </label>
                                <color-picker :block="block['data']" :prop="'color'"></color-picker>
                            </div>
                        </div>

                    </div>

                    <div class="sitestories-content-text-graphic__td sitestories-content-text-graphic__td_content" :ref="'content-block-' + block['id']" v-if="block['type'] === 'img'">
                        <div class="field">
                            <div class="name">
                                {{ $t('Animation') }}
                            </div>
                            <div class="value">
                                <label>
                                    <select v-model="block['data']['animate']">
                                        <option value=" " disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="">—</option>
                                        <template v-if="rule_params['stories']['stories_type'] === 'custom'">
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__bounce">{{ $t('Bounce') }}</option>
                                            <option value="animate__pulse">{{ $t('Pulse') }}</option>
                                            <option value="animate__rubberBand">{{ $t('RubberBand') }}</option>
                                            <option value="animate__shakeX">{{ $t('ShakeX') }}</option>
                                            <option value="animate__shakeY">{{ $t('ShakeY') }}</option>
                                            <option value="animate__headShake">{{ $t('HeadShake') }}</option>
                                            <option value="animate__swing">{{ $t('Swing') }}</option>
                                            <option value="animate__tada">{{ $t('Tada') }}</option>
                                            <option value="animate__wobble">{{ $t('Wobble') }}</option>
                                            <option value="animate__jello">{{ $t('Jello') }}</option>
                                            <option value="animate__heartBeat">{{ $t('HeartBeat') }}</option>
                                            <option value="animate__backInDown">{{ $t('BackInDown') }}</option>
                                            <option value="animate__backInLeft">{{ $t('BackInLeft') }}</option>
                                            <option value="animate__backInRight">{{ $t('BackInRight') }}</option>
                                            <option value="animate__backInUp">{{ $t('BackInUp') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutDown">{{ $t('BackOutDown') }}</option>
                                            <option value="animate__backOutRight">{{ $t('BackOutRight') }}</option>
                                            <option value="animate__backOutUp">{{ $t('BackOutUp') }}</option>
                                            <option value="animate__bounceIn">{{ $t('BounceIn') }}</option>
                                            <option value="animate__bounceOutDown">{{ $t('BounceOutDown') }}</option>
                                            <option value="animate__bounceOutLeft">{{ $t('BounceOutLeft') }}</option>
                                            <option value="animate__bounceOutRight">{{ $t('BounceOutRight') }}</option>
                                            <option value="animate__bounceOutUp">{{ $t('BounceOutUp') }}</option>
                                            <option value="animate__fadeIn">{{ $t('FadeIn') }}</option>
                                            <option value="animate__fadeInDown">{{ $t('FadeInDown') }}</option>
                                            <option value="animate__fadeInDownBig">{{ $t('FadeInDownBig') }}</option>
                                            <option value="animate__fadeInLeft">{{ $t('FadeInLeft') }}</option>
                                            <option value="animate__fadeInLeftBig">{{ $t('FadeInLeftBig') }}</option>
                                            <option value="animate__fadeInRight">{{ $t('FadeInRight') }}</option>
                                            <option value="animate__fadeInRightBig">{{ $t('FadeInRightBig') }}</option>
                                            <option value="animate__fadeInUp">{{ $t('FadeInUp') }}</option>
                                            <option value="animate__fadeInUpBig">{{ $t('FadeInUpBig') }}</option>
                                            <option value="animate__fadeInTopLeft">{{ $t('FadeInTopLeft') }}</option>
                                            <option value="animate__fadeInTopRight">{{ $t('FadeInTopRight') }}</option>
                                            <option value="animate__fadeInBottomLeft">{{ $t('FadeInBottomLeft') }}</option>
                                            <option value="animate__fadeInBottomRight">{{ $t('FadeInBottomRight') }}</option>
                                            <option value="animate__fadeOut">{{ $t('FadeOut') }}</option>
                                            <option value="animate__fadeOutDown">{{ $t('FadeOutDown') }}</option>
                                            <option value="animate__fadeOutDownBig">{{ $t('FadeOutDownBig') }}</option>
                                            <option value="animate__fadeOutLeft">{{ $t('FadeOutLeft') }}</option>
                                            <option value="animate__fadeOutLeftBig">{{ $t('FadeOutLeftBig') }}</option>
                                            <option value="animate__fadeOutRight">{{ $t('FadeOutRight') }}</option>
                                            <option value="animate__fadeOutRightBig">{{ $t('FadeOutRightBig') }}</option>
                                            <option value="animate__fadeOutUp">{{ $t('FadeOutUp') }}</option>
                                            <option value="animate__fadeOutUpBig">{{ $t('FadeOutUpBig') }}</option>
                                            <option value="animate__fadeOutTopLeft">{{ $t('FadeOutTopLeft') }}</option>
                                            <option value="animate__fadeOutTopRight">{{ $t('FadeOutTopRight') }}</option>
                                            <option value="animate__fadeOutBottomRight">{{ $t('FadeOutBottomRight') }}</option>
                                            <option value="animate__fadeOutBottomLeft">{{ $t('FadeOutBottomLeft') }}</option>
                                            <option value="animate__flip">{{ $t('Flip') }}</option>
                                            <option value="animate__flipInX">{{ $t('FlipInX') }}</option>
                                            <option value="animate__flipInY">{{ $t('FlipInY') }}</option>
                                            <option value="animate__flipOutX">{{ $t('FlipOutX"') }}</option>
                                            <option value="animate__flipOutY">{{ $t('FlipOutY') }}</option>
                                            <option value="animate__lightSpeedInRight">{{ $t('LightSpeedInRight') }}</option>
                                            <option value="animate__lightSpeedInLeft">{{ $t('LightSpeedInLeft') }}</option>
                                            <option value="animate__lightSpeedOutRight">{{ $t('LightSpeedOutRight') }}</option>
                                            <option value="animate__lightSpeedOutLeft">{{ $t('LightSpeedOutLeft') }}</option>
                                            <option value="animate__rotateIn">{{ $t('RotateIn') }}</option>
                                            <option value="animate__rotateInDownLeft">{{ $t('RotateInDownLeft') }}</option>
                                            <option value="animate__rotateInDownRight">{{ $t('RotateInDownRight') }}</option>
                                            <option value="animate__rotateInUpLeft">{{ $t('RotateInUpLeft') }}</option>
                                            <option value="animate__rotateInUpRight">{{ $t('RotateInUpRight') }}</option>
                                            <option value="animate__rotateOut">{{ $t('RotateOut') }}</option>
                                            <option value="animate__rotateOutDownLeft">{{ $t('RotateOutDownLeft') }}</option>
                                            <option value="animate__rotateOutDownRight">{{ $t('RotateOutDownRight') }}</option>
                                            <option value="animate__rotateOutUpLeft">{{ $t('RotateOutUpLeft') }}</option>
                                            <option value="animate__rotateOutUpRight">{{ $t('RotateOutUpRight') }}</option>
                                            <option value="animate__hinge">{{ $t('Hinge') }}</option>
                                            <option value="animate__jackInTheBox">{{ $t('JackInTheBox') }}</option>
                                            <option value="animate__rollIn">{{ $t('RollIn') }}</option>
                                            <option value="animate__rollOut">{{ $t('RollOut') }}</option>
                                            <option value="animate__zoomIn">{{ $t('ZoomIn') }}</option>
                                            <option value="animate__zoomInDown">{{ $t('ZoomInDown') }}</option>
                                            <option value="animate__zoomInLeft">{{ $t('ZoomInLeft') }}</option>
                                            <option value="animate__zoomInRight">{{ $t('ZoomInRight') }}</option>
                                            <option value="animate__zoomInUp">{{ $t('ZoomInUp') }}</option>
                                            <option value="animate__zoomOut">{{ $t('ZoomOut') }}</option>
                                            <option value="animate__zoomOutDown">{{ $t('ZoomOutDown') }}</option>
                                            <option value="animate__zoomOutLeft">{{ $t('ZoomOutLeft') }}</option>
                                            <option value="animate__zoomOutRight">{{ $t('ZoomOutRight') }}</option>
                                            <option value="animate__zoomOutUp">{{ $t('ZoomOutUp') }}</option>
                                            <option value="animate__slideInDown">{{ $t('SlideInDown') }}</option>
                                            <option value="animate__slideInLeft">{{ $t('SlideInLeft') }}</option>
                                            <option value="animate__slideInRight">{{ $t('SlideInRight') }}</option>
                                            <option value="animate__slideInUp">{{ $t('SlideInUp') }}</option>
                                            <option value="animate__slideOutDown">{{ $t('SlideOutDown') }}</option>
                                            <option value="animate__slideOutLeft">{{ $t('SlideOutLef') }}</option>
                                            <option value="animate__slideOutRight">{{ $t('SlideOutRight') }}</option>
                                            <option value="animate__slideOutUp">{{ $t('SlideOutUp') }}</option>
                                        </template>
                                        <template v-if="rule_params['stories']['stories_type'] === 'seo'">
                                            <option value="fade-in">{{ $t('Fade-In') }}</option>
                                            <option value="twirl-in">{{ $t('Twirl-In') }}</option>
                                            <option value="fly-in">{{ $t('Fly-In') }}</option>
                                            <option value="fly-in-right">{{ $t('Fly-In-Right') }}</option>
                                            <option value="fly-in-top">{{ $t('Fly-In-Top') }}</option>
                                            <option value="fly-in-bottom">{{ $t('Fly-In-Bottom') }}</option>
                                            <option value="rotate-in-left">{{ $t('Rotate-In-Left') }}</option>
                                            <option value="rotate-in-right">{{ $t('Rotate-In-Right') }}</option>
                                            <option value="drop-in">{{ $t('Drop-In') }}</option>
                                            <option value="whoosh-in-left">{{ $t('Whoosh-In-Left') }}</option>
                                            <option value="whoosh-in-right">{{ $t('Whoosh-In-Right') }}</option>
                                            <option value="zoom-in">{{ $t('Zoom-In') }}</option>
                                            <option value="zoom-out">{{ $t('Zoom-Out') }}</option>
                                            <option value="pan-left">{{ $t('Pan-Left') }}</option>
                                            <option value="pan-right">{{ $t('Pan-Right') }}</option>
                                            <option value="pan-up">{{ $t('Pan-Up') }}</option>
                                            <option value="pan-down">{{ $t('Pan-Down') }}</option>
                                        </template>
                                    </select>
                                </label>
                                <div class="hint">{{ $t('Animated block effect.') }}</div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Margins') }} (px)
                            </div>
                            <div class="value">
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_top']">
                                    </label>
                                    <div class="hint">{{ $t('Top') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_right']">
                                    </label>
                                    <div class="hint">{{ $t('Right') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_bottom']">
                                    </label>
                                    <div class="hint">{{ $t('Bottom') }}</div>
                                </div>
                                <div class="value-item db-inline">
                                    <label>
                                        <input min="0" type="number" class="input-small" placeholder="auto" v-model="block['data']['margin_left']">
                                    </label>
                                    <div class="hint">{{ $t('Left') }}</div>
                                </div>
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
                                            'obj': block['data'],
                                            'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] +  '/story/' + storyObj['id'] + '/block/' + block['id'],
                                            'prop_name': 'image_name',
                                            'prop_dir': 'image_dir',
                                            'prop_path': 'image_path',
                                            'prop_invalid_format': 'image_invalid_format',
                                            'prop_invalid_name': 'image_invalid_name'
                                        })"    
                                    >
                                    <input type="hidden" 
                                        v-model="block['data']['image_name']"
                                    >
                                </label>
                                <div class="hint">{{ $t('The recommended size is no more than 370px in width and 645px in height.') }}</div>
                                <div class="hint">{{ $t('Acceptable formats:') }} png, jpg, svg, webp</div>
                                <div class="hint hint-error" v-show="block['data']['image_invalid_format']">{{ $t('You are trying to load an invalid format') }}</div>
                                <div class="hint hint-error" v-show="block['data']['image_invalid_name']">{{ $t('Invalid filename, please rename') }}</div>
                                <div class="image"
                                    v-if="block['data']['image_name']">
                                    <img class="transparent-sprite"
                                        :src="vars['url_public_files'] + '/' + block['data']['image_dir'] + '/' + block['data']['image_name']">
                                    <br>
                                    <a class="small delete-image" v-on:click.prevent="deleteImage({
                                        'file_name': block['data']['image_name'],
                                        'obj': block['data'],
                                        'prop_name': 'image_name',
                                        'prop_path': 'image_path',
                                        'dir': 'img/stories' + '/' + rule_params['stories_id'] + '/group/' + group['id'] +  '/story/' + storyObj['id'] + '/block/' + block['id'],
                                        
                                        })" href="javascript:void(0);">{{ $t('Delete') }}</a>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Width') }} 
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" v-model="block['data']['width']" placeholder="AUTO">
                                </label>
                                <label>
                                    <select v-model="block['data']['width_units_measurement']">
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="px">{{ $t('px') }}</option>
                                        <option value="%">{{ $t('%') }}</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="name">
                                {{ $t('Height') }} 
                            </div>
                            <div class="value">
                                <label>
                                    <input type="number" v-model="block['data']['height']" placeholder="AUTO">
                                </label>
                                <label>
                                    <select v-model="block['data']['height_units_measurement']">
                                        <option value="" disabled>{{ $t('Choose one of the options') }}</option>
                                        <option value="px">{{ $t('px') }}</option>
                                        <option value="%">{{ $t('%') }}</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                    </div>
                               
                </div>

                <p v-show="storyObj['text_graphic_blocks'].length > 1" class="gray small"><i>{{ $t('Use drag and drop to change sorting') }}</i></p>

                
                    
                </draggable>
            </div>
        </div>
    </div>
</template>
 
<script>
import { mapGetters, mapMutations } from 'vuex'
import draggable from 'vuedraggable'
import ElementUI from 'element-ui'
import { ElementTiptap } from 'element-tiptap'
import codemirror from 'codemirror'
import { colorPicker } from '../../elems'

import {
	Doc,
	Text,
	Paragraph,
	Heading,
	Bold,
	Underline,
	Italic,
	Strike,
	ListItem,
	BulletList,
	OrderedList,
	Link,
	CodeBlock,
	TextColor,
	Blockquote,
	TodoItem,
	TodoList,
	TextAlign,
	Indent,
	LineHeight,
	HorizontalRule,
	HardBreak,
	TrailingNode,
	History,
	Table,
	TableHeader,
	TableCell,
	TableRow,
	FormatClear,
	TextHighlight,
	Preview,
	Print,
	Fullscreen,
	SelectAll,
	FontType,
	FontSize,
	CodeView,
} from "element-tiptap";

export default {
    name: 'Blocks',
    props: ['storyObj', 'group'],
    components: {
        draggable,
        'el-tiptap': ElementTiptap,
        'color-picker': colorPicker,
    },

    data() {
		// editor extensions
		// they will be added to menubar and bubble menu by the order you declare.
		return {
			extensions: [
				new Doc(),
				new Text(),
				new Paragraph(),
				new Heading({ level: 5 }),
				new Bold(),
				new FontSize(),
				new FontType(),
				new TextColor(),
				new TextAlign(),
				new Underline(), 
				new Italic(),
				new Strike(),
				new ListItem(),
				new BulletList(),
				new OrderedList(),
				new Link(),
				new CodeBlock(),
				new Blockquote(),
				new TodoItem(),
				new TodoList(),
				new Indent(),
				new LineHeight(),
				new HorizontalRule(),
				new HardBreak(),
				new TrailingNode(),
				new History(),
				new Table(),
				new TableHeader(),
				new TableCell(),
				new TableRow(),
				new FormatClear(),
				new TextHighlight(),
				new Preview(),
				new Fullscreen(),
				new SelectAll(),
				new CodeView({
					codemirror: codemirror,
					codemirrorOptions: {
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
						tabMode: 'indent',
						mode: 'text/html',
					}
				})
			],
			// editor's content
			content: `
				<h1>Heading</h1>
				<p>This Editor is awesome!</p>
			`,
		}
    },

    methods: {
        addBlock(type) {
            this.storyObj['text_graphic_blocks'].push({
                'id': 'id' + this.uid(),
                'animate': '',
                'type': type,
                'is_open': false,
                'data': {}
            })
        },

        openBlock(block) {
            const keyOpenBlock = 'open-block-' + block.id
            const openBlockElems = this.$refs[keyOpenBlock]
            const keyCloseBlock = 'close-block-' + block.id 
            const closeBlockElems = this.$refs[keyCloseBlock]
            const keyContentBlock = 'content-block-' + block.id
            const contentBlockElems = this.$refs[keyContentBlock]
            
            for (let i = 0; i < openBlockElems.length; i++) {
                const openBlockEl = openBlockElems[i]
                const closeBlockEl = closeBlockElems[i]
                const contentBlockEl = contentBlockElems[i]

                openBlockEl.style.display = 'none'
                closeBlockEl.style.display = 'inline-block'
                contentBlockEl.style.display = 'block'
            }
        },

        closeBlock(block) {
            const keyOpenBlock = 'open-block-' + block.id
            const openBlockElems = this.$refs[keyOpenBlock]
            const keyCloseBlock = 'close-block-' + block.id 
            const closeBlockElems = this.$refs[keyCloseBlock]
            const keyContentBlock = 'content-block-' + block.id
            const contentBlockElems = this.$refs[keyContentBlock]
            
            for (let i = 0; i < openBlockElems.length; i++) {
                const openBlockEl = openBlockElems[i]
                const closeBlockEl = closeBlockElems[i]
                const contentBlockEl = contentBlockElems[i]

                openBlockEl.style.display = ''
                closeBlockEl.style.display = 'none'
                contentBlockEl.style.display = 'none'
            }
        },

        removeBlock(block_index) {
            this.storyObj['text_graphic_blocks'].splice(block_index, 1)
        },
 
        uid() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        },

        ...mapMutations(['loadImage', 'deleteImage'])
    },

    computed: {
        ...mapGetters(['rule_params', 'rules_name', 'vars'])
    },

    created() {
        // this.story['is_closed_settings'] = true
        //this.$store.dispatch('getSettings')
    },

    mounted() {
        const locale = document.querySelector('#app-locale').value.slice(0, 2)
        this.$i18n.locale = locale
    }
}
</script>

<style scoped>
    .sitestories-content-text-graphic__buttons {
        margin-bottom: 13px;
        margin-top: 30px;
    }

    .sitestories-content-text-graphic__button {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
        padding: 5px 10px;
        color: #727272;
        font-weight: 700;
        text-decoration: none;
        font-size: 11px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        border-radius: 5px;
        text-transform: uppercase;
    }

    .sitestories-content-text-graphic__button:last-child {
        margin-right: 0;
    }

    .sitestories-content-text-graphic__td {
        display: inline-block;
        padding: 0.3125rem 0.6875rem;
        box-sizing: border-box;
    }

    .sitestories-content-text-graphic__td_close {
        display: none;
    }

    .sitestories-content-text-graphic__td:nth-child(1) {
        width: 10%;
    }

    .sitestories-content-text-graphic__td:nth-child(2) {
        width: 76%;
    }

    .sitestories-content-text-graphic__td:nth-child(3) {
        width: 6%;
    }

    .sitestories-content-text-graphic__td:nth-child(4) {
        width: 6%;
    }

    .sitestories-content-text-graphic__td:nth-child(5) {
        width: 6%;
    }

    .sitestories-content-text-graphic__tr {
        
    }

    .sitestories-content-text-graphic__tr:nth-child(odd) .sitestories-content-text-graphic__td {
        background-color: #eef7fd;
    }

    .sitestories-content-text-graphic__td_content {
        display: none;
        background-color: #fff;
        padding: 10px 30px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        max-width: 1050px;
    }

    .sitestories-content-text-graphic__tr:nth-child(odd) .sitestories-content-text-graphic__td_content {
        background-color: #fff;
    }

    .ui-1 .sitestories-content-text-graphic__td {
        padding: 10px 0;
    }

    .ui-1 .sitestories-content-text-graphic__td_content {
        padding: 20px;
    }

    .ui-2 .sitestories-content-text-graphic__td_content {
        padding: 20px 0 30px 0;
    }
</style>
