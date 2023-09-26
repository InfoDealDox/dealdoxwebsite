<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">

            <div class="section-title">
                <h2>Glossary Featured Categories</h2>
            </div>

            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="glossary in details[0].attributes?.glossaries?.data"
                    :key="glossary.id">
                    <div class="single-blog-post bg-white">
                        <div class="image">
                            <NuxtLink :to="'/glossary-details/' + glossary.attributes.slug" class="d-block">
                                <img :src="glossary?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </NuxtLink>
                            <!-- <NuxtLink to="/glossary-details/" class="tag">{{ glossary?.attributes?.tag }}</NuxtLink> -->
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/glossary-details/' + glossary.attributes.slug">
                                    {{ glossary.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ glossary.attributes.shortDesc }}</p>
                            <ul class="meta">
                                <!-- <li><i class="ri-time-line"></i> {{ glossary.attributes.date }}</li> -->
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
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            glossarycategory: []
        }
    },
}
</script>