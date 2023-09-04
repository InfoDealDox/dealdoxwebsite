<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two-glossary" pageTitle=""
            pageDesc="" />
        <!-- <PageTitle class="page-title-style-two-glossary" pageTitle="Glossary"
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" /> -->
        <GlossaryPage />
        <AutomatedQuotes />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/glossary/PageTitle';
import GlossaryPage from '../components/glossary/GlossaryPage'
import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    components: {
        Navbar,
        PageTitle,
        GlossaryPage,
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