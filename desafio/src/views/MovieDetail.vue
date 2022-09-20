<template>
    <h1>{{ title }}</h1>
    <p>{{ poster_path }}</p>
    <button @click="updateFavorite">Favorite</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['id', 'title', 'poster_path'],
    methods: {
        updateFavorite() {
            this.$store.dispatch('updateFavorite', this.id)
        }
    },
})
</script>

<style scoped>

</style>