<template>
    <div class="slide-tracker-container">
        <div class="slider-2">

            <div class="slide-tracker-1">
                <div class="slide">
                
                    <img src="../../assets/images/PricingAssests/8.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
              
                    <img src="../../assets/images/PricingAssests/9.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                   
                    <img src="../../assets/images/PricingAssests/10.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
               
                    <img src="../../assets/images/PricingAssests/11.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                
                    <img src="../../assets/images/PricingAssests/12.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/13.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Manufacturing</span> -->
                    <img src="../../assets/images/PricingAssests/14.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Technology</span> -->
                    <img src="../../assets/images/PricingAssests/15.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Telecommunications</span> -->
                    <img src="../../assets/images/PricingAssests/8.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Healthcare</span> -->
                    <img src="../../assets/images/PricingAssests/9.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Financial Services</span> -->
                    <img src="../../assets/images/PricingAssests/10.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/11.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/12.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/13.png" class="slide-span-texts" alt="Maket positioning">
                </div>
                <div class="slide">
                    <!-- <span class="slide-span-text">Automotive</span> -->
                    <img src="../../assets/images/PricingAssests/14.png" class="slide-span-texts" alt="Maket positioning">
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'PricingRightScroll'
}
</script>

<style>
.slide-tracker-container {
    display: grid;
    place-items: center;
    overflow: hidden;

    max-width: 1440px;

}

.slider-2 {
    height: 95px;
    margin: auto;
    position: relative;
    width: 80%;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.slider-2::after,
.slider-2::before {
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

.slider-2::before {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

.slider-2::after {
    left: 0;
    top: 0;
}

.slide-tracker {
    display: flex;
    width: calc(260px*16);
    animation: scroll 40s linear infinite;
}

.slide-tracker-1 {
    display: flex;
    width: calc(260px*16);
    animation: scrolls 40s linear infinite;
}

img.slide-span-texts {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
}

@keyframes scrolls {
    0% {

        transform: translateX(calc(-260px *8));
    }

    100% {
        transform: translateX(0);
    }
}
</style>
