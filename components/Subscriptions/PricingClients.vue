<template>
    <div class="client-carosel-container">
        <div v-for="(clientsInfo, index) in clientsInfos" :key="index" class="pricing-clients-container-body"
            :class="{ active: index === currentIndex }">
            <div class="clients-body">
                <div class="pricing-clients-flex-1">
                    <img :src="clientsInfo.imageSrc" :alt="clientsInfo.companyName" class="client-image-size">
                    <div class="success-story-daspass">
                        <small class="Customer-success-story-tilte">Customer success story</small>
                        <span class="clients-company-description"><span class="clients-company-name">{{
                            clientsInfo.companyName }}</span> {{ clientsInfo.headerDescription1 }}</span>
                        <span class="clients-company-description">{{ clientsInfo.headerDescription2 }}</span>

                    </div>
                </div>
                <div class="pricing-clients-flex">

                    <div class="dealdox-description-body"> <span>“{{ clientsInfo.description }}”</span></div>


                    <div class="clients-second-row-image">
                        <img :src="clientsInfo.featureImage" alt="" class="client-image-size-resolution">
                        <span class="dealdox-daspass-tag">{{ clientsInfo.footerDesscription1 }}</span>
                        <span class="dealdox-daspass-tag"> {{ clientsInfo.footerDesscription2 }}</span>
                    </div>
                </div>
                <div class="pricing-clients-flex-3">
                    <span class="success-client-name"><span style="font-weight: 600;font-size: 20px;">{{
                        clientsInfo.owner }},</span>
                        {{ clientsInfo.designation }}</span>
                    <small>{{ clientsInfo.companyRole }}</small>

                </div>

                <button class="carousel-controlsss" style="right: -12px;
    transform: translateY(-19%);" @click="prevSlide">❯</button>
                <button class="carousel-controlsss" style="left: -12px;
    transform: translateY(-19%);" @click="nextSlide">❮</button>

            </div>

        </div>
        <div class="dots">
            <span v-for="(clientsInfo, index) in clientsInfos" :key="index" class="dot"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
        </div>
    </div>

</template>


<script>
export default {
    name: "PricingClients",
    data() {
        return {
            currentIndex: 0, // Tracks the current active slide
            clientsInfos: [
                {
                    companyName: "Daspass",
                    headerDescription1: "is preparing",
                    headerDescription2: "for success with DealDox CPQ",
                    description: "DealDox CPQ helped to grow our business, & reduced the timeline to create proposals & costing sheets. We can now create quotes anytime, anywhere, on any device. We’ve eliminated the need for back-office team to prepare proposal and costing sheets.",
                    footerDesscription1: "DEALDOX CPQ FEATURE USED:",
                    footerDesscription2: 'AUTOMATED QUOTATIONS',
                    owner: "Rajesh Sharma",
                    designation: "CEO",
                    companyRole: "Daspass - Heating Element Manufacturers",
                    imageSrc: require("../../assets/images/PricingAssests/DasspassClientName.webp"),
                    featureImage: require("../../assets/images/PricingAssests/EightyFive.webp"),

                },
                {
                    companyName: "Utkarsh India",
                    headerDescription1: "DealDox Bridges the",
                    headerDescription2: "Gap between CRM and ERP",
                    description: "Despite using Lead Squared (CRM) and SAP HANA (ERP), we were still generating quotations manually, which was time-consuming and inefficient. DealDox CPQ filled this gap perfectly by automating our quoting and proposal generation process. This saved our valuable time and reduced errors.",
                    footerDesscription1: "DEALDOX CPQ FEATURE USED:",
                    footerDesscription2: 'AUTOMATED ALERTS',
                    owner: "Utkarsh Bansal",
                    designation: "FOUNDER",
                    companyRole: "Utkarsh India - Manufacturer and exporter of Steel Structures, Steel ERW Pipes and Polymer products",
                    imageSrc: require("../../assets/images/PricingAssests/UtkarshIndiaClient.webp"),
                    featureImage: require("../../assets/images/PricingAssests/thirthy.webp"),

                },
                {
                    companyName: "Elemmentz - Limitless Living",
                    headerDescription1: "Streamlining Quoting ",
                    headerDescription2: "Processes with DealDox CPQ",
                    description: "We used to spend days creating quotations for Modular Wet Kitchens, but now we generate automated quotes and cost estimations quickly. The solution also helps us cross-sell and upsell our products effectively. DealDox CPQ has streamlined our quoting processes.",
                    footerDesscription1: "",
                    footerDesscription2: '',
                    owner: "Siva Prakash Alluri",
                    designation: "FOUNDER",
                    companyRole: "Elemmentz - Limitless Living - Interior and Modular Designer Brand",
                    imageSrc: require("../../assets/images/PricingAssests/ElemmentzLimitlessClient.webp"),
                    featureImage: require("../../assets/images/PricingAssests/tenXFaster.webp"),

                }


            ]
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex =
                this.currentIndex === 0 
                    ? this.clientsInfos.length - 1
                    : this.currentIndex - 1;
        },
        nextSlide() {
            this.currentIndex =
                this.currentIndex === this.clientsInfos.length - 1
                    ? 0
                    : this.currentIndex + 1;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
    },
};
</script>



<style>
.client-carosel-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.pricing-clients-container-body {
    flex: 0 0 100%;
    display: none;

}


.pricing-clients-container-body.active {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 30px auto;


}

.clients-body {
    background-color: #dcecfa;
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 20px 30px;
    height: 435px;
    position: relative;

}

.pricing-clients-flex {
    display: flex;
    align-items: center;
    width: 100%;
}

.success-story-daspass {
    display: flex;
    flex-direction: column;
    color: #044786;
}

.pricing-clients-flex-1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;


}

.pricing-clients-flex-3 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    color: #044786;
    font-size: 18px;
}

.clients-company-name {
    color: #3AB6E5;
}

.clients-company-description {
    font-family: var(--monsterFamily);
    font-size: 30px;
    line-height: normal;
    font-weight: 600;
}

.Customer-success-story-tilte {
    font-family: var(--monsterFamily);
    font-size: 24px;
}

.dealdox-description-body {
    font-size: 19px;
    width: 70%;
    color: #044786;
}

.clients-second-row-image {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

.dealdox-daspass-tag {
    color: #044786;
    font-weight: 600;
    font-size: 12px;
}

.client-image-size,
.client-image-size-resolution {
    height: 160px;
}

.carosel-left-right {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.carousel-controlsss {
    border: 0.1px solid #ccc;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3AB6E5;
    position: absolute;
}

.dots {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    height: 100px;
}

.dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dot.active {
    background-color: black;
}

.dot:hover {
    background-color: black;
}

@media (max-width:520px) {
    .clients-body {
        gap: 20px;
        height: auto
    }

    .Customer-success-story-tilte {

        font-size: 17px;
        text-align: center;
    }

    .dealdox-description-body {
        font-size: 16px;
        text-align: center;



    }

    .dealdox-description-body {
        font-size: 16px;
        text-align: center;
        width: 100%;
    }

    .clients-body {
        height: auto;
    }

    .success-story-daspass {
        order: 1;
    }

    .client-image-size {
        order: 2
    }

    .clients-second-row-image {
        display: none;
    }

    .pricing-clients-flex-1 {
        flex-direction: column;
    }

    .clients-company-description {
        text-align: center;
        font-size: 21px;
    }
}

@media (min-width:520px) and (max-width:750px) {
    .clients-body {
        gap: 15px;
        width: 96%;
        width: 85%;

    }

    .dealdox-description-body {
        font-size: 15px;
    }

    .dealdox-daspass-tag {
        font-size: 8px;
    }

    .client-image-size {
        height: 150px;
    }

    .client-image-size-resolution {
        height: 120px;
    }

    .clients-company-description {
        font-size: 22px;
    }

    .Customer-success-story-tilte {
        font-size: 20px;
    }
}


@media (min-width:750px) and (max-width:1024px) {
    .dealdox-daspass-tag {

        font-size: 10px;
    }

    .clients-company-description {

        font-size: 24px;

    }

    .clients-body {

        width: 96%;
        height: 550px;
    }

    .dealdox-description-body {
        font-size: 19px;

    }

    .client-image-size,
    .client-image-size-resolution {
        height: 160px;
    }
}
</style>