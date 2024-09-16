<template>
    <div>

        <Navbar class="navbar-style-two" />
        <Header />
        <landingLinksPage/>
        <loadingDemoForm/>
        <DealDoxFooter />
       

    </div>
</template>


<script>
import Header from '../components/cpqSotware/Header.vue';
import DealDoxFooter from '../layouts/DealDoxFooter';
import landingLinksPage from '../components/cpqSotware/landingLinksPage.vue'
import Navbar from '../layouts/Navbar';
import loadingDemoForm from '../components/cpqSotware/loadingDemoForm.vue';


export default {
    name: 'quatations-software',
    components: {
        Header,
        DealDoxFooter,
        Navbar,
        loadingDemoForm,
        landingLinksPage
    }
}

</script>


<style>
@import '../assets/css/pages-css/CpqSotware.css';
</style>
