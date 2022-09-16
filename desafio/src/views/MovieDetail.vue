<template>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.poster_path }}</p>
</template>

<script lang="ts">
// import MovieService from '@/services/MovieService';
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['id'],
    data() {
        return {
            movie: null
        }
    },
    created() {
        // MovieService.getMovie(this.id)
        //     .then(response => {
        //         this.movie = response.data.results
        //     }).catch((err: any) => {
        //         console.log(err)
        //     });
    },
})
</script>

<style scoped>

</style>