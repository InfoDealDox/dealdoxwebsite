<template>
    <div class="blog-area pt-70 bg-LatestBlog">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-4 col-md-6">
                    <div class="section-title">
                        <h2>Featured Blogs</h2>
                    </div>
                </div>
                <div class="col-lg-8 col-md-6">
                    <!-- <div class="widget-area" id="secondary">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <label>
                                    <span class="screen-reader-text">Search for:</span>
                                    <input type="search" class="search-field" placeholder="Search...">
                                </label>
                                <button type="submit"><i class='ri-search-2-line'></i></button>
                            </form>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="row justify-content-center" v-if="featuredblogs !== null">
                <div class="col-lg-4 col-md-6" v-for="featuredblog in featuredblogs.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="featuredblog.id">
                    <div class="single-blog-post bg-F9F9FD">

                        <div class="image">
                            <NuxtLink :to="'/featured-blog-details/' + featuredblog.attributes.slug" class="d-block">
                                <img :src="featuredblog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                            <!-- <NuxtLink to="/blog-grid" class="tag">{{ blog.attributes.tag }}</NuxtLink> -->
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/featured-blog-details/' + featuredblog.attributes.slug">
                                    {{ featuredblog.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ featuredblog.attributes.shortDesc }}</p>
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> {{ featuredblog.attributes.date }}</li>
                                <!-- <li><i class="ri-time-line"></i> {{ blog.attributes.shortDesc }}</li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <!-- <div class="nav-links">
                            <span class="page-numbers current">1</span>
                            <NuxtLink to="/blog-grid" class="page-numbers">2</NuxtLink>
                            <NuxtLink to="/blog-grid" class="page-numbers">3</NuxtLink>
                            <NuxtLink to="/blog-grid" class="next page-numbers" title="Next Page"><i
                                    class="ri-arrow-right-line"></i></NuxtLink>
                        </div> -->
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="itemList" align="center"></b-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Blog',
    data() {
        return {
            featuredblogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/featuredblogs?populate=*');
        this.featuredblogs = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>