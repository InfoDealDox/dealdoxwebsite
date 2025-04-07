<template>
    <div class="suppport-container-body">
        <Navbar class="navbar-style-two" />

        <div class="support-header-body">
            <div class="support-left-content">
                <h1>Get Support
                </h1>
                <span class="smaller-size-content">
                    <span> We are committed to ensuring that your experience with our CPQ platform is seamless and
                        efficient.
                    </span>
                    <span> Our
                        dedicated support team and resources are here to assist you every step of the way.</span>
                </span>
                <a href="mailto:support@dealdox.io"><button class="partner-whyDealdoxDemos">Get Support</button></a>
            </div>
            <img src="../assets/images/congaBackground.png" alt="" loading="lazy">
        </div>
        <supportfaq />
        <DealDoxFooter />
    </div>


</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import supportfaq from '../components/Common/supportFaq.vue';
import DealDoxFooter from '../layouts/DealDoxFooter.vue';
export default {
    name: "support",
    components: {
        Navbar,
        supportfaq,
        DealDoxFooter
    }
}
</script>

<style>
.suppport-container-body {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.support-header-body {
    margin-top: 80px;
    position: relative;
}

.support-left-content {
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    left: 27px;
    color: white;

}

.support-left-content h1,
.support-left-content span p {
    color: white;
}

.partner-whyDealdoxDemos {
    background: white;
    color: #715cf3;
    border: none;
    border-radius: 30px;
    padding: 6px 20px;
    width: fit-content;
    margin: 22px 0px;
    font-weight: 700;

    &:active {
        transform: scale(0.9);
    }
}

@media screen and (max-width:750px) {
    .support-left-content {
        gap: 0px;
        left: 10px;
    }

    .support-header-body {
        margin-top: 45px;

    }

    .smaller-size-content {
        font-size: 10px;
    }
    .partner-whyDealdoxDemos {
        margin: 7px 0px;
    }

}
</style>
