<template>
    <ul class="accordion" id="accordion-customize">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'Accordion',
    props: {},
    data() {
        return {
            Accordion: {
                count: 0,
                active: null
            }
        };
    },
    provide() {
        return { Accordion: this.Accordion };
    }
}
</script>

<style>
#accordion-customize {
    padding-left: 0px;
}
</style>