<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class='api-dealdox-container'>
            <div class="api-first-section">
                <div class="api-first-section-leftContent">
                    <h1 class="Embed_document_workflows">
                        Embed document workflows smoothly into your ecosystem

                    </h1>

                    <h2>Create, manage, and generate documents directly on your platform. Easily integrate DealDox
                        CPQ’s document generation capabilities to streamline and optimize your workflow. </h2>
                    <NuxtLink to='/demo'><button class="api-button">Request Demo</button></NuxtLink>


                </div>
                <div class="api_hero_image_div">
                    <img src="../assets/images/Api_Hero_Image.png" alt="APi" class="api_hero_image">

                </div>

            </div>
            <div>
                <h2 class="api-utilizing-dealdox">Utilize DealDox CPQ’s developer-friendly API to craft the perfect
                    solution</h2>
                <div class="api-second-section">
                    <div v-for="(data, index) in apiContent" class="api_second_cards_body" :key="index">
                        <img :src="data.image" class="api_json_image" :alt="data.alt" />
                        <h2 class="api_card_header">{{ data.header }}</h2>
                        <span class="api_card_content">{{ data.content }}</span>

                    </div>

                </div>
            </div>

            <div>
                <h2 class="api-utilizing-dealdox">Integrate document workflows into your product</h2>
                <div class="apithird_section">

                    <div class="thirdsection_left_container">
                        <div class="api_slider_imagees_div">
                            <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1748420012/658dbbe3_6ca5_487e_a465_fda727bf7d27_bd0b670530.jpg"
                                class="api_slider_imagees" alt="Api Feature">
                        </div>

                        <div class="thirdsection_left">
                            <h2 class="api_Slider_header">Embedded editing</h2>
                            <span class="api_slider_content"> Create and customize documents directly from your
                                platform.
                            </span>
                            <span class="api_slider_content"> Incorporate a full-featured editing experience, allowing
                                users to design and modify templates and documents seamlessly within your platform.
                            </span>
                        </div>

                    </div>

                    <div class="thirdsection_left_container">


                        <div class="thirdsection_left">
                            <h2 class="api_Slider_header">Embedded sending: </h2>
                            <span class="api_slider_content"> Transform documents into interactive formats.
                            </span>
                            <span class="api_slider_content"> Upload PDFs, DOCX, and other formats, add fields, and send
                                them as DealDox CPQ documents directly from your platform.
                            </span>
                        </div>
                        <div class="api_slider_imagees_div">
                            <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1748419458/f28cbac2_f830_4a43_ae5c_02cadbcb667b_3aa457bc48.jpg"
                                alt="APi to Exchange Data" class="api_slider_imagees">
                        </div>

                    </div>
                    <div class="thirdsection_left_container">
                        <div class="api_slider_imagees_div">
                            <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1748419933/ab05c209_a5b4_4aa5_9d2b_f356d2b0fe23_0075abd8eb.jpg"
                                alt="CPQ capabilities" class="api_slider_imagees">
                        </div>

                        <div class="thirdsection_right">
                            <h2 class="api_Slider_header">Seamlessly connect all areas of your business without
                                transferring
                                data. </h2>
                            <span class="api_slider_content"> Integrate DealDox CPQ with your existing business
                                ecosystem,
                                including CRM, ERP, financial tools, and file management solutions. Use data and status
                                changes as triggers for document creation and sending via DealDox CPQ.
                            </span>
                        </div>



                    </div>
                    <div class="thirdsection_left_container">


                        <div class="thirdsection_left">
                            <h2 class="api_Slider_header">Create Custom Workflows </h2>
                            <span class="api_slider_content"> Build tailored capabilities on top of CPQ functionality.
                                Use
                                the API to exchange data between your application and DealDox CPQ.
                            </span>
                        </div>
                        <div class="api_slider_imagees_div">
                            <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1748351317/fcd3dfc8_5834_497b_8038_8df3c79b3bf7_8dd6bdbef3.jpg"
                                alt="CPQ Workflows" class="api_slider_imagees">
                        </div>

                    </div>
                </div>

            </div>


        </div>

        <DealDoxFooter />
    </div>

</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter.vue'

export default {

    name: 'api',
    components: {
        Navbar,
        DealDoxFooter,
    },
    data() {
        return {
            apiContent: [
                {
                    image: 'https://res.cloudinary.com/ds6j6gokv/image/upload/v1748351294/6c66ccf8_93ef_41f1_ba65_1a854cdbb1f3_ba1176e2e7.jpg',
                    alt: "Integration of CPQ",
                    header: "Seamlessly integrate DealDox CPQ into your existing workflows",
                    content: "Build solutions without assistance using our detailed documentation, how-to guides, and real-world examples. Explore the complete set of API features in our sandbox environment."
                },
                {
                    image: 'https://res.cloudinary.com/ds6j6gokv/image/upload/v1748351286/7a5c9b66_ca18_42a2_9e54_444340fb17f2_d2abe7ef8a.jpg',
                    alt: "Data Protection",
                    header: "Keep your data protected with top-tier security",
                    content: "All documents and relevant information are stored in a secure infrastructure. DealDox CPQ is HIPAA compliant and backed by SOC 2 certification, ensuring your data is fully protected and managed with the highest level of confidentiality and compliance."
                },
                {
                    image: 'https://res.cloudinary.com/ds6j6gokv/image/upload/v1748351269/29a3f74f_1ade_41ed_a1f0_18dd41ab8e4f_689ed1a7df.jpg',
                    alt: "Data Analysis",
                    header: "Track, Analyze, and Improve with Real-Time Production Data",
                    content: "Enhance your development experience by monitoring real-time production data, maintaining a complete history of integrations, and tracking request and response times to ensure optimal performance."
                }
            ]


        }
    },
    head: {
        title: 'Efficient API to Exchange Data | Seamless System Integration',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: " how an API to exchange data can streamline communication between systems, improve automation, and boost your application's performance." },
            { hid: 'keywords', name: 'keywords', content: 'API, API Features, API to exchange data' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/api' }
        ],
    },

}

</script>

<style>
.api-dealdox-container {
    margin: auto;
    max-width: 1320px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 30px;
}


.api-first-section div {
    flex: 1;

}


.api-first-section-leftContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
}

.api-first-section div h1 {
    color: white;
}

.api-button {
    width: fit-content;
    float: left;
}

.api-button {
    color: #3b0065;
    font-weight: 600;
    background-color: white;
    border: none;
    border-radius: 30px;
    font-size: 12px;
    padding: 5px 10px;
    margin: 10px 0px;

    &:active {
        transform: scale(1.2);
    }


    &:hover {
        background-color: #3b0065;
        color: white;
    }

}


.api-second-section {
    display: flex;
    gap: 10px;
    width: 80%;
    margin: auto;
    flex-wrap: wrap;
    height: fit-content;
    gap: 30px;

}

.api_second_cards_body {
    flex: 1;
    min-width: 250px;

}

.api-utilizing-dealdox {
    text-align: center;
    margin: 0px 0px 30px 0px;
    font-weight: 500;
    padding: 0px 20px;
}

.api_Slider_header {
    font-weight: 600;
    font-size: 25px;
}

h2.api_card_header {
    height: fit-content !important;
    font-size: 16px;
}

.api_card_content,
.api_slider_content {
    color: #242424b3;
    font-size: 14px;
    display: contents;
}

.thirdsection_left,
.thirdsection_right {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

}

.thirdsection_left div,
.thirdsection_right div {
    flex: 1;

}

.thirdsection_left_container {
    display: flex;
}

.thirdsection_left_container div {
    flex: 1;
}

.api_json_image {
    height: 50px;
    margin-bottom: 10px;
}


.api-first-section-leftContent h2 {
    font-size: 16px;
    color: white;
    font-weight: 400;
    line-height: 27px;
}

.api-first-section {
    display: flex;
    height: 429px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 70%), linear-gradient(to bottom, #7200ca, #3b0065);
    color: white;
    gap: 46px;
    justify-content: center;
    padding: 38px 50px;
}

.Embed_document_workflows {
    font-size: 41px;
    line-height: 47px;
}

.api_hero_image {
    height: 125%;

}

.api_hero_image_div {
    display: flex;
    justify-content: end;
    align-items: center;
}

.apithird_section {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

img.api_slider_imagees {
    height: 83%;
    box-shadow: 0px 0px 2px 0px #ccc;
    border-radius: 10px;
}


@media (max-width:550px) {
    .api-first-section {
        height: fit-content;
        flex-direction: column;
        gap: 10px;
        padding: 10px;

    }

    .Embed_document_workflows {
        font-size: 24px;
        line-height: normal;
    }

    .api-first-section-leftContent h2 {
        font-size: 13px;
        line-height: inherit;
    }

    .api-utilizing-dealdox {
        font-size: 20px;
    }

    .thirdsection_left_container {
        flex-direction: column;
        gap: 20px;
    }

    .thirdsection_left {
        order: 1;
    }

    .api_slider_imagees_div {
        order: 2;
    }

    .api_Slider_header {
        font-size: 18px;
    }

    .api-dealdox-container {
        margin-top: 48px;
    }

}

@media (min-width:550px) and (max-width:750px) {
    .api_hero_image {
        height: 100%;
    }

    .api-first-section {
        padding: 38px 26px;
    }

    .Embed_document_workflows {
        font-size: 28px;
        line-height: 36px;
    }

    .api_Slider_header {
        font-size: 16px;
    }

}



@media (min-width:750px) and (max-width:1000px) {
    .Embed_document_workflows {
        font-size: 37px;
        line-height: 42px;
    }

    .api_Slider_header {
        font-weight: 600;
        font-size: 19px;
    }

    .api-dealdox-container {
        margin-top: 48px;
    }


}
</style>