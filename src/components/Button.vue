<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    textButton: String,
});

let count = ref(0);
const handleClick = () => {
    count.value += 1;
}
</script>

<template>
    <button @click="handleClick" class="button">
        {{ props.textButton }}
        {{ count }}
    </button>
</template>

<style lang="scss" scoped></style>
