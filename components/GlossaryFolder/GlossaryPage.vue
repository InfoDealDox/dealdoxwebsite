<template>
    <div class="blog-area pt-70">
        <div class="container">
            <div class="pagination-area">
                <div class="nav-links" style="justify-content: center;">
                    <!-- <ul v-for="category in categories" :key="category.id">
                        <li >
                        <NuxtLink :to="`/glossary-category-details/${category.attributes.slug}`" class="page-numbers">{{
                            category.attributes.name }}</NuxtLink>
                        </li>
                    </ul> -->
                    <!-- <ul v-if="glossaries !== null && groupby.length > 0">
                        <li v-for="(alphabet, index) in groupby" :key="alphabet + '_' + index">
                            <a v-if="alphabet && alphabet.data.length > 0" :href="`${alphabet}_${index}`">
                                {{ alphabet.value }}
                            </a>
                        </li>
                    </ul> -->
                    <ul v-for="(alphabet, index) in groupby" :key="alphabet + '_' + index"
                        v-if="alphabet && alphabet.data.length > 0">
                        <a :href="`#${alphabet.value}`" class="page-numbers"
                            @click.prevent="smoothScroll('#' + alphabet.value)">
                            {{ alphabet.value }}
                        </a>
                    </ul>

                </div>
            </div>
            <div class="section-title">
                <!-- <h2>Glossary</h2> -->
            </div>
            <div class="row justify-content-center" v-if="glossaries !== null">
                <div class="col-lg-12 col-md-12" v-for="glossary in groupby" :key="glossary.value">
                    <h3 class="glossary-category ml-5" v-if="glossary.data.length > 0" :id="glossary.value"> {{
                        glossary.value }} </h3>
                    <div class="single-blog-post bg-FAFAFA pt-1" v-if="glossary.data.length > 0">
                        <div class="row contents">
                            <div class="col-sm-3" v-for="glossData in glossary.data" :key="glossData.id">
                                <NuxtLink class="text-decoration-underline"
                                    :to="'/glossary/' + glossData.attributes.slug">
                                    {{ glossData.attributes.title }}
                                </NuxtLink>
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
        // console.log(this.groupby);
    },
    methods: {
        smoothScroll(target) {
            const element = document.querySelector(target);
            if (element) {
                const isMobile = window.innerWidth <= 768;
                const offset = isMobile ? 63 : 80; // Set your header height
                const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scroll
                });
            }
        }
    }
}
</script>