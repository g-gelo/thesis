<template>
    <div>
        <v-img
            aspect-ratio="16/9"
            src="/img/CvSULogo.jpg"
            class="top-image"
        ></v-img>
        <v-container>
            <the-card />
        </v-container>
    </div>
</template>

<script setup>
import TheCard from "../components/TheCard.vue";
//
</script>

<style scoped>
.top-image {
    position: relative;
}
</style>
