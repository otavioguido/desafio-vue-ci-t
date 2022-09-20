<template>
    <h1>{{ title }}</h1>
    <img :src="url" alt="movie's poster">
    <br />
    <button @click="updateFavorite" class="favorite-button">Favorite</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { img_path } from '@/types';

export default defineComponent({
    props: ['id', 'title', 'poster_path'],
    data() {
        return {
            url: img_path + this.poster_path
        }
    },
    methods: {
        updateFavorite() {
            this.$store.dispatch('updateFavorite', this.id)
        }
    },
})
</script>

<style scoped>
.favorite-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 2em;
}
</style>