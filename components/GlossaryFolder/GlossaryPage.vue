<template>

    <div class="blog-area pt-70">

        <div class="container">
            <div class="pagination-area">
                <div class="dealdox-encyclopedia">
                    <h1>DealDox Encyclopedia</h1>
                    <span class="dealdox-encyclopedia-content">We have compiled a comprehensive list of over 100 terms
                        and definitions that can be highly
                        valuable for sales, revenue, billing, and operations teams. </span>
                </div>
                <div>
                    <div class="nav-links nav-links-encyclopedia" style="padding-bottom: 20px;">
                        <ul v-for="(alphabet, index) in groupby" :key="alphabet + '_' + index"
                            v-if="alphabet && alphabet.data.length > 0">
                            <a :href="`#${alphabet.value}`" class="page-numbers"
                                @click.prevent="smoothScroll('#' + alphabet.value)">
                                {{ alphabet.value }}
                            </a>
                        </ul>

                    </div>
                </div>
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

        let dataObtained = this.groupby.map((data) => {
            data.data.sort((a, b) => {

                return (a.attributes.title.slice(1)).localeCompare(b.attributes.title.slice(1));

            })

            return data;
        })




        this.groupby = dataObtained;



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

<style>
.dealdox-encyclopedia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 3px 30px 3px;
}

.dealdox-encyclopedia-content {
    text-align: center;
    width: 70%;

}

@media (max-width:750px) {
    .dealdox-encyclopedia-content {
        width: 100%;
    }
}

@media (min-width:993px) {
    .nav-links-encyclopedia {
        justify-content: center;
    }
}
</style>