<template>
    <div>
        <div @click="scrollToTop()" :class="['back-to-top-btn', { 'go-top': isTop }]">

            <i class="ri-arrow-up-s-line"></i>
        </div>
        <div class="chatWith_Sandya">
            <a href="https://www.linkedin.com/in/sandhyadealdox/"><button> 💬Chat with Sandhya</button></a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GoTop',
    data() {
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    },
    watch: {
        '$route.path': function (newPath, oldPath) {
            document.body.removeAttribute('style')
        }
    }
}
</script>