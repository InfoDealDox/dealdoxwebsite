<template>
    <div class="landing-page-cintainer">
        <div class="div1-header">
            <span class="landing-streamline">Streamline Your Sales Process with CPQ</span>

            <span class="leverage-dealdox">
                Leverage DealDox's advanced features to create professionals quotations with ease
            </span>

            <NuxtLink to='/demo'><button class="landing-request-demo">Request Demo</button></NuxtLink>
        </div>

        <div class="landing-div3-contents">
            <div class="loading-text-container">

                <p class="loading-pre-contents-left">
                    Generate quotes<br />
                    based on<br />
                    predefined rules<br />
                    and<br />
                    configurations
                </p>
                <NuxtLink :to="{ name: 'contact-us', params: { source: 'Google' } }"><button
                        class="landing-request-demo">Contact Sales</button></NuxtLink>
            </div>
            <div class="landing-image-container ">
                <div>
                    <img src="../../assets/images/cpq-software/GenerateQuotes.png" alt="Generate Quotes"
                        class="landing-image-rights" />
                </div>
            </div>
        </div>
        <div class="landing-div3-contents">
            <div class="loading-text-container-even">
                <img src="../../assets/images/cpq-software/BoostSales.png" alt="Generate Quotes"
                    class="landing-image-lefts" />
            </div>
            <div class="loading-text-container-right">

                <p class="loading-pre-contents-right">
                    Boost sales with<br />
                    automated <br />
                    quote templates

                </p>
                <span class="landing-desc-right">Automatically calculate and apply the right <br> prices and taxes for
                    each customer. <br>Eliminate the
                    tedious manual calculations <br> and focus on what truly matters: selling!</span>

                <NuxtLink :to="{ name: 'contact-us', params: { source: 'Google' } }"><button
                        class="landing-request-demo">Contact Sales</button></NuxtLink>
            </div>

        </div>
        <div class="landing-div3-contents">
            <div class="loading-text-container">

                <p class="loading-pre-contents-left">
                    Bridge the gap<br />
                    between CRM<br />
                    and ERPs<br />

                </p>

                <span class="landing-small-content">By adding CPQ to your CRM, ERP, <br> or PSA you can enhance your
                    business's <br> profitability through
                    increased sales and <br> improved efficiency.</span>

                <NuxtLink :to="{ name: 'contact-us', params: { source: 'Google' } }"><button
                        class="landing-request-demo">Contact Sales</button></NuxtLink>
            </div>
            <div class="landing-image-container">
                <img src="../../assets/images/cpq-software/sapOracle.png" alt="Generate Quotes"
                    class="landing-image-rights" />
            </div>
        </div>
        <div class="landing-div3-contents">
            <div class="loading-text-container-even">

                <img src="../../assets/images/cpq-software/ImproveWinRate.png" alt="Generate Quotes"
                    class="landing-image-lefts" />

            </div>
            <div class="loading-text-container-right">

                <p class="loading-pre-contents-right">
                    Improve your<br />
                    win-rates

                </p>
                <span class="landing-desc-right">Automate order creation,<br> manage negotiated pricing,<br> and avoid
                    contract inconsistencies,<br> resulting
                    in accurate quotes for <br> complex deals and improved sales performance.</span>

                <NuxtLink :to="{ name: 'contact-us', params: { source: 'Google' } }"><button
                        class="landing-request-demo">Contact Sales</button></NuxtLink>
            </div>

        </div>
        <div class="landing-div3-contents">
            <div class="loading-text-container">

                <p class="loading-pre-contents-left">
                    Generate<br />
                    customized<br />
                    business<br />
                    proposals quickly

                </p>

                <span class="landing-small-content">Experience top-tier CPQ capabilities <br>designed specifically for
                    complex <br> products and
                    services.</span>
                <NuxtLink :to="{ name: 'contact-us', params: { source: 'Google' } }"><button
                        class="landing-request-demo">Contact Sales</button></NuxtLink>
            </div>
            <div class="landing-image-container">
                <img src="../../assets/images/cpq-software/CustomizeBuissness.png" alt="" class="landing-image-rights">
            </div>
        </div>
        <div class="cpq-integrate-div">
            <img src="../../assets/images/cpq-software/integrationImage.png" alt="" class="cpq-integration">
            <NuxtLink to='/demo'><button class="landing-request-demo" style="top:0px">Request Demo</button></NuxtLink>

        </div>
    </div>


</template>


<script>



export default {
    name: 'Header',
}



</script>

<style>
@import '../../assets/css/pages-css/CpqSotware.css';
</style>

