<template>
    <div class="carousel-container">

        <!-- Carousel Display -->
        <div class="carousel">
            <div class="carousel-item">
                <img :src="partners[currentIndex].src" :alt="partners[currentIndex].alt" class="carousel-image" />
                <!-- <p class="partner-name">{{ partners[currentIndex].alt }}</p> -->
            </div>

            <div class="prevrightpricingToggle">
                <button class="control prev" @click="prevSlide">❮</button>
                <button class="control next" @click="nextSlide">❯</button>
            </div>
        </div>



        <!-- Dots for Navigation -->
        <div class="dots">
            <span v-for="(partner, index) in partners" :key="index" class="dot"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PartnerCarousel",
    data() {
        return {
            currentIndex: 0,
            partners: [
                {
                    src: require("../../assets/images/PricingAssests/Daspasss.webp"),
                    alt: "Daspass"
                },
                {
                    src: require("../../assets/images/PricingAssests/Utkarshs.webp"),
                    alt: "Elemertex"
                },
                {
                    src: require("../../assets/images/PricingAssests/Elemmentz.webp"),
                    alt: "Utkarsh"
                }
            ],
            autoPlay: null // To store the interval reference
        };
    },
    methods: {
        // Next Slide - Wrap around if last slide is reached
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.partners.length;
        },
        // Previous Slide - Wrap around if first slide is reached
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.partners.length) % this.partners.length;
        },
        // Go to a specific slide
        goToSlide(index) {
            this.currentIndex = index;
        },
        // Start automatic scrolling
        startAutoPlay() {
            // this.autoPlay = setInterval(this.nextSlide, 3000); // Scroll every 3 seconds
        },
        // Stop automatic scrolling
        stopAutoPlay() {
            clearInterval(this.autoPlay);
        }
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeDestroy() {
        this.stopAutoPlay();
    }
};
</script>

<style scoped>
.carousel-container {
    text-align: center;
    height: 400px;
    width: 76vw;
    margin: 30px auto;
    max-width: 1440px;
}

.carousel {
    position: relative;
    overflow: hidden;
}

.carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    width: 74vw;

}

.carousel-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-left: 2vw;
}

.partner-name {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #555;
}

.control {
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    padding: 7px;
    border-radius: 50%;
    width: 29px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.control:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.control.prev {
    left: 1px;
}

.control.next {
    right: 1px;
}

.dots {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dot.active {
    background-color: black;
}

.dot:hover {
    background-color: black;
}

.prevrightpricingToggle {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
}

@media (max-width: 520px) {
    .carousel-item {
        height: 100%;
        width: 93vw;

    }

    .carousel-container {
        height: 253px;
        width: 98vw;
    }

    .carousel-item {
        width: 98vw;

    }
}
</style>