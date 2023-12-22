<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">

            <div class="section-title">
                <h2>Blogs Featured Categories</h2>
            </div>

            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="blog in details[0].attributes?.blogs?.data" :key="blog.id">
                    <div class="single-blog-post bg-white">
                        <div class="image">
                            <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </NuxtLink>
                            <!-- <NuxtLink to="/blog-grid" class="tag">{{ blog?.attributes?.tag }}</NuxtLink> -->
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ blog.attributes.shortDesc }}</p>
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> {{ blog.attributes.date }}</li>
                                <!-- <li><i class="ri-time-line"></i> {{ blog.attributes.shortDesc }}</li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <div class="nav-links">
                            <span class="page-numbers current">1</span>
                            <NuxtLink to="/blog-grid" class="page-numbers">2</NuxtLink>
                            <NuxtLink to="/blog-grid" class="page-numbers">3</NuxtLink>
                            <NuxtLink to="/blog-grid" class="next page-numbers" title="Next Page"><i
                                    class="ri-arrow-right-line"></i></NuxtLink>
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
            categories: []
        }
    },
}
</script>