<template>
    <div class="movies">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />  
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieCard from '@/components/MovieCard.vue';

export default defineComponent({
    components: {
        MovieCard,
    },
    computed: {
        movies() {
            return this.$store.state.favoriteMovies
        }
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
