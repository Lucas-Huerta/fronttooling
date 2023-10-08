<script setup>
import cardsHook from "@/hooks/cardsHook";
import typesHook from "@/hooks/typesHooks";
import setHook from "@/hooks/setHook";
import { ref } from "vue";
import Card from "@/components/Card.vue";

const tabCard = ref([]);
const tabCardFiltre = ref([]);
const tabTypes = ref([]);
const isLoading = ref(true);
const tabSet = ref([]);
const oneType = ref();

const fetchSet = async () => {
    try {
        const response = await setHook.findAllSets();
        tabSet.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

// fetch des données
const fetchCards = async () => {
    try {
        const response = await cardsHook.findAllCards();
        tabCard.value = response.data;
        await fetchSet();
    } catch (error) {
        console.log(error);
    }
    finally {
        isLoading.value = false;
        console.log("card", tabCard.value);
    }
};

const fetchTypes = async () => {
    try {
        const response = await typesHook.findAllTypes();
        tabTypes.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

const onClickType = (type) => {
    const tabNewCard = ref([]);
    tabCardFiltre.value = [];
    if (oneType.value === type) {
        oneType.value = "";
        return;
    } else {
        oneType.value = type;
        for (let i = 0; i < tabCard.value.length; i++) {
            const element = tabCard.value[i];
            if (element.types.includes(type)) {
                tabNewCard.value.push(element);
            }
        }
        tabCardFiltre.value = tabNewCard.value;
    }
}

fetchCards();
fetchTypes();
</script>

<template>
    <h1>
        You're best Pokedex
    </h1>
    <div class="containerPoke">
        <div class="columnLoader" v-if="isLoading">
            <h3>Loading</h3>
            <div class="loader"></div>
        </div>

        <div v-else>
            <div class="rowTypes">
                <p class="chooseType">
                    Choose your type :
                </p>
                <div class="allTypes">
                    <p v-for="(type, index) in tabTypes" :key="index" @click="onClickType(type)"
                        :class="{ active: oneType === type }" class="type">
                        {{ type }}
                    </p>
                </div>
            </div>
            <div class="rowCards">
                <Card v-if="tabCardFiltre.length < 1" v-for="(card, index) in tabCard" :card="card" :key="index" />
                <Card v-else v-for="(card, i) in tabCardFiltre" :card="card" :key="i" />
            </div>
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
}

.columnLoader {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.rowTypes {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.chooseType {
    font-family: "Inter";
}

.allTypes {
    display: flex;
    flex-direction: row;
    gap: 2vw;
    margin: auto;
    overflow-x: scroll;
}

.type {
    width: 10%;
    text-align: center;
    background-color: #3498db;
    border-radius: 5px;
    color: white;
    padding: 10px;
    border: 1px solid #3498db;
    font-family: "Inter";
    transition: all 0.3s ease;
}

.type:hover {
    background-color: white;
    color: #3498db;
    border: 1px solid #3498db;
}

.active {
    background-color: white;
    color: #3498db;
    border: 1px solid #3498db;
}

.rowCards {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5vw;
}
</style>
