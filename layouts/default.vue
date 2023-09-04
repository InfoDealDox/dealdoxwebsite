<template>
    <div>
        <!-- <Preloader v-if="isLoading" /> -->
        <Nuxt />
        <GoTop />
    </div>
</template>

<script>
// import Preloader from './Preloader'
import GoTop from './GoTop'

export default {
    components: {
        // Preloader,
        GoTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 0)
    }
}
</script>