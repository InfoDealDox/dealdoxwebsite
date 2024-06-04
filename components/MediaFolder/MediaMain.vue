<template>
    <div class="team-area pt-70 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-12 col-md-6">
                    <div class="section-title">
                        <h1>Media</h1>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" v-if="teams !== null">
                <div class="col-lg-4 col-md-6" v-for="team in teams.singleMedia.slice(
                (currentPage - 1) * perPage,
                currentPage * perPage,
            )" :key="team.id">
                    <div class="single-blog-post bg-FFFFFF">
                        <div class="image">
                            <a :href="team.link" target="_blank">
                                <img :src="team.image.data.attributes.url" alt="Media">
                            </a>
                        </div>
                        <div class="content">
                            <h3>
                                <a :href="team.link" target="_blank">
                                    {{ team.title }}
                                </a>
                            </h3>
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> {{ team.date }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
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
    name: 'OurTeam',
    data() {
        return {
            teams: null,
            rows: 0,
            currentPage: 1,
            perPage: 1,
        }
    },
    created: async function () {
        const response = await axios.get('http://localhost:1338/api/single-media?populate=deep,5')
        const { data: { attributes } } = response.data
        this.teams = attributes
        this.rows = this.teams?.length;
    },
}
</script>