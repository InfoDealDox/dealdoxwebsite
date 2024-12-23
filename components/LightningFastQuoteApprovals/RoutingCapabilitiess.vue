<template>
    <div class="about-area bg-FAFAFA ptb-75">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12" id="routing-div-style">
                    <div class="features-item with-border bg-FAFAFA">
                        <div class="about-img">
                            <img src="../../assets/images/cpq/RoutingCapabilities.png"
                                data-aos="fade-up" alt="Routing Capabilities">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12" >
                    <div class="about-content" style="padding-left: 30px;padding-right: 0px;">
                        <h3>Routing Capabilities</h3>
                        <p>Whether you require single or multi levels of authorization or need to determine the specific
                            order for notifying authorities, DealDox makes it easy. Our quote-to-cash platform empowers easy
                            to deal with all your statement approval concerns. With an efficient <NuxtLink to='/glossary/configure-price-quote'>CPQ</NuxtLink> approval workflow, you
                            can
                            notify every approver responsible for reviewing and approving, ensuring a smooth process that
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
#routing-div-style{
    width: 40%;
    margin: auto;
}

@media (max-width:900px) {

    #routing-div-style{
    width: 80%;
    margin: auto;
}
}
.about-img{
    margin-top: 0px;
    padding: 10px;
}




</style>