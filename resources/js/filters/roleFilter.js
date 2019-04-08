import Vue from 'vue'

Vue.filter('roleFilter', function (value) {
    if (value === 1) {
        return 'Super Admin'
    } else if (value === 2) {
        return 'Admin'
    } else {
        return 'Member'
    }
})
