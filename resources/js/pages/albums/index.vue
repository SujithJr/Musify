<template>
    <div>
        <div class="flex items-center justify-between">
            <h2 class="text-grey">Albums</h2>
            <template v-if="currentUser">
                <button v-if="currentUser.role_id === 1" type="button" class="btn btn-primary flex" data-toggle="modal" data-target="#exampleModalCenter">Create Album<i class="material-icons inline-block ml-2" style="vertical-align: middle;">library_music</i></button>
            </template>
        </div>
        <hr class="" style="background: rgba(255,255,255,0.2);">
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header card-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Create Album</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addAlbum()" class="mt-2" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Add Album" v-model="album" required>
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
                                <input type="submit" class="btn bg-pink-dark text-white px-6" value="Add Album">
                                <button type="button" class="btn bg-primary text-white" data-dismiss="modal" @click="removeImage()">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-16">
            <div class="col-md-4 c-column" v-for="album in albums" :key="album.id">
                <div class="card mb-8 w-full border-0">
                    <div class="card-body">
                        <div class="block c-profile relative rounded-full mx-auto">
                            <img :src="'storage/' + album.image" alt="Image" class="block w-full rounded-full h-full c-profile-image">
                            <!-- <div class="block absolute rounded-full c-circle">
                                <span></span>
                            </div> -->
                        </div>
                        <hr class="mt-8" style="background: rgba(255,255,255,0.2);">
                        <div class="mt-4 text-left flex items-start justify-between">
                            <div>
                                <h3 class="header text-white">{{ album.name }}</h3>
                                <p class="card-text" style="color: #38a89d;">{{ album.created_at | dmyFormat }}</p>
                            </div>
                            <template v-if="album">
                                <button @click.prevent="albumId(album.uuid)" class="btn btn-sm bg-teal-dark text-white no-underline outline-none">Explore</button>
                            </template>
                            <!-- <button class="btn btn-sm bg-teal-dark text-white" :to="album.uuid">Explore</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        album: '',
        content: null,
        image: '',
        show: false,
    }),

    created () {
        console.log('Mounted')
        this.$store.dispatch('albums/fetchAlbums')
        // this.$store.dispatch('fetchUsers')
        // setTimeout(() => {
        //     this.$store.dispatch('albums/fetchAlbums')
        // }, 1000)
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
            form.append('name', this.album)
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

        albumId (id) {
            // this.$store.dispatch('fetchSingleAlbum')
            this.$router.replace({
                name: 'singleAlbum',
                params: {
                    albumId: id
                }
            })
        },

        addAlbum () {
            this.$store.dispatch('albums/addAlbum', this.content)
            setTimeout(() => {
                this.album = ''
                this.image = ''
            }, 100)
        },
    },

    computed: {
        ...mapGetters('albums', {
            albums: 'albums',
            singleAlbum: 'singleAlbum',
        }),

        currentUser () {
            return this.$store.getters.currentUser
        }
    }
}
</script>

<style scoped>
.card {
    background: #222 !important;
}
</style>
