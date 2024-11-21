<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="why-dealdox-container">
            <div class="why-Dealdox-subheading1">
                <span class="whatisDealdox">What is DealDox?</span>
                <small class="whatisDealdox-content">
                    DealDox CPQ (Configure, Price, Quote) is a software solution that streamlines the sales process by
                    automating product configuration, pricing calculations, and quote generation. It helps sales teams
                    manage
                    complex product offerings efficiently, ensuring accuracy and speed while enhancing overall customer
                    satisfaction.
                </small>
                <button class="whyDealdoxDemo">
                    <NuxtLink to="/demo" style="text-decoration: none;">Book a Demo</NuxtLink>
                </button>
            </div>
            <div class="why-Dealdox-subheading2">
                <img src="../assets/images/whyDealdoxHeader.webp" alt="whyDealdox image" class="whyDealdox-image">
            </div>
            <div class="why-Dealdox-subheading1">
                <span class="whatisDealdoxs">What does DealDox do?</span>
                <small class="whatisDealdox-content">DealDox solutions streamline manual processes by enhancing sales
                    efficiency, providing accurate
                    estimations, and improving customer satisfaction. </small>
            </div>
            <div>


            </div>
        </div>

        <DealDoxFooter />
    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: "WhyDealDox",

    components: {
        Navbar,
        DealDoxFooter
    }
}


</script>

<style>

.whyDealdox-image{
    border-radius: 10px;
    width: 54%;
}
.why-dealdox-container {
    max-width: 1320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: auto;
    margin-top: 110px;
}

.why-Dealdox-subheading1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
}


.whatisDealdox {
    font-size: 60px;
    font-weight: bold;
    color: #715cf3;
}

.whatisDealdoxs {
    font-size: 50px;
    font-weight: bold;
    color: #715cf3;
}

.whyDealdoxDemo {
    background-image: linear-gradient(99.01deg, #715cf3 20.98%, #5c99f3 94.62%);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 6px 20px;
    margin: 20px 10px;
}

.why-Dealdox-subheading2 {
    display: flex;
    justify-content: center;
}

.whatisDealdox-content {
    text-align: center;
}

@media (max-width: 750px) {
    .why-Dealdox-subheading1 {
        width: 91%;
    }

    .whatisDealdox {
        font-size: 32px;
    }

    .whatisDealdoxs {
        font-size: 25px;
    }
    .whyDealdox-image{
        width: 95%;
    }
}
</style>