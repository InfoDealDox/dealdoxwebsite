<template>
    <div class="our-team-max-width">
        <div>
            <div class="Meet-our-Extraordinary-container">
                <span class="Meet-our-Extraordinary">Meet our Extraordinary Individuals who bring Our Values to Life</span>
            </div>
            <div v-if="teams !== null" class="our-teams-container">
                <div v-for="team in teams.singleTeam" :key="team.id" class="indivisual-team-member">
           
                        <div class="our-team-image-container">
                            <img :src="team.image.data.attributes.url"
                                :alt="team.image.data.attributes.alternativeText" class="our-team-image">
                        </div>
                        <div class="our-team-image-content-container">
                            <span class="our-team-title">{{ team.title }}</span>
                            <span>{{ team.designation }}</span>
                            <p  class="our-team-designation">{{ team.shortDesc }}</p>
                        </div>
                        <ul class="our-team-icon-lists">
                            <li class="our-team-icon-lists-list">
                                <a :href="team.linkedin" target="_blank" class="our-team-icon-lists-li">
                                    <i class="ri-linkedin-fill  team-linkdein-icon"></i>
                                </a>
                            </li>
                        </ul>
                 
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
        const response = await axios.get('https://cms.dealdox.io/api/team?populate=deep,5')
        const { data: { attributes } } = response.data
        this.teams = attributes
    },
}
</script>


<style>
@import url('../../assets/css/pages-css/OurTeams.css');
</style>