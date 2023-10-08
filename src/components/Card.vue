<script setup>
import { ref } from "vue";

const props = defineProps({
    card: Object
})

const cardRef = ref(null);

const onMoveCard = (event) => {
    const card = cardRef.value;
    const cardRect = card.getBoundingClientRect();
    const mouseX = event.clientX - cardRect.left;
    const mouseY = event.clientY - cardRect.top;
    const rotateX = (mouseY / cardRect.height - 0.5) * 100;
    const rotateY = (mouseX / cardRect.width - 0.5) * 100;
    card.style.transform = `translateZ(50px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
const onLowerCard = () => {
    cardRef.value.style.transform = "none";
};
</script>

<template>
    <div class="rowCardPoke">
        <h3 style="text-align: center; margin-bottom: 2%;">{{ card.name }}</h3>
        <div class="rowTypes">
            <p>Type: </p>
            <p v-for="type in card.types" :key="type">
                {{ type }}
            </p>
        </div>
        <img @mousemove="onMoveCard" @mouseleave="onLowerCard" ref="cardRef" loading="lazy" :src="card.images.large">
    </div>
</template>

<style scoped>
.rowCardPoke {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.rowTypes {
    display: flex;
    flex-direction: row;
    gap: 5%;
    font-family: "Inter";
}

.rowCardPoke img {
    width: 40%;
    height: auto;
    object-fit: cover;
}

.rowCardPoke img:hover {
    cursor: pointer;
    position: absolute;
    z-index: 10;
    transition: width 0.3s ease;
    width: 20%;
    box-shadow: 0 100px 130px rgba(0, 0, 0, 0.2);
}
</style>
