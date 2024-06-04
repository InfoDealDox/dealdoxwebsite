<template>
    <div class="feedback-area bg-white pt-70">
        <div class="container">
            <div class="feedback-tabs col-lg-12 col-md-6">
                <div class="tab-content">
                    <div class="tabs__container">
                        <div class="tabs__list" ref='tabsList'>
                            <div class="tabs__list-tab" v-for="customerreview in customerreviews"
                                v-bind:class="{ 'active': activeTab == customerreview.id }" :key="customerreview.id">
                                <div class="features-content">
                                    <h1>What does users say about <span class="sub-title">DealDox</span></h1>
                                    <br>
                                    <br>
                                    <carousel :autoplay="8000" :settings='settings' :loop="true"
                                        :perPageCustom="[[0, 1], [576, 1], [768, 1], [1200, 1], [1400, 1]]"
                                        :paginationEnabled="false" :breakpoints='breakpoints'>
                                        <slide v-for="customerreview in customerreviews.singleFeedbacks"
                                            :key="customerreview.id">
                                            <h6>{{ customerreview.quite }}</h6>
                                            <p>{{ customerreview.shortDec }}</p>
                                            <h6>
                                                <span>{{ customerreview.name }}</span>
                                                {{ customerreview.designation }}
                                            </h6>
                                            <div class="tabs">
                                                <ul class="tabs__header">
                                                    <li class="tabs__header-item">
                                                        <img :src="customerreview.media.data.attributes.url" alt="image">
                                                    </li>
                                                </ul>
                                            </div>
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
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
    name: 'CustomerReview',
    data() {
        return {
            customerreviews: null,
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/customerreview?populate=singleFeedbacks.media')
        const { data: { attributes } } = response.data;
        this.customerreviews = attributes
    },
}
</script>