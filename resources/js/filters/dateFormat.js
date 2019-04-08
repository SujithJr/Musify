import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', function (value) {
    if (value) {
        return moment(String(value)).utc().local().format('DD/MM/YYYY')
    }
})
