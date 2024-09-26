<template>
        <div style="max-width: 1320px;margin: auto;">
        <div class="div4-header">
            <span class="quote-landing-content">Key Features of DealDox CPQ Software</span>
            <div class="landing-key-feature-div">
                <NuxtLink to="/quoting-software" class="loading-key-feture-link"><div class="landing-key-features">Automated Quotations</div></NuxtLink>
                <NuxtLink to="/approval-software" class="loading-key-feture-link"><div class="landing-key-features">Approval Workflows</div></NuxtLink>
                <NuxtLink to="/cpq-integrations" class="loading-key-feture-link"><div class="landing-key-features">Integrations</div></NuxtLink>
                <NuxtLink to="/pricing" class="loading-key-feture-link"><div class="landing-key-features">Dynamic Pricing</div></NuxtLink>
                <NuxtLink to="/localized-deal-documents" class="loading-key-feture-link"><div class="landing-key-features">Document Generation</div></NuxtLink>
                <NuxtLink to="/services-cpq" class="loading-key-feture-link"><div class="landing-key-features">Report and Analytics</div></NuxtLink>
            </div>
            <span class="quote-faster-win-bigger">Quote faster, Win Bigger</span>
            <LoadingFaq />
        </div>
        </div>

</template>


<script>
import LoadingFaq from './landingfaq.vue'


export default {
    name:"QuoteFaster",
    comments:{
        LoadingFaq
    },
   
}

</script>