<template>
    <table>
        <thead>
            <tr class="compare-th-header">
                <th class="compare-tbody-left">{{ headerOne }}</th>
                <th class="compare-tbody-right">{{ headerTwo }}</th>
            </tr>
        </thead>
        <tbody class="tbody-container-body">
            <tr v-for="(data, index) in firstColumn" :key="index" class="compare-td-header">
                <td class="compare-tbody-left" >{{ data }}</td>
                <td class="compare-tbody-right">{{ secondColumn[index] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "SecondTable",
    props: {
        headerOne: {
            type: String,
            required: true
        },
        headerTwo: {
            type: String,
            required: true
        },
        firstColumn: {
            type: Array,
            required: true
        },
        secondColumn: {
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>
@import url(../../assets/css/pages-css/Comparision.css);
</style>
