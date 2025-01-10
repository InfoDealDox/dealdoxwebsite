<template>
    <div class="landing-card-component">
        
      <img :src="image" alt="" class="landing-card-img" />
      <span class="landing-card-content">{{ textContent }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'B2BCard',
    
    props: {
      textContent: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
  }
  </script>

</script>

<style>

</style>