<template>
    <div>
        <!-- <div class="row">
            <div class="col-md-6 col-md-offset-3"> -->
                <div class="card w-1/2 mx-auto p-12 border-8 border-black-dark" style="background: #222;">
                    <form @submit.prevent="login">
                        <!-- <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" required>
                        </div>
                        <div class="form-group">
                            <label for="role">Role</label>
                            <input type="text" id="role" class="form-control" placeholder="Role" v-model="role_id" required>
                        </div> -->
                        <div class="form-group mb-6">
                            <label for="email" class="text-grey">E-mail</label>
                            <input type="email" id="email" class="form-control bg-grey-lighter" placeholder="user@example.com" v-model="email" required>
                        </div>
                        <div class="form-group mb-6">
                            <label for="password" class="text-grey">Password</label>
                            <input type="password" id="password" class="form-control bg-grey-lighter" placeholder="Password" v-model="password" required>
                        </div>
                        <button type="submit" class="btn bg-green text-white w-1/3 mx-auto block text-center">Sign in</button>
                    </form>
                </div>
                <!-- <div class="card bg-black w-1/2 mx-auto mt-12 p-12 border-8 border-black-dark">

                </div> -->
                <!-- <form @submit.prevent="addDirector()" class="mt-2" enctype="multipart/form-data">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Artist Name" v-model="director" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                    </div>
                    <div class="form-group">
                        <button class="btn bg-grey btn-small" @click.prevent="onPickFile">Upload <i class="material-icons block ml-2" style="vertical-align: middle;">image</i></button>
                        <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
                    </div>
                    <div class="form-group relative inline-block c-form-group" v-if="image" style="height: 150px">
                        <button class="w-full h-full text-red absolute text-2xl font-bold c-cross-button" @click.prevent="removeImage()">x</button>
                        <img :src="image" class="h-full block" v-if="show">
                    </div>
                    <div class="modal-footer pb-0">
                        <input type="submit" class="btn bg-pink-dark text-white px-6" value="Create">
                        <button type="button" class="btn bg-primary text-white" data-dismiss="modal" @click="removeImage()">Close</button>
                    </div>
                </form> -->
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

        onPickFile () {
            this.$refs.fileInput.click()
        },

        onFilePicked (event) {
            let fileData = event.target.files[0]
            this.readFile(fileData)
            let form = new FormData()
            form.append('image', fileData)
            form.append('name', this.artist)
            form.append('email', this.email)
            form.append('password', this.password)
            form.append('role_id', this.role)
            this.content = form
        },

        readFile (data) {
            let reader = new FileReader()
            reader.readAsDataURL(data)
            reader.addEventListener('load', () => {
                this.image = reader.result
                this.show = !this.show
            })
        },

        removeImage () {
            this.show = !this.show
            this.image = ''
        },


        // Register Director
        // onPickFile () {
        //     this.$refs.fileInput.click()
        // },

        // onFilePicked (event) {
        //     let fileData = event.target.files[0]
        //     this.readFile(fileData)
        //     let form = new FormData()
        //     form.append('image', fileData)
        //     form.append('name', this.director)
        //     form.append('email', this.email)
        //     form.append('password', this.password)
        //     form.append('role_id', 1)
        //     this.content = form
        // },

        // readFile (data) {
        //     let reader = new FileReader()
        //     reader.readAsDataURL(data)
        //     reader.addEventListener('load', () => {
        //         this.image = reader.result
        //         this.show = !this.show
        //     })
        // },

        // removeImage () {
        //     this.show = !this.show
        //     this.musician = ''
        //     this.image = ''
        //     this.email = ''
        //     this.password = ''
        //     this.role = ''
        // },

        addArtist () {
            this.$store.dispatch('register', this.content)
            setTimeout(() => {
                this.artist = ''
                this.image = ''
            }, 100)
        },

        // addDirector () {
        //     this.$store.dispatch('createDirector', this.content)
        //     setTimeout(() => {
        //         this.removeImage()
        //     }, 100)
        // },
    }
}
</script>


