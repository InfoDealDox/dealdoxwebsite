<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-4 col-md-6">
                    <div class="section-title">
                        <h2>Latest Blogs</h2>
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
            <div class="row justify-content-center" v-if="blogs !== []">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="blog.id">
                    <div class="single-blog-post bg-white">
                        <div class="image">
                            <router-link :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </router-link>
                            <!-- <router-link to="/blog-grid" class="tag">{{ blog.attributes.tag }}</router-link> -->
                        </div>
                        <div class="content">
                            <h3>
                                <router-link :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </router-link>
                            </h3>
                            <p>{{ blog.attributes.shortDesc }}</p>
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> {{ blog.attributes.date }}</li>
                                <!-- <li><i class="ri-time-line"></i> {{ blog.attributes.shortDesc }}</li> -->
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <!-- <div class="nav-links">
                            <span class="page-numbers current">1</span>
                            <router-link to="/blog-grid" class="page-numbers">2</router-link>
                            <router-link to="/blog-grid" class="page-numbers">3</router-link>
                            <router-link to="/blog-grid" class="next page-numbers" title="Next Page"><i
                                    class="ri-arrow-right-line"></i></router-link>
                        </div> -->
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="itemList"
                            align="center"></b-pagination>
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
        const response = await axios.get('https://cms.dealdox.io/api/blogs?populate=*')
        this.blogs = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>