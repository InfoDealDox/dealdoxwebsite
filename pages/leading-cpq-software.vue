<!-- <template>
    <div>
      <LandingNavbar class="navbar-style-two" :demoFormRef="demoFormRef"/>
      <Header :demoFormRef="demoFormRef" />
      <landingLinksPage :demoFormRef="demoFormRef" />
      <loadingDemoForm ref="demoFormRef" />
      <DealDoxFooter />
    </div>
  </template>
  
  <script>
  import Header from '../components/cpqSotware/Header.vue';
  import DealDoxFooter from '../layouts/DealDoxFooter';
  import landingLinksPage from '../components/cpqSotware/landingLinksPage.vue'
  import LandingNavbar from '../layouts/LandingNavbar';
  import loadingDemoForm from '../components/cpqSotware/loadingDemoForm.vue';
  
  export default {
    name: 'quatations-software',
    components: {
      Header,
      DealDoxFooter,
      LandingNavbar,
      loadingDemoForm,
      landingLinksPage
    },
    data() {
      return {
        demoFormRef: null
      };
    },
    mounted() {
      this.demoFormRef = this.$refs.demoFormRef;
    }
  }
  </script>
   -->



   <template>
    <div>
      <LandingNavbar class="navbar-style-two" v-if="demoFormRef" :demoFormRef="demoFormRef"/>
      <Header v-if="demoFormRef" :demoFormRef="demoFormRef"/>
      <landingLinksPage v-if="demoFormRef" :demoFormRef="demoFormRef"/>
      <loadingDemoForm ref="demoFormRef"/>
      <DealDoxFooter />
    </div>
  </template>
  
  <script>
  import Header from '../components/cpqSotware/Header.vue';
  import DealDoxFooter from '../layouts/DealDoxFooter';
  import landingLinksPage from '../components/cpqSotware/landingLinksPage.vue';
  import LandingNavbar from '../layouts/LandingNavbar';
  import loadingDemoForm from '../components/cpqSotware/loadingDemoForm.vue';
  
  export default {
    name: 'quatations-software',
    components: {
      Header,
      DealDoxFooter,
      LandingNavbar,
      loadingDemoForm,
      landingLinksPage
    },
    data() {
      return {
        demoFormRef: null
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.demoFormRef = this.$refs.demoFormRef;
      });
    }
  }
  </script>
  