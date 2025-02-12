<template>
    <div>
        <SignUp />
    </div>
</template>

<script>
import SignUp from '../components/Authentication/SignUp'

export default {
    name: 'SignUpPage',
    components: {
        SignUp,
    },
    head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ]
    };
  }

}
</script>