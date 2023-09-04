<template>
  <div>
    <Navbar class="navbar-style-two" />
    <PageTitle pageTitle="Success Story Category" pageDesc="" />
    <div v-if="successcategory !== null">
      <CategoryDetails v-bind:detailsContent="successcategory" />
    </div>
    <DealDoxFooter />
  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import CategoryDetails from '../../../components/categories/success-story-categories-details'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
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
    console.log("I am don")
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://dealdoxstrapi.pbwebvision.com/api/successcategories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.successcategory = reaponse.data.data
        console.log("this.successcategories....", this.successcategory);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>