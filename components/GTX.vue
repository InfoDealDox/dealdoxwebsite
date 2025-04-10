<template>
    <div class="gtx-main-container">
        <div class="gtx-popup-container">
            <div :class="gtxpopup ? 'cross-image-active' : 'cross-image-notactive'">
                <img src="../assets/images/gtx_new_image.webp" alt="" class="gtx-image-box">
                <div style="cursor: pointer;" class="cross-image">
                    <i class="ri-close-fill" id="cross-gtx-icon" @click="onClose"></i>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GTX",
    methods: {
        onClose() {
            this.$emit('close');
        },
    },
    props: {
        gtxpopup: Boolean,
        require: true
    }

}
</script>

<style>
.gtx-main-container {
    width: 100vw;
    height: 100vh;
    background-color: rgb(0 0 0 / 43%);
    overflow: hidden;
    position: fixed;
    z-index: 999;

}

.gtx-popup-container {
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: auto;
    overflow: hidden;
}

.cross-image {
    position: absolute;
    z-index: 99999;
    right: 8px;
    top: 4px;

}

.cross-image-active {
    position: relative;
    width: 85%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: zomIn 600ms ease-in-out;
}

@keyframes zomIn {
    0% {
        scale: 1.3;
    }

    100% {
        scale: 1;
    }
}

.gtx-image-box {
    max-width: 100%;
    border-radius: 10px;
}

#cross-gtx-icon {
    cursor: pointer;
    color: white;
    font-size: 27px;
    font-weight: 800;
}


@media screen and (min-width:1024px) {
    .gtx-image-box {
        max-width: 85%;
        border-radius: 10px;
    }

    .cross-image {
        position: absolute;
        z-index: 99999;
        right: 8.2%;
        top: 4px;
    }
}
</style>