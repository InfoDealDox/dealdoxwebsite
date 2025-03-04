<template>
    <div>

        <Navbar class="navbar-style-two" />
        <div class="why-sales-container">
            <div class="sales-sub-container">

                <div class="sales-left-container">
                    <span class="sales-left-heading">For Sales Teams</span>
                    <span>CPQ (Configure, Price, Quote) systems significantly enhance the efficiency and effectiveness
                        of sales teams in several ways: </span>
                    <ul class="sales-list-content">
                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Faster sales cycles
                            from lead generation to closing deals.</li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Pre-configured
                            solutions reduce the complexity of sales. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Shortened
                            decision-making time for prospects. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Greater opportunities
                            for cross-selling and upselling. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Enhance ability to
                            adapt to market fluctuations and competitive pricing. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i><span>Increased time
                                for
                                sales activities by reducing time spent on proposal creation.</span> </li>



                    </ul>

                </div>

                <div class="sales-right-container">

                    <img src="../assets/images/WebsiteForSales.png" alt="DealDox Sales" class="dealdox-sales" />
                </div>


            </div>
            <div class="sales-sub-container">

                <div class="sales-right-container mobile-marketing-container">

                    <img src="../assets/images/SaleMarketingImage.webp" alt="DealDox Sales" class="dealdox-sales" />
                </div>

                <div class="sales-left-container">
                    <span class="sales-left-heading">For Marketing Teams</span>
                    <span>CPQ (Configure, Price, Quote) systems empower marketing teams to enhance sales efforts with
                        precise marketing materials and value-driven sales tools. The primary advantages of CPQ
                        solutions for marketing include: </span>
                    <ul class="sales-list-content">
                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Generating branded
                            proposal documents and contracts. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Creating
                            customer-facing product catalogs. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Providing sales
                            resources that boost win rates. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Offering value-based
                            sales tools such as value propositions, white papers, ROI/TOC calculators, and benefit
                            estimators. </li>

                        <li class="sales-lists"><i class="bi bi-hexagon-fill sales-list-icons"></i>Ensuring all
                            marketing materials feature accurate, up-to-date pricing and product configuration details.
                        </li>





                    </ul>

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
    },
    head: {
        title: 'Boost Sales & Marketing Efficiency with DealDox CPQ',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Enhance sales and marketing performance with DealDox CPQ. Automate pricing, streamline proposal creation, and generate branded materials to drive conversions and revenue growth.' },
            { hid: 'keywords', name: 'keywords', content: 'CPQ for sales teams, CPQ for marketing teams, sales automation, pricing automation, proposal generation, sales workflow optimization, cross-selling, upselling, branded proposal documents, product catalogs, sales enablement, marketing automation, ROI calculators, value-based selling, competitive pricing strategy' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/sales' }
        ],
    },
}


</script>

<style>
.why-sales-container {
    max-width: 1320px;
    margin-top: 110px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;

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
    display: flex;
    flex-direction: column;
    gap: 3px;
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
    list-style: none;

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


.sales-list-icons {
    color: #715cf3;
    font-size: 11px;
    padding: 5px 10px 0px 0px;
    position: relative;
    bottom: 1px;
}

.sales-lists {
    font-size: 15px;
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

    .mobile-marketing-container {
        order: 2;
    }
}
</style>