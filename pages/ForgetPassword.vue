<template>
    <div>
        <ForgetPassword />
    </div>
</template>

<script>
import ForgetPassword from '../components/Authentication/ForgetPassword'

export default {
    name: 'ForgetPasswordPage',
    components: {
        ForgetPassword,
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