<template>
    <div class="filter">
        <label data-testid="filter-label" for="filter" id="filter-label">Filter</label>
        <input data-testid="filter-input" id="filter" v-model="filter" type="text" placeholder="Movie's title" @keyup="updateFilter">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            filter: this.$store.state.filter
        }
    },
    methods: {
        updateFilter() {
            this.$store.dispatch('updateFilter', this.filter);
        }
    }
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