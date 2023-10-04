<script setup>
const props = defineProps({
    card: Object
})
</script>

<template>
    <div class="rowCardPoke">
        <h3>{{ card.name }}</h3>
        <img loading="lazy" :src="card.images.large">
    </div>
</template>

<style scoped>
.rowCardPoke {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.rowCardPoke img {
    width: 40%;
    height: auto;
}

.rowCardPoke img:hover {
    cursor: pointer;
}
</style>
