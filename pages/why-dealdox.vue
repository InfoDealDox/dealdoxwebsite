/NuxtLink><template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="why-dealdox-body">
            <div class="why-dd-header-body">
                <div class="why-dd-header">
                    <h1 class="What-is-DealDox-h1">What is DealDox? </h1>
                    <small class="What-is-DealDox-content">DealDox is a <NuxtLink to='/quoting-software'>sales automation platform</NuxtLink> designed to streamline
                        sales processes and
                        accelerate growth for businesses. It offers a Configure, Price, Quote (CPQ) solution that
                        automates and speeds up the estimation process, making it easier for the sales rep to focus
                        only on selling. </small>
                    <NuxtLink to="/demo"><button class="why-dd-demo-btn">Get a Demo</button></NuxtLink>
                </div>

                <img src="../assets/images/whyDealdoxHeader.webp" alt="" class="why-dd-header-image">
                <div class="why-dd-header">
                    <h2 class="What-is-DealDox">What does DealDox do? </h2>
                    <small class="What-is-DealDox-content">By automating <NuxtLink to='/services-cpq'>product configuration</NuxtLink>, pricing calculations,
                        estimations, and document generation (such as proposals, quotes, and costing sheets), DealDox
                        streamlines the presales process and offers approval workflow capabilities. </small>

                </div>

            </div>






            <div class="why-dealdox-container">

                <div class='why-left-content'>

                    <span class="why-dealdox-h1">Product Configuration </span>
                    <small>Product configurator software can be as simple as managing your current inventory of products
                        and parts for assembly or bundling or as complex as designing a new version of a product from
                        scratch for specific use cases through design and modeling. DD CPQ offers a solution that
                        matches the level of complexity for your product configuration needs. </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>
                <img src="../assets/images/WhyDDAssests/Product Configuration.png" alt="" class="why-DD-left">
            </div>

            <div class="why-dealdox-container">

                <img src="../assets/images/WhyDDAssests/Pricing Engine.png" alt="" class="why-DD-right">
                <div class="why-right-content">

                    <span class="why-dealdox-h1">Pricing Engine</span>
                    <small>The pricing engine automatically prices the chosen configuration based on rules set to
                        maintain profitability. <NuxtLink to='/pricing'>Pricing</NuxtLink> is typically based on combinations of customer category, product
                        classification, sales channel, deal size, and volume. DealDox considers both product inventories
                        and channel and market needs, ensuring full support for your sales channels and geo-market
                        reach. </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>
            </div>

            <div class="why-dealdox-container">
                <div class="why-left-content">

                    <span class="why-dealdox-h1">Quoting System </span>
                    <small>Quotes should be delivered immediately, accurately, and branded. Beyond that, DealDox CPQ
                        software offers Quote-to-Cash systems that automate each step of the process from pricing
                        through negotiation, approval, tracking, and activity alerts. </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>
                <img src="../assets/images/WhyDDAssests/Quoting System.png" alt="" class="why-DD-left">
            </div>

            <div class="why-dealdox-container">

                <img src="../assets/images/WhyDDAssests/Proposal Management .png" alt="" class="why-DD-right">
                <div class="why-right-content">

                    <span class="why-dealdox-h1">Proposal Management</span>
                    <small><NuxtLink to='/quoting-software'>Proposal management systems</NuxtLink> manage proposal creation and delivery. With a solid proposal
                        system, DD CPQ provides pre-built templates for fast proposal creation with customizable
                        branding. It helps manage the proposal lifecycle via workflow authorization and approval
                        systems.

                    </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>
            </div>
            <div class="why-dealdox-container">


                <div class="why-right-content">

                    <span class="why-dealdox-h1">Business Rules and Constraints </span>
                    <small><NuxtLink to='/services-cpq'>CPQ configuration</NuxtLink> and pricing engines are powered by business rules. In the past, the
                        complexity of these rules determined how powerful CPQ systems were. Now, DD CPQ is designed to
                        make using business rules easier, especially compared to older ERP systems. One way to simplify
                        things is to use simple limits or restrictions instead of complicated business rules.

                    </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>
                <img src="../assets/images/WhyDDAssests/Business Rules and Constraints  .png" alt=""
                    class="why-DD-left">
            </div>
            <div class="why-dealdox-container">

                <img src="../assets/images/WhyDDAssests/Dynamic Images.png" alt="" class="why-DD-right">
                <div class="why-left-content">

                    <span class="why-dealdox-h1">Dynamic Images</span>
                    <small>DealDox can significantly enhance the use of dynamic images in documents. By automating image
                        selection, updating images in real-time, and allowing for conditional display and
                        personalization, it streamlines the process of creating accurate and professional proposals.

                    </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>
            </div>
            <div class="why-dealdox-container">


                <div class="why-right-content">

                    <span class="why-dealdox-h1">CRM & ERP Integration </span>
                    <small>DealDox integrates seamlessly with leading <NuxtLink to='/salesforce-cpq-integration'>CRM systems</NuxtLink> like Salesforce, HubSpot, and Zoho
                        CRM. Also, connects effortlessly with top ERP systems such as Microsoft Dynamics 365, SAP
                        S/4HANA, and Oracle NetSuite. This integration ensures that all data is up-to-date and enhances
                        overall sales efficiency.

                    </small>

                    <!-- <button class="why-dd-demo-btn">Get a Demo</button> -->
                </div>

                <img src="../assets/images/WhyDDAssests/CRMERP Integration.png" alt="" class="why-DD-left">
            </div>


            <Blog />

        </div>

        <DealDoxFooter />
    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';
import Blog from '../components/Common/Blog.vue'

export default {
    name: "WhyDealDox",

    components: {
        Navbar,
        DealDoxFooter,
        Blog
    },

    head: {
        title: 'DealDox CPQ|Automate Sales & Boost Efficiency ',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Streamline product configuration, pricing, and quoting with DealDox CPQ. Enhance sales efficiency with seamless CRM/ERP integration.' },
            { hid: 'keywords', name: 'keywords', content: 'What is DealDox CPQ,Sales Automation Platform, Product Configuration, Pricing, CRM ERP Integration, Proposal Management System ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/why-dealdox' }
        ],
    },
}



</script>
<style>
@import url('../assets/css/pages-css/WhyDealDox.css');
</style>
