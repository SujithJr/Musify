<template>
    <div>
        <!-- <div class="row">
            <div class="col-md-6 col-md-offset-3"> -->
                <form @submit.prevent="login" method="post">
                    <!-- <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <label for="role">Role</label>
                        <input type="text" id="role" class="form-control" placeholder="Role" v-model="role_id" required>
                    </div> -->
                    <div class="form-group">
                        <label for="email" class="text-grey">E-mail</label>
                        <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-grey">Password</label>
                        <input type="password" id="password" class="form-control" v-model="password" required>
                    </div>
                    <button type="submit" class="btn bg-green text-white">Sign in</button>
                </form>
            <!-- </div>
        </div> -->
    </div>
</template>

<script>
export default {
     data(){
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        async login () {
            const details = {
                username: this.email,
                password: this.password
            }
            this.$store.dispatch('login', details)
        },
    }
}
</script>


