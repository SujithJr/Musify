<template>
    <div>
        <div class="flex items-center justify-between">
            <h2>Albums</h2>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Create Album</button>
        </div>
        <hr>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header card-header ">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Create Album</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addAlbum()" class="mt-2" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Add Album" v-model="album" required>
                            </div>
                            <div class="form-group">
                                <button class="btn bg-grey btn-small" @click.prevent="onPickFile">Upload Image</button>
                                <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
                            </div>
                            <div class="form-group relative inline-block c-form-group" v-if="image" style="height: 150px">
                                <button class="w-full h-full text-red absolute text-2xl font-bold c-cross-button" @click.prevent="removeImage()">x</button>
                                <img :src="image" class="h-full block" v-if="show">
                            </div>
                            <div class="modal-footer pb-0">
                                <input type="submit" class="btn bg-pink-dark text-white px-6" value="Add Album">
                                <button type="button" class="btn bg-primary text-white" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row mb-5">
            <div class="col-md-12">
                <form @submit.prevent="addAlbum()" class="mt-2" enctype="multipart/form-data">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Add Album" v-model="album" required>
                    </div>
                    <div class="form-group">
                        <button class="btn bg-grey btn-small" @click.prevent="onPickFile">Upload Image</button>
                        <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
                    </div>
                    <div class="form-group" v-if="image">
                        <img :src="image" style="height: 130px;">
                    </div>
                    <input type="submit" class="btn bg-pink-dark text-white px-6" value="Add Album">
                </form>
            </div>
        </div> -->
        <div class="row mt-16">
            <div class="col-md-4 c-column" v-for="album in albums" :key="album.id">
                <div class="card mb-3 w-full border-0">
                    <!-- <img :src="user.image" class="card-img-top"> -->
                    <div class="card-body">
                        <!-- <h5 class="card-title">{{ album.image }}</h5> -->
                        <div class="block c-profile rounded-full shadow-md mx-auto">
                            <img :src="'storage/' + album.image" alt="Image" class="block w-full rounded-full h-full c-profile-image">
                        </div>
                        <div class="mt-8 text-center">
                            <h3 class="header">{{ album.name }}</h3>
                            <p class="card-text text-red">{{ album.created_at | dateFormat }}</p>
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

    mounted() {
        this.$store.dispatch('fetchUsers')
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

        addAlbum () {
            this.$store.dispatch('addAlbum', this.content)
            this.album = ''
            this.image = ''
        },
    },

    computed: {
        ...mapGetters([
            'users',
            'albums'
        ])
    }
}
</script>

<style scoped>
.c-profile {
    width: 250px;
    height: 250px;
}
.c-profile-image {
    object-fit: cover;
}
.c-column:nth-child(even) .card {
    background: #f1f5f8;
}
.c-cross-button {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2px 10px;
    background: rgba(255, 255, 255, 0.5);
    transition: opacity .15s linear;
    display: none;
}
.c-form-group:hover .c-cross-button {
    transition: opacity .15s linear;
    display: block;
}
</style>
