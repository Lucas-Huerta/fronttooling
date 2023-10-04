<script setup>
import cardsHook from "@/hooks/cardsHook";
import { ref } from "vue";

const tabCard = ref([]);
const isLoading = ref(true);

// fetch des données
const fetchCards = async () => {
    try {
        const response = await cardsHook.findAllCards();
        tabCard.value = response.data;
    } catch (error) {
        console.log(error);
    }
    finally {
        isLoading.value = false;
    }
};
fetchCards();
</script>

<template>
    <h1>
        Pokedex
    </h1>
    <div class="containerPoke">
        <div v-if="isLoading" class="loader"></div>

        <div class="rowCardPoke" v-else v-for="(card, index) in tabCard" :key="index">
            <h3>{{ card.name }}</h3>
            <img :src="card.images.large">
        </div>
    </div>
</template>

<style scoped>
.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.5s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.containerPoke {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5vw;
}

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
</style>
