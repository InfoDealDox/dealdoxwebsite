<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two-success-stories" pageTitle=""
            pageDesc="" />
        <!-- <SuccesStoryBanner /> -->
        <SuccessStories />
        <!-- <AutomatedQuotes /> -->
        <!-- <Blog />
        <GetInTouch /> -->
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
// import SuccesStoryBanner from '../components/success-stories/SuccesStoryBanner'
import SuccessStories from '../components/success-stories/SuccessStories'
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import Blog from '../components/Common/Blog';
// import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter'

export default {
    components: {
        Navbar,
        PageTitle,
        // SuccesStoryBanner,
        SuccessStories,
        // AutomatedQuotes,
        // Blog,
        // GetInTouch,
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