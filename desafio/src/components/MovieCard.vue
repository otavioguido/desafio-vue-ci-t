<template>
    <router-link
        :to="{ name: 'MovieDetail', params: { id: movie.id}, query: {title: movie.title, poster_path: movie.poster_path}}">
        <div class="movie-card">
            <h4>{{ movie.title }}</h4>
            {{ movie.poster_path}}
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        movie: {
            type: Object,
            required: true
        },
    }
})
</script>

<style scoped>
.movie-card {
    padding: 20px;
    width: 300px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.movie-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>