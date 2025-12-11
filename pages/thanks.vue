<template>
    <div>

        <Navbar class="navbar-style-two" />
        <div class="new-thanks-container">
            <img src="../assets/images/form_submitted.jpg" alt="" class="new-thank-you-image">
            <div style="position: absolute; inset: 0; background-color: rgba(0,0,0,0.3);"></div>

            <div class="new-thanks-content-container">
                <div class="main-thanks-content">
                    <span class="thank-you-message">Thank You</span>
                    <small style="text-align: center;text-shadow: 1px 2px 3px #978a8a;font-weight: 600;">
                        We appreciate your interest and will get back to you shortly.
                    </small>
                </div>
                <div class="final-thank-container">
                    <div class="thanks-explore-container">
                        <span class="thanks-explore-heading">Explore Our Services</span>
                        <NuxtLink to="/"><button class="thanks-learn-more">Learn more</button></NuxtLink>
                    </div>
                    <div class="thanks-explore-container">
                        <span class="thanks-explore-heading">Follow Us: Social Media Links:</span>

                        <ul class="thanks-social-links">
                            <li>
                                <a href="https://www.facebook.com/dealdox.io" target="_blank">
                                    <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695209/facebook_m5vbrm.svg"
                                        class="new-thanks-social-links" alt="logo" /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/dealdox.io/" target="_blank">
                                    <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695209/instagram_ha9zry.svg"
                                        class="new-thanks-social-links" alt="logo" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/dealdox" target="_blank">
                                    <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695210/linkedin_dlsana.svg"
                                        class="new-thanks-social-links" alt="logo" /></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDealdox_io"
                                    target="_blank">
                                    <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1695711842/twitter-logo_tlcmv6.svg"
                                        class="new-thanks-social-links" alt="logo" /></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCUyG5sKBn2yVwLG0PbbE8IA" target="_blank">
                                    <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695209/youtube_jjx6li.svg"
                                        class="new-thanks-social-links" alt="logo" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
        <DealDoxFooter />
    </div>

</template>

<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: "thanks",

    components: {
        Navbar,
        DealDoxFooter
    }
}


</script>

<style>
.new-thanks-container {
    max-width: 1320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: auto;
    /* margin-top: 110px; */
    position: relative;
    /* height: 450px; */
}

.thanks-social-links {
    display: flex;
    list-style: none;
    gap: 10px;
    padding-left: 0px;
    margin: 5px;
    margin-bottom: 0px;

}

.new-thanks-social-links {
    width: 25px;
    height: 25px;
}

.new-thanks-content-container {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.main-thanks-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
}

.thank-you-message {
    font-size: 55px;
    font-weight: 800;
}

.final-thank-container {
    display: flex;
    gap: 10px;
    margin: 25px;
}

.thanks-explore-container {
    display: flex;
    flex-direction: column;
    background: rgb(241, 238, 238);
    padding: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
}

.thanks-explore-heading {
    font-size: 13px;
}

.thanks-learn-more {
    background-image: linear-gradient(99.01deg, #715cf3 20.98%, #5c99f3 94.62%);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    margin: 5px;
    margin-bottom: 0px;
    padding: 4px 15px;
    font-size: 12px;
}

.thanks-learn-more:hover {
    color: white;
}


.new-thank-you-image {
    height: 600px;
}


@media (max-width: 750px) {
    .final-thank-container {
        flex-direction: column;
    }

    .new-thanks-container {
        /* height: 400px; */
        margin-top: 50px;
    }

    .new-thank-you-image {
        height: 400px;
    }

    .new-thanks-content-container {
        justify-content: flex-start;
        top: 5%;

    }

    .thank-you-message {
        font-size: 45px;
    }
}
</style>
