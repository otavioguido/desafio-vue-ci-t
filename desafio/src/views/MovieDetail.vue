<template>
    <h1>{{ title }}</h1>
    <p>{{ poster_path }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['id', 'title', 'poster_path']
})
</script>

<style scoped>

</style>