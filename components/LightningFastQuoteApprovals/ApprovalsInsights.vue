<template>
    <div class="about-area bg-FAFAFA pt-70">
        <div class="container">
            <div class="row align-items-center mobile-version-gap-div">
                <div class="col-lg-6 col-md-12 order-2-mobile">
                    <div class="features-item with-border bg-FAFAFA">
                        <div class="about-img">
                            <img src="../../assets/images/lightning-fast-quote-approvals/Filemanagementbyemployee.png"
                                data-aos="fade-up" alt="Approval Insights">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 order-1-mobile">
                    <div class="about-content mobile-version-left-padding">
                        <h2 class="mobile-version-heading">Approvals Insights</h2>
                        <p class="mobile-version-content">DealDox makes it possible to have a delegation dashboard with
                            all quotes accessible from a
                            single, simple insight <NuxtLink to='/glossary/configure-price-quote'>CPQ</NuxtLink>
                            instant quote approval process includes examining quote details
                            approval,
                            commenting on the quotation, and advising changes. DealDox automatically synchronizes data
                            with
                            CRM and ERP applications following approval.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row align-items-center mobile-version-gap-div">
                <div class="col-lg-6 col-md-12">
                    <div class="about-content  ">
                        <h2 class="mobile-version-heading">Reapprove with Ease </h2>
                        <p class="mobile-version-content">DealDox provides a flexible and streamlined approach <NuxtLink
                                to='/approval-software'>CPQ
                                approval process</NuxtLink>. Even after
                            approval,
                            if
                            any modifications are require, they can be made easily can be re-approved without any delay.
                            This feature ensures that deals are always up-to-date and all parties involved are on the
                            same
                            plate.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="features-item with-border bg-FAFAFA">
                        <div class="about-img">
                            <img src="../../assets/images/cpq/DocumentAnalytics.png" data-aos="fade-up"
                                alt="Re-Approve">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApprovalsInsights'
}
</script>

<style>
.mobile-version-left-padding {
    padding-left: 30px !important;
    padding-right: 0px !important;
}

@media (max-width:900px) {

    #routing-div-style {
        width: 80%;
        margin: auto;
    }

    .mobile-version-content,
    .mobile-version-heading {
        text-align: center !important;
    }

    .mobile-version-gap-div {
        gap: 25px;
    }


    #center-button {
        display: flex;
        justify-content: center;
    }

    .mobile-version-left-padding {
        padding-left: 0px !important;
    }
}
</style>