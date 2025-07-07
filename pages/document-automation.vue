<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="documentGeneration-dealdox-container ">
            <div class="sales-optimize-image" id="sales-optimize-image">
                <div class="sales-optimize-content-left">
                    <h1 class="salesforce-optimization-heading-content" id="salesforce-optimization-heading-content">
                        Automate Document Generation for any <br class="no-break-rquired"><span
                            class="salesforce-optimization-heading" id="salesforce-optimization-heading">complex
                            process <br class="no-break-rquired"> from anywhere</span> </h1>
                    <small class="salesforce-optimization-lowercontent">
                        Create professional, dynamic documents effortlessly with DealDox, integrating real-time
                        content
                        and
                        high-quality images.
                    </small>
                    <NuxtLink to="/demo" class="sales-optimize-demo-btn-anker" style="margin: 10px 0px;"><button
                            class="sales-optimize-demo-btn">Request Demo</button></NuxtLink>
                </div>
                <div class="sales-optimize-image-right">
                    <video id="docVideo"
                        src="https://res.cloudinary.com/ds6j6gokv/video/upload/v1751374404/Editied_one_55b16e4698.mp4"
                        autoplay muted playsinline preload="auto"
                        style="max-width: 100%; height: auto; border-radius: 10px;"></video>
                </div>

            </div>


            <DocumentDynamic />
            <DocumentSlide />
            <DocumentPixel />
            <DocumentFlex />
            <DocumentForm />
            <Blog />
            <documentFaq />

        </div>
        <DealDoxFooter />
    </div>
</template>


<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';
import DocumentDynamic from '../components/documentGeneration/DocumentDynamic.vue'
import DocumentSlide from '../components/documentGeneration/DocumentSlide.vue'
import Blog from '../components/Common/Blog.vue';
import documentFaq from '../components/Common/documentFaq.vue'
import DocumentPixel from '../components/documentGeneration/DocumentPixel.vue'
import DocumentFlex from '../components/documentGeneration/DocumentFlex.vue'
import DocumentForm from '../components/documentGeneration/DocumentForm.vue'


export default {

    name: 'document-automation',
    components: {
        Navbar,
        DocumentDynamic,
        DocumentSlide,
        Blog,
        DocumentFlex,
        documentFaq,
        DocumentPixel,
        DocumentForm,
        DealDoxFooter
    },
    head: {
        title: 'Document Automation Made Easy with DealDox CPQ ',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'DealDox CPQ simplifies document automation for sales, quotes, and contracts—saving time, reducing errors, and accelerating your workflow. ' },
            { hid: 'keywords', name: 'keywords', content: 'Document Automation (Primary), generation of deal documents, generate a document, automated document generation, generation of accurate and professional documents, integrate document generation' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/document-automation' }
        ],
    },

}

</script>

<style>
.document_header_container {
    display: 'flex';

}





.documentGeneration-dealdox-container {
    margin: auto;
    max-width: 1320px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 30px;

}


#sales-optimize-image {
    background-color: #320157;
    width: 100% !important;
    color: white !important;
    padding: 10px 40px;

}

#salesforce-optimization-heading,
#salesforce-optimization-heading-content {
    color: white !important;
}



@media screen and (max-width:750px) {
    .document_flex_sub_container_child {
        height: fit-content;
    }

    .document_flex_container {
        height: fit-content;
        flex-direction: column;
    }

    .document_flex_container::before {
        height: 115% !important;
    }

    .document_flex_sub_container_child .documentGeneration-dealdox-container {
        margin-top: 30px;
    }

    .documentGeneration-dealdox-container {
        margin-top: 40px !important;
    }

}



@import url(../assets/css/pages-css/salesOptimize.css);
</style>