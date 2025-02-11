<template>
    <div>

        <Navbar class="navbar-style-two" />
        <div class="why-sales-optimization-container">
            <div class="sales-optimize-image">
                <div class="sales-optimize-content-left">
                    <span class="salesforce-optimization-heading-content">Maximize Revenue from your CRM with <br class="no-break-rquired"><span
                            class="salesforce-optimization-heading">Salesforce <br class="no-break-rquired"> Optimization</span> </span>
                    <small class="salesforce-optimization-lowercontent">
                        Integrating DealDox CPQ software with <NuxtLink to="/quoting-software">Salesforce automates workflows</NuxtLink>  and accelerates sales
                        closures.
                    </small>
                    <NuxtLink to="/demo"><button class="sales-optimize-demo-btn">Request Demo</button></NuxtLink>
                </div>
                <div class="sales-optimize-image-right"><img src="../assets/images/sales-optimize/Salesforce_automation_software.jpg" alt="" ></div>

            </div>



            <SalesDynamic/>

            <SaleForceTable />

            <SalesOptmizeEmailForm/>

            <SalesOptimizeFaq/>
        </div>


        <DealDoxFooter />


    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';
import SaleForceTable from '../components/Common/saleForceTable.vue';
import SalesOptmizeEmailForm from '../components/Salesforce/SalesOptmizeEmailForm.vue';
import SalesOptimizeFaq from '../components/Common/salesOptimizeFaq.vue';
import SalesDynamic from '../components/Common/SalesDynamic.vue';


export default {
    name: "salesforce-optimization",
    data() {
        return {
            hoveredIndex: null,

        }
    },

    components: {
        Navbar,
        DealDoxFooter,
        SaleForceTable,
        SalesOptmizeEmailForm,
        SalesOptimizeFaq,
        SalesDynamic
    }
}


</script>

<style>
@import url(../assets/css/pages-css/salesOptimize.css);
</style>