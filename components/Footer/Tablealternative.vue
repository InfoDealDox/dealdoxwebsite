<template>
    <table v-if="comparisionDatas.length >0" class="alternatives-table" style="position: relative;">
        <thead class="alternatives-thead">
            <tr class="alter-head-row">
                <th scope="col" class="alternatives-cols alternatives-data-cols-first-column">Features</th>
                <th scope="col" class="alternatives-cols">{{ company1 }}</th>
                <th scope="col" class="alternatives-cols">{{ company2 }}</th>
            </tr>
        </thead>
        <tbody>
          
            <tr v-for="(item, index) in comparisionDatas" :key="index" class="alter-head-row">
                <td class="alternatives-data-cols alternatives-data-cols-first-column">{{ item.Feature }}</td>

                <!-- Dynamically binding the company name 1 -->
                <td class="alternatives-data-cols">
                    <i v-if="item[companyName1] === 'Yes'" class="bi bi-check-circle-fill"></i>
                    <i v-else-if="item[companyName1] === 'No'" class="bi bi-x-circle-fill"></i>
                    <span v-else>{{ item[companyName1] }}</span>
                </td>

                <!-- Dynamically binding the company name 2 (DealDox) -->
                <td class="alternatives-data-cols">
                    <i v-if="item[companyName2] === 'Yes'" class="bi bi-check-circle-fill"></i>
                    <i v-else-if="item[companyName2] === 'No'" class="bi bi-x-circle-fill"></i>
                    <span v-else>{{ item[companyName2] }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>


<script>
export default {
    name: "Tablealternative",
    props: {
        comparisionDatas: {
            type: Array,
            required: true
        },
        company1: {
            type: String,
            required: true
        },
        company2: {
            type: String,
            required: true
        },
        companyName1:{
            type:String,
            required:true
        },
        companyName2:{
            type:String,
            required:true
        },

    }
}
</script>


<style>
.alternatives-thead{
    position: sticky;
    top: 0px;
}



@import '../../assets/css/pages-css/alternatives.css'
</style>
