<template>
    <table class="compare-table-component">
        <thead class="compare-table-head">
            <tr class="compare-th-header">
                <th class="compare-tbody-left" id="background-custom" style="border-radius:10px 0px 0px 0px">{{ headerOne }}</th>
                <th class="compare-tbody-right" id="background-custom" style="border-radius:0px 10px 0px 0px">{{ headerTwo }}</th>
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
    name: "FirstTable",
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
