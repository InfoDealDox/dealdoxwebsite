<template>
    <div class="new-app-main-banner-wrap-area bg-white">
        <div class="container pb-85">


            <div style="width: 100%;">
                <div class="new-app-main-banner-wrap-image" data-aos="fade-left" data-aos-duration="2000">
                    <img :src="details[0].attributes.image.data.attributes.url" 
                    :alt="details[0].attributes.image.data.attributes.alternativeText"  class="success-story-image">
                </div>
            </div>

        </div>
        <div class="blog-details-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="blog-details-desc">
                            <div class="article-image">
                                <!-- <NuxtLink to="/blog-grid" class="tag">{{ details[0].attributes.tag }}</NuxtLink> -->
                                <!-- <img :src="details[0].attributes.image.data.attributes.url" alt="image"> -->
                            </div>
                            <div class="article-content">
                                <strong>{{ details[0].attributes.title }}</strong>
                                <span v-html="details[0].attributes.longDesc"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            successcategories: [],
            successstories: [],
        }
    },
    created: async function () {
        axios.get('https://cms.dealdox.io/api/successcategories')
            .then(response => {
                this.successcategories = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://cms.dealdox.io/api/successstories?populate=*')
        this.successstories = response.data.data;
    },
}
</script>