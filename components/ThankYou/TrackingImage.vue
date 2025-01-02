<template>
    <div>
      <img :src="imageSrc" alt="capterra_tracker" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc: "https://ct.capterra.com/capterra_tracker.gif?vid=2303870&vkey=41e06c8a66e8d4b929a001ad446feb0d",
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles if needed */
  </style>
  