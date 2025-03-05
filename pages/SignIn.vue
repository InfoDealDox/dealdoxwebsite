<template>
    <div>
        <SignIn />
    </div>
</template>

<script>
import SignIn from '../components/Authentication/SignIn'

export default {
    name: 'SignInPage',
    components: {
        SignIn,
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