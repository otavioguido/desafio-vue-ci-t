<template>
    <div class="movies">
        <MovieCard v-for="movie in results" :key="movie.id" :movie="movie" />  
    </div>
</template>

<script lang="ts">
import MovieCard from '../components/MovieCard.vue';
import MovieService from '../services/MovieService';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieList',
    components: {
        MovieCard
    },
    data() {
        return {
            results: null
        }
    },
    created () {
        MovieService.getMovies()
        .then(response => {
            this.results = response.data.results
        }).catch((err: any) => {
            console.log(err)
        });
    },
})
</script>

<style scoped>
.movies {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>