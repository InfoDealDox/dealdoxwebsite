<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two-ebook" pageTitle=""
            pageDesc="" />
        <!-- <PageTitle class="page-title-style-two-ebook" pageTitle="Ebook"
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" /> -->
        <Ebook />
        <AutomatedQuotes />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Ebook from '../components/ebook/Ebook'
import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    components: {
        Navbar,
        PageTitle,
        Ebook,
        AutomatedQuotes,
        DealDoxFooter,
    },
    head: {
        title: '',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' }
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: '#' }
        ],
    },
};
</script>