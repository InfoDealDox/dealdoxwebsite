<template>
  <div>
    <Navbar class="navbar-style-two" />
    <!-- <PageTitle class="page-title-style-two-glossary" pageTitle=""
            pageDesc="" /> -->
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12 col-md-12">
          <div class="new-app-main-banner-wrap-image">
            <img src="../../../assets/images/banner/glossary.png" alt="image">
          </div>
        </div>
      </div>
    </div>
    <!-- <PageTitle pageTitle="Glossary Category" pageDesc="" /> -->
    <div v-if="successcategory !== null">
      <CategoryDetails v-bind:detailsContent="successcategory" />
    </div>
    <DealDoxFooter />
  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar';
// import PageTitle from '../../../components/Common/PageTitle';
import CategoryDetails from '../../../components/categories/glossary-categories-details.vue'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
  components: {
    Navbar,
    // PageTitle,
    CategoryDetails,
    DealDoxFooter,
  },
  data() {
    return {
      successcategory: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://cms.dealdox.io/api/glossary-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.successcategory = reaponse.data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>