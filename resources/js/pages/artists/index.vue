<template>
    <div>
        <h2>Artists</h2>
        <hr>
        <div class="row">
            <div class="col-md-4" v-for="user in users" :key="user.id">
                <div class="card bg-light mb-3 w-full">
                    <div class="card-header flex items-center justify-between">
                        <div>{{ user.name }}</div>
                        <div class="text-black font-bold">{{ user.role_id | roleFilter }}</div>
                    </div>
                    <!-- <img :src="user.image" class="card-img-top"> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ user.email }}</h5>
                        <p class="card-text">{{ user.created_at }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    mounted() {
        this.$store.dispatch('fetchUsers')
    },

    computed: {
        ...mapGetters([
            'users'
        ])
    }
}
</script>
