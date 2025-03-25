<template>
    <div class="blog-area pt-70 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-4 col-md-6">
                    <div class="section-title">
                        <h1 style="text-align: center;width: 100%;">Latest Blogs</h1>
                    </div>
                </div>
                <!-- <div class="col-lg-8 col-md-6">
                    <div class="widget-area" id="secondary">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <label>
                                    <span class="screen-reader-text">Search for:</span>
                                    <input type="search" class="search-field" placeholder="Search...">
                                </label>
                                <button type="submit"><i class='ri-search-2-line'></i></button>
                            </form>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="row justify-content-center" v-if="blogs !== null">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="blog.id">
                    <div class="single-blog-post bg-white">
                        <div class="image">
                            <NuxtLink :to="'/blog/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                            <!-- <NuxtLink to="/blog-grid" class="tag">{{ blog.attributes.tag }}</NuxtLink> -->
                        </div>
                        <div class="content">
                            <h2 class="blog-series-title-header">
                                <NuxtLink :to="'/blog/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </NuxtLink>
                            </h2>
                            <p>{{ blog.attributes.shortDesc }}</p>
                            <!-- <pre>{{ blog.attributes.blog_categories }}</pre> -->

                            <ul v-if="blog.attributes.blog_categories.data.length > 0" class="meta"
                                style="display: flex; justify-content: flex-start; flex-wrap: wrap; overflow: hidden; max-width: 100%; align-items: center;">
                                <!-- <li><i class="ri-time-line"></i> {{ blog.attributes.date }}</li> -->
                                <li v-for="(category, index) in blog.attributes.blog_categories.data" :key="index"
                                    class="default-btn"
                                    style="margin: 5px 10px 5px 0; color: white; padding: 2px 10px; font-size: 12px; font-weight: normal; ">
                                    {{
                                        category.attributes.name }}</li>
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
            blogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/blogs?populate=*&sort=date:desc');


        this.blogs = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>

<style>
.blog-series-title-header {
    font-size: 18px;
}
</style>