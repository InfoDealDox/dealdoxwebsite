<template>
    <div class="landing-bg-container-testomonials">
        <div class="testimonial-client-container">
            <img :src="image" alt="" class="testimonial-client-image">
            <div class="client-testimonial-details">
                <span class="testimonial-client">{{ clientName }}</span>
                <small class="testimonial-designation">{{ designation }}</small>
                <small class="testimonial-company">{{ company }}</small>
            </div>

        </div>
        <div class="testimonial-content-div">
            <span class="testimonial-content">"{{ info }}"</span>

        </div>
    </div>
</template>

<script>


export default {
    name: 'Testimonials',
    props: {
        image: {
            type: String,
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        info: {
        type: String,
        required: true
    }

    },
   

}



</script>

<style>
@import url('../../assets/css/MobileLandingCSS.css');
</style>