<template>
    <div>
        <Navbar class="navbar-style-two" />

        <div class="odoo-container">
            <img src="../../assets/images/ComparisionBannerForAlls.jpg" alt="DD Comparision Banner">
            <div class="table-alternative-containersss">
                <Tablealternative :comparisionDatas="comparisionData" company1="SAP" company2="DealDox"
                    companyName1="SAP_CPQ" companyName2="DealDox" />
            </div>
        </div>

        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../../layouts/Navbar.vue';
import Tablealternative from '../../components/Footer/Tablealternative.vue';
import DealDoxFooter from '../../layouts/DealDoxFooter.vue';
import axios from 'axios';

export default {
    components: {
        Navbar,
        Tablealternative,
        DealDoxFooter,
    },
    data() {
        return {
            comparisionData: [],
        };
    },
    mounted() {
        this.getComparisonData();
    },
    methods: {
        async getComparisonData() {
            try {
                const response = await axios.get("https://cms.dealdox.io/api/sap-compare?populate=*");
                console.log("Connectwise Data:", response.data.data.attributes.SAPCompare);
                this.comparisionData = response.data.data.attributes.SAPCompare;
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },
};
</script>

<style>
.table-alternative-containersss {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
}

.compare-plans-header {
    background-color: #8692a3;
    border-radius: 10px;
    padding: 5px;
    width: 70%;
   margin:auto
}

.compare-feature-heading {
    color: white;
    font-size: 18px;
    text-align: center;
}
</style>
