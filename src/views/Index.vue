<script setup>
import Button from '../components/Button.vue';
</script>

<template>
    <p>
        Ajouter des composants dans le dossier <code>src/components</code>
        <br />
        Ajouter des vues dans le dossier <code>src/views</code>
        <br />
        Les tests se trouvent dans le dossier <code>src/tests</code>
        <br />
        Les hooks personnalisés se trouvent dans le dossier <code>src/hooks</code>
        <br />
        Un storyBook est disponible avec la commande <code>npm run storybook</code>
    </p>
    <Button :textButton="'My Custom Button'" />
</template>

<style lang="scss" scoped></style>
