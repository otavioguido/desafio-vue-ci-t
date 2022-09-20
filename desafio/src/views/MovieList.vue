<template>
    <MovieFilter data-testid='movie-list-filter'/>
    <div class="movies">
        <router-link
        class="movie-link" 
        v-for=" movie in movies" 
        :key="movie.id"
        :to="{ name: 'MovieDetail', params: { id: movie.id}, query: {title: movie.title, poster_path: movie.poster_path, id: movie.id}}">
            <MovieCard data-testid="movie" :movie=" movie" />
        </router-link>
    </div>
</template>

<script lang="ts">
import MovieCard from '@/components/MovieCard.vue';
import MovieFilter from '@/components/MovieFilter.vue'
import { Movie } from '@/types/index.js';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieList',
    components: {
        MovieCard,
        MovieFilter
    },
    created() {
        this.$store.dispatch('fetchMovies')
    },
    computed: {
        movies() {
            const filteredMovies: Array<Movie> = []

            if (this.$store.state.filter.length === 0) {
                return this.$store.state.movies
            }

            for (const movie of this.$store.state.movies) {
                if (movie.title.toLowerCase().startsWith(this.$store.state.filter.toLowerCase())) {
                    filteredMovies.push(movie)
                }
            }
            return filteredMovies
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
.movie-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>