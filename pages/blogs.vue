<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="new-app-main-banner-wrap-image">
                        <img src="../assets/images/more-home/banner/blogsheader.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <!-- <PageTitle class="page-title-style-two" pageTitle=""
            pageDesc="" /> -->
        <!-- <Blog /> -->
        <LatestBlog />
        <!-- <AutomatedQuotes /> -->
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
// import PageTitle from '../components/Common/PageTitle';
// import Blog from '../components/blogs/Blog'
import LatestBlog from '../components/blogs/LatestBlog.vue'
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter.vue'
import axios from 'axios';


export default {
    components: {
        Navbar,
        // PageTitle,
        // Blog,
        LatestBlog,
        // AutomatedQuotes,
        DealDoxFooter,
    },
  //  data() {
//     return {
//        seoData: [],
//     }
 //   },
  //  created: async function () {
   //     const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=blogs&populate=deep,5')
    //    const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
   //     if (pageData?.attributes?.seo?.length > 0) {
    //        this.seoData = pageData.attributes.seo[0];
    //    }
  //  },
   // head({ $seo }) {
  //      return $seo({
  //          title: this.seoData.metaTitle ||'Discover Engaging Blogs for Insightful Content',
  //          description: this.seoData.metaDescription,
//            keywords: this.seoData.keywords,
            // image: this.post.image || '',
 //       });
   // },
   head: {
        title: 'Discover Engaging Blogs for Insightful Content',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore our diverse collection of blogs for valuable insights, tips, and inspiration. Stay informed and entertained with our latest posts.' },
            { hid: 'keywords', name: 'keywords', content: 'Blogging Tips, Content Creation, Blog Writing, Blog Posts' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/blogs' }
        ],
    },
}
</script>
