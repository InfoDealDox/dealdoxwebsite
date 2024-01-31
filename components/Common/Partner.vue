<template>
  <div class="partner-area pt-70">
    <div class="container"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Partner",
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    partners: null,
  }),
  created: async function () {
    const response = await axios.get(
      "https://cms.dealdox.io/api/partner?populate=partnerSlides.image"
    );
    const {
      data: { attributes },
    } = response.data;
    this.partners = attributes;
  },
};
</script>
