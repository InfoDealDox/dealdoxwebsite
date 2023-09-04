<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">

            <div class="section-title">
                <h2>Success Story Featured Categories</h2>
            </div>

            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="successstory in details[0].attributes?.success_stories?.data"
                    :key="successstory.id">
                    <div class="single-blog-post bg-white">
                        <div class="image">
                            <router-link :to="'/success-stories-details/' + successstory.attributes.slug" class="d-block">
                                <img :src="successstory?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </router-link>
                            <!-- <router-link to="/success-stories-details" class="tag">{{ successstory?.attributes?.tag
                            }}</router-link> -->
                        </div>
                        <div class="content">
                            <h3>
                                <router-link :to="'/success-stories-details/' + successstory.attributes.slug">
                                    {{ successstory.attributes.title }}
                                </router-link>
                            </h3>
                            <p>{{ successstory.attributes.shortDesc }}</p>
                            <ul class="meta">
                                <!-- <li><i class="ri-time-line"></i> {{ successstory.attributes.date }}</li> -->
                                <!-- <li><i class="ri-time-line"></i> {{ blog.attributes.shortDesc }}</li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <div class="nav-links">
                            <span class="page-numbers current">1</span>
                            <router-link to="/blog-grid" class="page-numbers">2</router-link>
                            <router-link to="/blog-grid" class="page-numbers">3</router-link>
                            <router-link to="/blog-grid" class="next page-numbers" title="Next Page"><i
                                    class="ri-arrow-right-line"></i></router-link>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            successstories: []
        }
    },
}
</script>