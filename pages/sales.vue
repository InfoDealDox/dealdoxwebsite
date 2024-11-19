<template>
    <div>

        <Navbar class="navbar-style-two" />
        <div class="why-sales-container">
            <div class="sales-sub-container">

                <div class="sales-left-container">
                    <span class="sales-left-heading">Streamline Your Sales Cycle, Maximize Your Revenue. </span>
                    <ul class="sales-list-content">
                        <li>Ensure controlled access to data and content. </li>
                        <li>Quickly generate accurate quotes, reducing sales cycle time. </li>
                        <li>Experience smooth integration with your chosen CRM and additional back-office systems,
                            ensuring
                            you
                            can retrieve the necessary data exactly when you require it with DealDox . </li>



                    </ul>
                </div>

                <div class="sales-right-container">

                    <img src="../assets/images/SaleHeaderImage.webp" alt="DealDox Sales" class="dealdox-sales" />
                </div>


            </div>

        </div>



        <DealDoxFooter />


    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: "sales",

    components: {
        Navbar,
        DealDoxFooter
    }
}


</script>

<style>
.why-sales-container {
    max-width: 1320px;
    margin-top: 110px;
    padding: 0px 20px;
}



.sales-sub-container {
    display: flex;
    gap: 24px;
    margin: auto;
    padding: 20px 0px;
    justify-content: center;
    align-items: center;
    height: 400px;
}

.sales-left-container {
    width: 50%;
}

.sales-right-container {
    width: 50%;
    height: 350px;
}

.sales-left-heading {
    font-size: 22px;
    font-weight: 700;
}

.sales-list-content {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 3px;

}

.dealdox-sales {
    width: 92%;
    height: 101%;
    border-radius: 10px;
}

#Sales {

    color: #715cf3;
    font-size: 48px;
    font-weight: bold;
    text-align: center
}


@media (max-width: 768px) {
    .sales-sub-container {
        flex-direction: column;
        gap: 10px;
        margin: auto;
        padding: 10px 0px;
        height: auto;

    }

    .sales-left-container {
        width: 100%;
    }

    .sales-right-container {
        width: 100%;
        height: auto;
    }

    .why-sales-container {
        margin-top: 83px;
    }
}
</style>