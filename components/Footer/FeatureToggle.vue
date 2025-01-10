<template>
    <div class="top-feature-background">
        <button @click="toggleFeatures" class="new-footer-background-div">
            <span class="show-text-dropdown">
                <b> {{ showText }}</b>
                <i :class="featuresVisible ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i>
            </span>
        </button>

        <div v-if="featuresVisible" class="features-container">
            <div class="feature" v-for="(feature, index) in features" :key="index">
                <NuxtLink :to="feature.link" class="feature-texts-new-content">{{ feature.text }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        features: {
            type: Array,
            required: true
        },
        showText: {
            type: String,
            default: '▼ Show Features'
        },
        hideText: {
            type: String,

        }
    },
    data() {
        return {
            featuresVisible: false
        };
    },
    methods: {
        toggleFeatures() {
            this.featuresVisible = !this.featuresVisible;
        }
    }
};
</script>

<style src="../../assets/css/pages-css/featureToggle.css"></style>
