<template>
    <div class="new-app-main-banner-wrap-area bg-white" style="">
        <div class="container pt-500" style="max-width: 1024px;">
            <div class="row align-items-center" id="subscription-header">
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-wrap-content pt-100 ">
                        <h1>Simplify the Quote-to-Cash process with <span class="sub-title">DealDox</span></h1>
                        <p>Unleash the full potential of collaborative deals with our subscription plan. Streamline
                            workflows, share information effortlessly, and make faster, more informed decisions. Enjoy a
                            centralized hub for policies, customizable workflows, and real-time alerts.</p>
                        <div class="tb-30 customize-mobile">
                            <a href="https://www.dealdox.io/demo" target="_blank">
                                <button class="default-btn"> <i class='bx bx-paper-plane'></i>Get a Demo</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 pt-100">
                    <div class="new-app-main-banner-wrap-image" data-aos="fade-left" data-aos-duration="2000">
                        <img src="../../assets/images/subscriptions/RevenueGrowth.png" alt="app-img">
                    </div>
                </div>
            </div>
        </div>

        <div class="new-app-main-banner-wrap-shape">
            <img src="../../assets/images/more-home/banner/shape-5.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBannercpq'
}
</script>

<style>
@media (max-width: 750px) {
    .new-app-main-banner-wrap-content {
        margin-top: -158px;
    }

    .customize-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>