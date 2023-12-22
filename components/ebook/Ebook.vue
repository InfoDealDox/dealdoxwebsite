<template>
    <div class="blog-area ptb-100 bg-LatestBlog">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-12 col-md-6">
                    <div class="section-title">
                        <h1>Ebook</h1>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" v-if="ebooks !== []">
                <div class="col-lg-4 col-md-6" v-for="ebook in ebooks.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="ebook.id">
                    <div class="single-blog-post bg-F9F9FD">
                        <div class="image">
                            <NuxtLink :to="'/ebook-details/' + ebook.attributes.slug" class="d-block">
                                <img :src="ebook.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/ebook-details/' + ebook.attributes.slug">
                                    {{ ebook.attributes.name }}
                                </NuxtLink>
                            </h3>
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> {{ ebook.attributes.date }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
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
    name: 'Ebook',
    data() {
        return {
            ebooks: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/ebooks?populate=*')
        this.ebooks = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>