<template>
    <div>
        <v-container fluid>
            <v-row justify="center">
                <v-col
                    :cols="cardCols"
                    :sm="cardCols"
                    :md="cardCols"
                    :lg="cardCols"
                >
                    <v-card
                        class="mx-auto rounded-be-xl"
                        :class="{ flipped: isFlipped }"
                        color="bg200"
                        max-width="90%"
                        height="35vh"
                        prepend-icon="mdi-eye-outline"
                        :title="isFlipped ? 'niiʜɈiM' : 'Vision'"
                        @click="toggleFlip"
                    >
                        <v-card-text class="text-h5 auto-fit-text">
                            <template v-if="!isFlipped">
                                The premier university in historic Cavite
                                recognized for excellence in the development of
                                globally competitive and morally upright
                                individuals.
                            </template>
                            <template v-else>
                                <div class="backside">
                                    Ang nangungunang pamantasan sa makasaysayang
                                    Kabite na kinikilala sa kahusayan sa
                                    paghubog ng mga indibidwal na may
                                    pandaigdigang kakayahan at kagandahang asal.
                                </div>
                            </template>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const isFlipped = ref(false);
const cardCols = ref(12);

const toggleFlip = () => {
    isFlipped.value = !isFlipped.value;
};

const updateCardCols = () => {
    const screenSize = window.innerWidth;

    if (screenSize < 600) {
        // Extra small devices (phones)
        cardCols.value = 12;
    } else if (screenSize < 960) {
        // Small devices (tablets)
        cardCols.value = 6;
    } else if (screenSize < 1280) {
        // Medium devices (desktops)
        cardCols.value = 4;
    } else {
        // Large devices (large desktops)
        cardCols.value = 3;
    }
};

onMounted(() => {
    updateCardCols();
    window.addEventListener("resize", updateCardCols);
});
</script>

<style scoped>
.v-card {
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    width: 90%;
    height: 60vh;
}

.flipped {
    transform: rotateY(180deg);
}

.flipped .v-card-text::before {
    opacity: 1;
    pointer-events: auto;
}

.v-card .title {
    writing-mode: horizontal-tb;
}

.backside {
    transform: rotateY(180deg);
    height: 100%;
    text-align: end;
    letter-spacing: 0.0131rem;
}

@media (max-width: 960px) {
    .auto-fit-text {
        font-size: 12px;
    }
}

@media (min-width: 961px) {
    .auto-fit-text {
        font-size: 16px;
    }
}

@media (min-width: 1280px) {
    .auto-fit-text {
        font-size: 20px;
    }
}
</style>
