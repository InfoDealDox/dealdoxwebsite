<template>
    <div class="cookie-mobile-ui">
        <img src="../../assets/images/cookie_policy_new.png" alt="" style="margin: auto;">
        <div class="container">
            <div class="page-title-content">
                <span>{{ pageTitle }}</span>
                <!-- <p>Stay Up-to-Date with Our Latest Insights, Tips, and News</p> -->
                <!-- <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>{{pageTitle}}</li>
                </ul> -->
            </div>
        </div>
        <div class="divider"></div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="banner-shape1">
            <img src="../../assets/images/shape/shape9.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>

<style>
@media (max-width:550px) {
    .cookie-mobile-ui {
        margin-top: 35px !important;
    }
}

.cookie-mobile-ui {
    margin: auto;
    max-width: 1440px;
}
</style>