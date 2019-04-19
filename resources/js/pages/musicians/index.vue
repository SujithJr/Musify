<template>
    <div>
        <div class="flex items-center justify-between">
            <h2 class="text-grey">Musicians</h2>
            <template v-if="currentUser">
                <button type="button" v-if="currentUser.role_id === 1" class="btn btn-primary flex" data-toggle="modal" data-target="#exampleModalCenter">Create Musician<i class="material-icons inline-block ml-2" style="vertical-align: middle;">music_note</i></button>
            </template>
        </div>
        <hr class="" style="background: rgba(255,255,255,0.2);">
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header card-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Create Musician</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addMusician()" class="mt-2" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Artist Name" v-model="musician" required>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                            </div>
                            <!-- <div class="form-group">
                                <input type="number" class="form-control" placeholder="Role Id" v-model="role" required>
                            </div> -->
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-16">
            <div class="col-md-4 c-column mb-12" v-for="item in musicians" :key="item.index">
                <div class="card w-full border-0 rounded-full">
                    <div class="card-body rounded-full">
                        <div class="block c-profile c-profile--artist w-full h-full relative rounded-full mx-auto">
                            <img :src="'storage/' + item.image" alt="Image" class="block w-full rounded-full h-full c-profile-image">
                            <!-- <div class="block absolute rounded-full c-circle">
                                <span></span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-center">
                    <h3 class="header text-white">{{ item.name }}</h3>
                    <p class="card-text" style="color: #38a89d;">{{ item.created_at | dateFormat }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        musician: '',
        email: '',
        password: '',
        image: '',
        // role: '',
        content: null,
        show: false,
    }),

    created() {
        this.$store.dispatch('musicians/fetchMusicians')
        // this.$store.dispatch('fetchUsers')
    },

    methods: {
        onPickFile () {
            this.$refs.fileInput.click()
        },

        onFilePicked (event) {
            let fileData = event.target.files[0]
            this.readFile(fileData)
            let form = new FormData()
            form.append('image', fileData)
            form.append('name', this.musician)
            form.append('email', this.email)
            form.append('password', this.password)
            form.append('role_id', 2)
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
            this.musician = ''
            this.image = ''
            this.email = ''
            this.password = ''
            this.role = ''
        },

        addMusician () {
            this.$store.dispatch('musicians/createMusician', this.content)
            setTimeout(() => {
                this.removeImage()
            }, 100)
        },
    },

    computed: {
        ...mapGetters('musicians', {
            // users: 'users',
            // albums: 'albums',
            // artists: 'artists',
            musicians: 'musicians',
            // directors: 'directors',
            // currentUser: 'currentUser'
        }),

        currentUser () {
            return this.$store.getters.currentUser
        }
    }
}
</script>

<style scoped>
.card, .card-body {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    background: #222 !important;
}
</style>
