<template>
    <div>
        <Navbar class="navbar-style-two" />

        <div class="odoo-container">
            <img src="../../assets/images/ComparisionBannerForAlls.jpg" alt="">

            <div class="table-alternative-containersss">
                <Tablealternative :comparisionDatas="comparisionData" company1="Odoo" company2="DealDox"
                    companyName1="Odoo" companyName2="Dealdox" />
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
                const response = await axios.get("https://cms.dealdox.io/api/odoo-compare?populate=*");
                console.log("Connectwise Data:", response.data.data.attributes.OdooCompare);
                this.comparisionData = response.data.data.attributes.OdooCompare;
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },
};
</script>
