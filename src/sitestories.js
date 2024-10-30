import { Instagram, Facebook, Samokat, Vk, Whatsapp, Amp } from './use_cases/themes/themes'

(function() {
    class Sitestories {
        constructor(params) {
            this.id = params.id
            this.el = document.querySelector('.sitestories' + '#' + this.id)
            this.theme = this.el.getAttribute('data-theme')
    
            this.initTheme()
        }
    
        initTheme() {            
            switch (this.theme) {
                case 'instagram':
                    new Instagram({
                        storiesEl: this.el,
                    })
                    break
                case 'facebook':
                    new Facebook({
                        storiesEl: this.el,
                    })
                    break
                case 'samokat':
                    new Samokat({
                        storiesEl: this.el,
                    })
                    break
                case 'vkontakte':
                    new Vk({
                        storiesEl: this.el,
                    })
                    break
                case 'whatsapp':
                    new Whatsapp({
                        storiesEl: this.el,
                    })
                    break
                case 'amp':
                    new Amp({
                        storiesEl: this.el,
                    })
                    break
                default:
                    console.error('[sitestories]: Theme not defined "' + this.theme + '"')
                    return
            }
        }
    }
    
    window.addEventListener('DOMContentLoaded', function() {
        // Instagram
        new Sitestories({
            id: 'stories-instagram-desktop',
        })
        new Sitestories({
            id: 'stories-instagram-mobile',
        })

        // Facebook
        new Sitestories({
            id: 'stories-facebook-desktop',
        })
        new Sitestories({
            id: 'stories-facebook-mobile',
        })

        // Samokat
        new Sitestories({
            id: 'stories-samokat-desktop',
        })
        new Sitestories({
            id: 'stories-samokat-mobile',
        })

        // Vk
        new Sitestories({
            id: 'stories-vk-desktop',
        })
        new Sitestories({
            id: 'stories-vk-mobile',
        })

        // Whatsapp
        new Sitestories({
            id: 'stories-whatsapp-desktop',
        })
        new Sitestories({
            id: 'stories-whatsapp-mobile',
        })

        // Amp
        new Sitestories({
            id: 'stories-amp-desktop',
        })
    })
})()
