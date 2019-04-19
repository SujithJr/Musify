<template>
    <div>
        {{ triggerError(success) }}
    </div>
</template>

<script>
export default {
    props: {
        success: null,
        error: null,
    },

    data: () => ({
        successKey: '',
        errorKey: ''
    }),

    methods: {
        triggerError (data) {
            // let errorData
            // if (this.proj_local_error) {
            //     errorData = this.proj_local_error
            // } else if (error) {
            //     errorData = error
            // } else {
            //     errorData = this.proj_error
            // }
            if (this.success) {
                this.successKey = true
            } else {
                this.successKey = false
            }
            this.$snotify.html(`<div class="snotifyToast__title title"><b v-if="${!this.successKey}">Error</b><b v-if="${this.successKey}">Success</b></div>
            <div class="snotifyToast__body"><span>${ data }</span></div></div><div class="snotify-icon snotify-icon--error"></div> `,
            {
                type: 'error',
                timeout: 5000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                // buttons:
                // [
                //     {text: 'Ok', action: null, bold: true},
                //     {text: 'Cancel', action: null, bold: false},
                // ]
            })
        },
    }
}
</script>
