<template>
    <div>
        <Navbar class="navbar-style-two" />
        <ComingSoon />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import ComingSoon from '../components/Common/ComingSoon'
import DealDoxFooter from '../layouts/DealDoxFooter';

export default {
    name: 'ComingSoonPage',
    components: {
        Navbar,
        ComingSoon,
        DealDoxFooter,
    }
}
</script>