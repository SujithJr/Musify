<template>
    <div class="relative">
        <div class="row" v-if="fetchSingleAlbum">
            <div class="col-xs-4">
                <div class="mx-auto" style="width: 350px; height: 370px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .8);">
                    <img :src="'/storage/' + fetchSingleAlbum.image" alt="" class="w-full h-full block" style="object-fit: cover;">
                </div>
            </div>
            <div class="col-xs-8">
                <div class="mt-8 pl-6">
                    <h2 class="text-white m-0">{{ fetchSingleAlbum.name }}</h2>
                    <h5 class="text-white leading-normal m-0 my-2 text-base">Year : <span class="c-desc">{{ fetchSingleAlbum.created_at | dmyFormat }}</span></h5>
                    <h5 class="text-white leading-normal m-0 ">Description : <span class="c-desc">{{ fetchSingleAlbum.description }}</span></h5>
                </div>
            </div>
        </div>
        <div class="fixed pin-b pin-r mr-8 mb-8 box-shade rounded-full">
            <button class="rounded-full btn btn-primary text-white text-center p-3 box-shade"><span class="material-icons block" style="vertical-align: middle;">edit</span></button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['albumId'],
    data () {
        return {

        }
    },

    created () {
        this.$store.dispatch('albums/fetchSingleAlbum', this.albumId)
    },

    computed: {
        fetchSingleAlbum () {
            return this.$store.getters['albums/singleAlbum']
        }
    }
}
</script>

<style scoped>
.c-desc {
    color: rgba(255,255,255,0.5);
}
</style>
