<template>
    <div class="about-area bg-FAFAFA ptb-75 mobile-version">
        <div class="container">
            <div class="row align-items-center mobile-version-gap-div">
                <div class="col-lg-6 col-md-12 order-2-mobile" id="routing-div-style">
                    <div class="features-item with-border bg-FAFAFA">
                        <div class="about-img">
                            <img src="../../assets/images/cpq/RoutingCapabilities.png" data-aos="fade-up"
                                alt="Routing Capabilities">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 order-1-mobile">
                    <div class="about-content routing-div-customize">
                        <h2 class="mobile-version-heading">Routing Capabilities</h2>
                        <p class="mobile-version-content">Whether you require single or multi levels of authorization or
                            need to determine the specific
                            order for notifying authorities, DealDox makes it easy. Our quote-to-cash platform empowers
                            easy
                            to deal with all your statement approval concerns. With an efficient <NuxtLink
                                to='/glossary/configure-price-quote'>CPQ</NuxtLink> approval workflow, you
                            can
                            notify every approver responsible for reviewing and approving, ensuring a smooth process
                            that
                            aligns with your specified routing rules.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoutingCapabilitiess'
}
</script>


<style>
#routing-div-style {
    width: 40%;
    margin: auto;
}

.routing-div-customize {
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

    .routing-div-customize {

        padding-left: 0px !important;
    }

    #center-button {
        display: flex;
        justify-content: center;
    }
}

.about-img {
    margin-top: 0px;
    padding: 10px;
}
</style>