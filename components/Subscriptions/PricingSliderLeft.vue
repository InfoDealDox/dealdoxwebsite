<template>
    <div class="slide-tracker-container">
        <div class="slider">

            <div class="slide-tracker">
                <div class="slide">
                    <!-- <span class="slide-span-text">Manufacturing</span> -->
                    <img src="../../assets/images/PricingAssests/1.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Technology</span> -->
                    <img src="../../assets/images/PricingAssests/2.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Telecommunications</span> -->
                    <img src="../../assets/images/PricingAssests/3.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Healthcare</span> -->
                    <img src="../../assets/images/PricingAssests/4.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Financial Services</span> -->
                    <img src="../../assets/images/PricingAssests/5.png" class="slide-span-texts" alt="">
                </div>

                <div class="slide">
                    <!-- <span class="slide-span-text">Technology</span> -->
                    <img src="../../assets/images/PricingAssests/6.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Telecommunications</span> -->
                    <img src="../../assets/images/PricingAssests/7.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Healthcare</span> -->
                    <img src="../../assets/images/PricingAssests/1.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Financial Services</span> -->
                    <img src="../../assets/images/PricingAssests/2.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/3.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/4.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/5.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/6.png" class="slide-span-texts" alt="">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/7.png" class="slide-span-texts" alt="">
                </div>


            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: "PricingSliderLeft"
}

</script>

<style>
.slide-tracker-container {
    display: grid;
    place-items: center;
    overflow: hidden;
    max-width: 1440px;

}

.slider {

    height: 142px;
    margin: auto;
    position: relative;
    width: 80%;
    display: grid;
    place-items: center;
    overflow: hidden;

}

.slider::after,
.slider::before {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    height: 100%;
    position: relative;
    width: 15%;
    z-index: 2;
}

.slide {
    height: 100px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}

.slider::before {
    left: 0;
    top: 0;
}


.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}


.slide-tracker {
    display: flex;
    width: calc(260px*14);
    animation: scroll 40s linear infinite;
}


img.slide-span-texts {
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-260px *7));
    }
}
</style>