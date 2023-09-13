<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="pagination-area">
                <div class="nav-links">
                    <ul v-for="category in categories" :key="category.id">
                        <!-- <li > -->
                        <router-link :to="`/glossary-category-details/${category.attributes.slug}`" class="page-numbers">{{
                            category.attributes.name }}</router-link>
                        <!-- </li> -->
                    </ul>
                </div>
            </div>
            <div class="section-title">
                <!-- <h2>Glossary</h2> -->
            </div>
            <div class="row justify-content-center" v-if="glossaries !== []">
                <div class="col-lg-12 col-md-12" v-for="glossary in groupby" :key="glossary.value">
                    <h3 class="glossary-category ml-5"> {{ glossary.value }} </h3>
                    <div class="single-blog-post bg-FAFAFA pt-1">
                        <div class="row contents">
                            <div class="col-sm-3" v-for="glossData in glossary.data" :key="glossData.id">
                                <router-link class="text-decoration-underline"
                                    :to="'/glossary-details/' + glossData.attributes.slug">
                                    {{ glossData.attributes.title }}
                                </router-link>
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
            categories: [],
            glossaries: [],
            groupby: {}
        }
    },
    created: async function () {
        const response1 = await axios.get('https://cms.dealdox.io/api/glossary-categories');
        const sortCat = response1?.data?.data.sort((a, b) => a.id - b.id);
        this.categories = sortCat;
        const response = await axios.get('https://cms.dealdox.io/api/glossaries?populate=*')
        this.glossaries = response.data.data;
        let groupby = {};
        this.categories.map(x => {
            const r = this.glossaries.filter(v =>
                v.attributes.glossary_categories.data.map(e => e.id).includes(x.id)
            )
            groupby = { ...groupby, [x.attributes.name]: r };
        })
        const dd = []
        Object.keys(groupby).map(key => {
            dd.push({ value: key, data: groupby[key] })
        });
        this.groupby = dd;
        console.log(this.groupby, 'groupby');
    },
}
</script>