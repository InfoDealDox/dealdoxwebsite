<template>
    <div class="blog-area pt-70 bg-FAFAFA">
        <div class="container">
            <div class="section-title">
                <span class="sub-title"></span>
                <h1>Our Latest Blogs</h1>
            </div>
            <div class="row justify-content-center" v-if="blogs !== []">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(0, 3)" :key="blog.id">
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
            blogs: []
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/blogs?populate=*')
        this.blogs = response.data.data
    },
}
</script>