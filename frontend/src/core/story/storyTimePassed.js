export class StoryTimePassed {
    constructor(wrapperEl, storyEl, lang) {
        this.wrapperEl = wrapperEl
        this.storyEl = storyEl
        this.timePublic = this.storyEl.getAttribute('data-time-public')
        this.el = this.wrapperEl.querySelector('#story-time-passed')
        this.lang = lang

        if (this.el) {
            if (this.timePublic) {
                this.init()
                this.el.classList.remove('sitestories-time-passed_hide')
            } else {
                this.el.classList.add('sitestories-time-passed_hide')
            }
        } 
    }

    init() {
        this.el.innerHTML = this.timeSince(new Date(this.timePublic))
    }

    timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000)
        let interval = seconds / 31536000

        const textTimeLang = this.getTextTimeLang()
        let textTime

        if (interval > 1) {
            interval = Math.floor(interval)

            if (interval <= 1) {
                textTime = textTimeLang['year'][this.lang]
            }

            if (interval > 1 && interval < 5) {
                textTime = textTimeLang['years'][this.lang]
            }

            if (interval >= 5) {
                textTime = textTimeLang['years_5'][this.lang]
            }

            return interval + ' ' + textTime
        }

        interval = seconds / 2592000

        if (interval > 1) {
            interval = Math.floor(interval)

            if (interval <= 1) {
                textTime = textTimeLang['month'][this.lang]
            }

            if (interval > 1 && interval < 5) {
                textTime = textTimeLang['months'][this.lang]
            }

            if (interval >= 5) {
                textTime = textTimeLang['months_5'][this.lang]
            }

            return interval + ' ' + textTime
        }

        interval = seconds / 86400

        if (interval > 1) {
            interval = Math.floor(interval)

            if (interval <= 1) {
                textTime = textTimeLang['day'][this.lang]
            }

            if (interval > 1 && interval < 5) {
                textTime = textTimeLang['days'][this.lang]
            }

            if (interval >= 5) {
                textTime = textTimeLang['days_5'][this.lang]
            }

            return interval + ' ' + textTime
        }

        interval = seconds / 3600

        if (interval > 1) {
            interval = Math.floor(interval)

            if (interval <= 1) {
                textTime = textTimeLang['hour'][this.lang]
            }

            if (interval > 1 && interval < 5) {
                textTime = textTimeLang['hours'][this.lang]
            }

            if (interval >= 5) {
                textTime = textTimeLang['hours_5'][this.lang]
            }

            return interval + ' ' + textTime
        }

        interval = seconds / 60

        if (interval > 1) {
            interval = Math.floor(interval)

            if (interval <= 1) {
                textTime = textTimeLang['minute'][this.lang]
            }

            if (interval > 1 && interval < 5) {
                textTime = textTimeLang['minutes'][this.lang]
            }

            if (interval >= 5) {
                textTime = textTimeLang['minutes_5'][this.lang]
            }

            return interval + ' ' + textTime
        }

        interval = Math.floor(interval)

        if (interval <= 1) {
            textTime = textTimeLang['second'][this.lang]
        }

        if (interval > 1 && interval < 5) {
            textTime = textTimeLang['seconds'][this.lang]
        }

        if (interval >= 5) {
            textTime = textTimeLang['seconds_5'][this.lang]
        }

        return interval + ' ' + textTime
    }

    getTextTimeLang() {
        return {
            "year" : {
              "en" : "year ago",
              "ru" : "год назад",
            },
            "years" : {
                "en" : "years ago",
                "ru" : "года назад",
            },
            "years_5" : {
                "en" : "years ago",
                "ru" : "лет назад",
            },
            "month" : {
                "en" : "month ago",
                "ru" : "месяц назад",
              },
            "months" : {
                "en" : "months ago",
                "ru" : "месяца назад",
            },
            "months_5" : {
                "en" : "months ago",
                "ru" : "месяцев назад",
            },
            "day" : {
                "en" : "day ago",
                "ru" : "день назад",
              },
            "days" : {
                "en" : "days ago",
                "ru" : "дня назад",
            },
            "days_5" : {
                "en" : "days ago",
                "ru" : "дней назад",
            },
            "hour" : {
                "en" : "hour ago",
                "ru" : "час назад",
              },
            "hours" : {
                "en" : "hours ago",
                "ru" : "часа назад",
            },
            "hours_5" : {
                "en" : "hours ago",
                "ru" : "часов назад",
            },
            "minute" : {
                "en" : "minute ago",
                "ru" : "минута назад",
              },
            "minutes" : {
                "en" : "minutes ago",
                "ru" : "минуты назад",
            },
            "minutes_5" : {
                "en" : "minutes ago",
                "ru" : "минут назад",
            },
            "second" : {
                "en" : "second ago",
                "ru" : "секунда назад",
              },
            "seconds" : {
                "en" : "seconds ago",
                "ru" : "секунды назад",
            },
            "seconds_5" : {
                "en" : "seconds ago",
                "ru" : "секунд назад",
            }
        }
    }
}