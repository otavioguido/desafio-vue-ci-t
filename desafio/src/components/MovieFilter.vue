<template>
    <div class="filter">
        <label for="filter" id="filter-label">Filter</label>
        <input id="filter" v-model="filter" type="text" placeholder="Movie's name" @keyup="updateFilter">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            filter: ''
        }
    },
    methods: {
        updateFilter() {
            this.$store.dispatch('updateFilter', this.filter);
        }
    },
    created () {
        this.filter = this.$store.state.filter;
    },
})
</script>

<style scoped>
.filter {
    margin: 1em;
}
#filter-label {
    padding: 0.5em;
}
</style>