<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <!-- <MainBanner />
  <TransformYourSales />
  <Partner />
  <WithOurSubscrip />
  <EasyIntegration />
  <LightningFast />
  <ImproveSales />
  <EasyCPQ />
  <AdditionalFeature />
  <AutomatedQuotes />
  <GetInTouch />
  <Faq /> -->
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBanner from '../components/IndexPage/MainBanner';
import TransformYourSales from '../components/IndexPage/TransformYourSales';
import Partner from '../components/Common/Partner'
import WithOurSubscrip from '../components/IndexPage/WithOurSubscrip';
import EasyIntegration from '../components/IndexPage/EasyIntegration';
import LightningFast from '../components/IndexPage/LightningFast';
import ImproveSales from '../components/IndexPage/ImproveSales';
import EasyCPQ from '../components/IndexPage/EasyCPQ';
import AdditionalFeature from '../components/IndexPage/AdditionalFeature';
import AutomatedQuotes from '../components/IndexPage/AutomatedQuotes';
import GetInTouch from '../components/IndexPage/GetInTouch';
import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
components: {
    Navbar,
    // MainBanner,
    // TransformYourSales,
    // Partner,
    // WithOurSubscrip,
    // EasyIntegration,
    // LightningFast,
    // ImproveSales,
    // EasyCPQ,
    // AdditionalFeature,
    // AutomatedQuotes,
    // GetInTouch,
    // Faq,
    DealDoxFooter,
},
}
</script>