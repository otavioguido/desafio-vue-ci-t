<template>
    <h1>{{ title }}</h1>
    <p>{{ poster_path }}</p>
    <button @click="onClick">Favorite</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['id', 'title', 'poster_path'],
    methods: {
        onClick() {
            this.$store.dispatch('manageFavoriteMovies', this.id)
        }
    },
})
</script>

<style scoped>

</style>