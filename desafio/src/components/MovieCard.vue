<template>
    <div class="movie-card">
        <h4>{{ movie.title }}</h4>
        <img :src="url" alt="movie's poster">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { img_path } from '@/types';

export default defineComponent({
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            url: img_path + this.movie.poster_path
        }
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