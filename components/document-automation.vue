<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="documentGeneration-dealdox-container ">
            <div>
                <div>
                    <h1><span>Automate Document Generation </span>
                        <span>for any complex process, </span>
                        <span>from anywhere </span>
                    </h1>
                    <span>Create professional, dynamic documents effortlessly with DealDox, integrating real-time
                        content
                        and
                        high-quality images. </span>

                    <button>Get a Demo</button>


                </div>
                <div>
                    <img src="" alt="">
                </div>


            </div>

            <DocumentDynamic />
            <DocumentSlide />
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


export default {

    name: 'document-automation',
    components: {
        Navbar,
        DocumentDynamic,
        DocumentSlide,
        Blog,
        documentFaq,
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
</style>