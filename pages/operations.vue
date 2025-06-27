<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="operation_container">

            <div class="hive_public_images">
                <img src="../assets/images/document_automation/opeartion_header.png" alt="" class="hive_five_image">
                <div class="hive_public_absolute_content">
                    <h1 class="operation_benefits">Benefits of CPQ Software for Operations </h1>

                    <span>
                        CPQ offers various benefits for the operations department. In
                        the
                        manufacturing sector, the teams
                        spend much of their time re-entering data into different systems; as a business owner you might
                        want
                        to
                        reduce errors and waste that happen in production. CPQ software for operations is the exact
                        solution
                        that you are looking for.</span>
                </div>
            </div>


            <div class="operation-left-container  top_left_container">

                <div class="operation-left-content">
                    <h2>Create a smooth data flow</h2>
                    <span>
                        Many complex product & service companies often mention that their sales & costing teams must
                        re-enter data into different systems. This wastes a lot of time and increases the risk of
                        errors.
                    </span>
                    <span>
                        DealDox CPQ solution can automate the flow of information. By integrating CPQ software with your
                        existing systems, you can avoid re-entering data. The configurator can also automate
                        calculations
                        and generate production information, saving manual labor.
                    </span>
                    <span>
                        Data syncing systems ensure that everyone works with the same data. Any new or modified
                        information
                        is automatically updated. This creates efficient and seamless data flow, saving time.
                    </span>
                </div>
                <div class="operation_images"> <img src="../assets/images/document_automation/operation_data_flow.png"
                        alt="Operation Data Flow"></div>

            </div>
            <div class="operation-right-container">
                <div class="operation_images"><img
                        src="../assets/images/document_automation/operation_production_ efficiency.png"
                        alt="Operation Production Efficiency"></div>
                <div class="operation-left-content">
                    <h2>Boost your production efficiency and eliminate errors</h2>
                    <span>
                        Connect your customers directly to the system, ensuring every configuration is validated against
                        product and business rules. This means no more invalid configurations or costly production
                        mistakes.
                    </span>
                    <span>
                        With DealDox CPQ software, every order is guaranteed to be error-free, giving your teams the
                        confidence to focus on what they do best. Say goodbye to worries and hello to seamless,
                        worry-free
                        production
                    </span>

                </div>

            </div>
            <div class="operation-left-container ">

                <div class="operation-left-content">
                    <h2>Supply Chain </h2>
                    <span>
                        It automatically generates a Bill of Material (BOM) or Bill of Quantities (BOQ) for every
                        configuration, giving your operations team precise knowledge of the materials needed for
                        incoming
                        orders.
                    </span>
                    <span>
                        Enhance your sales forecast with CPQ by using data from product inquiries and configurations to
                        optimize acquisition and production schedules. Your team will have a clear view of potential
                        orders,
                        allowing them to purchase raw materials at the best prices, avoid production delays due to
                        material
                        shortages, and work more cost-effectively!
                    </span>

                </div>
                <div class="operation_images"> <img
                        src="../assets/images/document_automation/operation_supply_chain.png"
                        alt="Operation supply Chain"></div>

            </div>

        </div>
        <DealDoxFooter />
    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';
export default {
    name: 'operations',
    components: {
        Navbar,
        DealDoxFooter
    },
    head: {
        title: 'CPQ software for operations | DealDox ',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: ' Streamline your operations with DealDox CPQ software. Eliminate errors, automate BOM/BOQ, and sync data.' },
            { hid: 'keywords', name: 'keywords', content: ': re-enter data, Benefits of CPQ Software for Operations, CPQ software for operations, operations' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/operations' }
        ],
    },
}
</script>


<style>
.operation-left-container,
.operation-right-container {
    display: flex;
    gap: 10px;
    width: 80%;
    margin: auto;

}

.operation-left-content {
    flex: 1;
}


.operation-left-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: flex-start;
}

.hive_public_images {
    position: relative;
    min-height: 500px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 50px;
    margin: 0px auto 50px auto;
}

.hive_public_absolute_content {
    position: absolute;
    right: 36px;
    width: 550px;
    bottom: -61px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 70%), linear-gradient(to bottom, #7200ca, #3b0065);
    color: white;
    padding: 29px;
    font-size: 14px;
    border-radius: 4px;

}

.operation_container {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}


.top_left_container {
    margin-top: 50px;
}

.hive_five_image {
    width: 80%;
    margin: auto;
}

.operation_images {
    flex: 1;
    margin: auto;
    display: flex;
    justify-content: center;
}

.operation_images img {
    width: 80%;
}


.operation-left-content span {
    color: #242424b3;
    font-size: 14px;

}

.operation_benefits {
    font-size: 22px;
    color: white;
}

@media (max-width:750px) {

    .operation-left-container,
    .operation-right-container {
        flex-direction: column;
        height: auto;
    }

    .hive_public_images {
        position: relative;
        min-height: auto;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 50px;
        margin: 0px auto 50px auto;
        flex-direction: column;
    }

    .hive_five_image {
        width: 90%;
        margin: auto;
    }

    .hive_public_absolute_content {
        position: relative;
        right: 0;
        width: 90%;
        bottom: 0;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 70%), linear-gradient(to bottom, #7200ca, #3b0065);
        color: white;
        padding: 29px;
        font-size: 14px;
        border-radius: 4px;
        margin: auto;
    }

    .operation_benefits {
        font-size: 17px;
        color: white;
    }

    .operation_images {
        order: 2;
    }

    .top_left_container {
        margin-top: 5px;
    }


    .hive_public_images {
        margin: 0px auto 0px auto;
    }

    .operation-left-content h2 {
        font-size: 18px;
    }

}
</style>