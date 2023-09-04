<template>
    <div class="team-area pt-70 bg-FAFAFA">
        <div class="container">
            <div class="partner-title">
                <h1>Meet our Extraordinary Individuals who bring Our Values to Life</h1>
            </div>
            <div class="row justify-content-center" v-if="teams !== null">
                <div class="col-lg-3 col-md-6 col-sm-6" v-for="team in teams.singleTeam" :key="team.id">
                    <div class="single-team-member bg-white">
                        <div class="image">
                            <img :src="team.image.data.attributes.url" alt="teams">
                        </div>
                        <div class="content">
                            <h3>{{ team.title }}</h3>
                            <span>{{ team.designation }}</span>
                            <p>{{ team.shortDesc }}</p>
                        </div>
                        <ul class="social-links bg-white">
                            <li>
                                <a :href="team.linkedin" target="_blank">
                                    <i class="ri-linkedin-fill"></i>
                                </a>
                            </li>
                        </ul>
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
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/team?populate=deep,5')
        const { data: { attributes } } = response.data
        this.teams = attributes
    },
}
</script>