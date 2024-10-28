import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url_controller_get_settings = "?plugin=sitestories&module=getSettings"

const post_params = {
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data charset=utf-8',
    },
}

const store = new Vuex.Store({
    state: {
        loading: true,
        settings: {},
        rule_params: {},
        rules_name: '',
        vars: {},
        state_story_previews: 'show'
    },
    actions: {
        getSettings(ctx) {
            axios.get(url_controller_get_settings)
                .then(function (response) {
                    // handle success
                    
                    ctx.commit('setSettings', JSON.parse(response.data.data))
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                    ctx.commit('setLoading', false)
                })
        },
    },
    mutations: {
        setSettings(state, settings) {
            const idTool = document.querySelector('#id-tool').value
            Vue.set(state, 'settings', settings)
            Vue.set(state, 'rule_params', getRuleParams(settings, idTool))
            // settings[0]['rule_params']['stories']['groups_stories'] = JSON.parse(settings[0]['rule_params']['stories']['groups_stories'])
            Vue.set(state, 'rules_name', document.querySelector('#rules_name').value)
            Vue.set(state, 'vars', {
                'path_public_files': document.querySelector('#path_public_files').value,
                'url_public_files': document.querySelector('#url_public_files').value,
                'ui_version': document.querySelector('#ui_version').value,
                'is_premium': document.querySelector('#is_premium').value == 'true',
            })
        },

        updateSettings(state, params) {
            const [obj, key, value] = params
            Vue.set(obj, key, value)
        },

        setLoading(state, status) {
            state.loading = status
        },

        loadImage(state, params) {
            const e = params['e']
            const file = (e.target.files ? e.target.files[0] : null)
            const fileName = e.target.files[0].name
            const fileType = file.type.split('/',)[0]
            const loadTypeFile = params['load_type_file'] ? params['load_type_file'] : 'image'

            Vue.set(params['obj'], params['prop_invalid_format'], false)
            Vue.set(params['obj'], params['prop_invalid_name'], false)

            if (!file) {
                console.error('[sitestories]: ', 'Error loading file')
                return
            }

            if (loadTypeFile === 'image' && !/(png|jpe?g|gif|svg|webp)$/i.test(fileName)) {
                Vue.set(params['obj'], params['prop_invalid_format'], true)
                return
            } 
            
            if (loadTypeFile === 'video' && !/(ogv|oga|ogx|ogg|mp4|webm|mkv)$/i.test(fileName)) {
                Vue.set(params['obj'], params['prop_invalid_format'], true)
                return
            } 
            
            if (fileType !== 'video' && fileType !== 'image') { 
                Vue.set(params['obj'], params['prop_invalid_format'], true)
                return;
            }

            if (/( |#|%|&|{|}|\\\|<|>|\?|\/|\$|:|@|\+|`|\||=)/i.test(fileName)) {
                Vue.set(params['obj'], params['prop_invalid_name'], true)
                return;
            }

            const urlController = '?plugin=sitestories&module=marketing&action=UploadImage'
            const data = new FormData()
            
            data.append('image', file)
            data.append('type_file', fileType)
            data.append('dir', params['dir'])
            data.append('_csrf', getCookie('_csrf'))

            axios({
                method: 'post',
                url: urlController,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('[sitestories] uploaded file: ', response)
                    Vue.set(params['obj'], params['prop_name'], fileName)
                    Vue.set(params['obj'], params['prop_dir'], params['dir'])
                    const image_path = state.vars['url_public_files'] + '/' + params['obj'][params['prop_dir']] + '/' + params['obj'][params['prop_name']]
                    Vue.set(params['obj'], params['prop_path'], image_path)
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        deleteImage(state, params) {
            const fileName = params['file_name']

            if (!fileName) {
                console.log('[sitestories]: ', 'File name error')
                return
            }

            const urlController = '?plugin=sitestories&module=marketing&action=DelImage'
            const data = new FormData()
            data.append('file_name', fileName)
            data.append('dir', params['dir'])
            data.append('_csrf', getCookie('_csrf'))

            axios({
                method: 'post',
                url: urlController,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('[sitestories] del file: ', response)
                    Vue.set(params['obj'], params['prop_name'], '')
                    Vue.set(params['obj'], params['prop_path'], '')
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        setStateStoryPreviews(state, stateStory) {
            state.state_story_previews = stateStory
        },

        getListProducts(state, params) {
            const self = this
            const urlController = '?plugin=sitestories&module=marketing&action=GetProducts'
            const data = new FormData()
            const e = params['e']
            const id_list_products = e.target.value.trim()
            params['group']['story_list'] = []
            Vue.set(params['group'], 'is_error_list_id', false)
            
            data.append('id_list_products', id_list_products)
            data.append('_csrf', getCookie('_csrf'))

            axios({
                method: 'post',
                url: urlController,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('[sitestories] get list products: ', response)

                    if (response.data.status === 'ok') {
                        const products = response.data.data.list_products
                    
                        for (const key in products) {
                            if (Object.hasOwnProperty.call(products, key)) {
                                const product = products[key]
                                params['group']['story_list'].push({
                                    id: 'id' + product.id + uid(),
                                    product: product,
                                    story_type: 'product',
                                    media_story_type: 'image',
                                    image_path: product['main_image'],
                                    state: 'enabled',
                                    story_data_start: product['data_start'],
                                    story_time_start: product['time_start']
                                })
                            }
                        }
                    }

                    if (response.data.status === 'fail') {
                        Vue.set(params['group'], 'is_error_list_id', true)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        getProductsCollection(state, params) {
            const urlController = '?plugin=sitestories&module=marketing&action=GetProducts'
            const data = new FormData()
            const e = params['e']
            const id_list_products = e.target.value.trim()
            Vue.set(params['story'], 'products', '')
            Vue.set(params['story'], 'is_error_list_id', false)
            
            data.append('id_list_products', id_list_products)
            data.append('_csrf', getCookie('_csrf'))

            axios({
                method: 'post',
                url: urlController,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('[sitestories] get products collection: ', response)
 
                    if (response.data.status === 'ok') {
                        const products_response = response.data.data.list_products
                        const products = []

                        for (let i = 0; i < products_response.length; i++) {
                            const products_arrays = products_response[i];

                            for (let j = 0; j < products_arrays.length; j++) {
                                const product_data = products_arrays[j];
                                products.push(product_data)
                            }
                        }

                        Vue.set(params['story'], 'products', products_response)
                    }

                    if (response.data.status === 'fail') {
                        Vue.set(params['story'], 'is_error_list_id', true)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        getProduct(state, params) {
            const urlController = '?plugin=sitestories&module=marketing&action=GetProducts'
            const data = new FormData()
            const e = params['e']
            const id_product = e.target.value.trim()
            Vue.set(params['story'], 'product', '')
            Vue.set(params['story'], 'is_error_product_id', false)
            
            data.append('id_product', id_product)
            data.append('_csrf', getCookie('_csrf'))

            axios({
                method: 'post',
                url: urlController,
                data: data,
                responseType: 'json',
                responseEncoding: 'utf8',
                withCredentials: true,
            })
                .then(function (response) {
                    console.log('[sitestories] get product: ', response)

                    if (response.data.status === 'ok') {
                        const product = response.data.data.product
                        Vue.set(params['story'], 'product', product)
                    }

                    if (response.data.status === 'fail') {
                        Vue.set(params['story'], 'is_error_product_id', true)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        openPopupCssInstruction(state) {
            document.querySelector('#sitestories-popup-instruction-css').classList.add('sitestories-popup_open')
        },

        openPopupShoppingTag(state) {
            document.querySelector('#sitestories-popup-shopping-tag').classList.add('sitestories-popup_open')
        }
    },
    getters: {
        settings(state) {
            return state.settings
        },

        rule_params(state) {
            return state.rule_params
        },

        rules_name(state) {
            return state.rules_name
        },

        vars(state) {
            return state.vars
        },

        stateStoryPreviews(state) {
            return state.state_story_previews
        },

        loading(state) {
            return state.loading
        },
    },
})

function getCookie(name) {
    var matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getRuleParams(settings, idTool) {
    for (let i = 0; i < settings.length; i++) {
        const element = settings[i]

        if (element['id'] == idTool) {
            if (element['rule_params']['stories']['groups_stories'] && typeof element['rule_params']['stories']['groups_stories'] === 'string') {
                element['rule_params']['stories']['groups_stories'] = JSON.parse(element['rule_params']['stories']['groups_stories'])
            }

            return element['rule_params']
        }
        
    }

    return {
        'stories': {
            'groups_stories': []
        }
    }
}

export default store
