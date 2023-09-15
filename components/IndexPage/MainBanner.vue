<template>
    <div class="new-app-main-banner-wrap-area bg-white">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-wrap-image" data-aos="fade-left" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696577/cpq-banner_chwd0d.png" alt="image" loading="lazy">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-wrap-content">
                        <h1>Effortlessly streamline your <span style="color: rgb(113, 92, 243);">quote generation</span> process with
                            DealDox</h1>
                        <p>Are you still stuck with outdated spreadsheet calculations, spending precious time manually
                            shifting estimates from Excel to Word, and then converting them to PDFs? Say goodbye to these
                            tedious tasks and welcome effortless quoting with DealDox also called DD CPQ.</p>
                        <div class="tb-30">
                            <router-link to="/demo" required class="default-btn"><i class='bx bx-paper-plane'></i>
                                Request a Demo</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBanner',
}
</script>
