<template>
      <div class="border_table">
      <div class="border_table2">
        <div>
          <div class="topfeature" @click=toggleDropTable>
            <button class="buttontopfeature">
              <span class="top">
                <span class="plusminus">{{tableShowValue ? "-" : "+"}}</span>
              </span>
            </button>
            <span class="top">{{topTextValue}}</span>
          </div>
          <template v-if="tableShowValue && headersVisibleValue && topTextValue == 'Configure Price Quote'" >
            <div class="headers-container">
                <!-- {{ sectiontableData.map((section, index) => ( -->
                  <div  v-for="(section,index) in sectiontableDataValue" :key="index">
                    <div class="header-item">
                      <span
                        class="top"
                        @click=handleHeaderClick(section.header)
                      >
                        {{section.header}}
                      </span>

                      <button
                        style="background-color: '#ececec'"
                        class="buttontopfeature"
                        @click=handleHeaderClick(section.header)
                      >
                        <span
                          style="font-weight:bold"
                          class="plusminus"
                        >
                          {{activeHeader === section.header ? "-" : "+"}}
                        </span>
                      </button>
                    </div>
                    {{ activeHeader === section.header }}
                      <div class="table-container-sub">
                        <GenerateRowTable :tableData="section.rows"/>
                      </div>
                  </div>
            </div>
          </template>
          <template v-if="tableShowValue && headersVisibleValue && topTextValue !== 'Configure Price Quote'">
            <div class="table-container-sub">
            <GenerateRowTable :tableData="tableDataValue"/>
            </div>  
            </template>
       
        </div>
      </div>
    </div>
</template>
<script>
import GenerateRowTable from './GenerateRowTable.vue';

export default {
    name: 'FeaturedData',
    components:{
      GenerateRowTable
    },
    props: ['topText','editions','tableData','initialShow','onDataSend','hideCommonFeatures','sectiontableData'],
    // :topText="'Automated Sales Proposal'"
    //           :editions={editions}
    //           :tableData={tableData3}
    //           :initialShow={isEnabled}
    //           :onDataSend={handleDataFromChild}
    //           :hideCommonFeatures={hideCommonFeatures}
    data: function () {
        return {
            topTextValue: this.topText,
            editionsValue: this.editions,
            tableDataValue: this.tableData,
            initialShowValue: this.initialShow,
            onDataSendValue: this.onDataSend,
            hideCommonFeaturesValue: this.hideCommonFeatures,
            tableShowValue : this.initialShow,
            headersVisibleValue: this.initialShow,
            sectiontableDataValue : this.sectiontableData,
            activeHeader:null,
            filteredTableDataValue:this.filterTableData()
        }
    },
    methods :{
        filterTableData: function()
        {
            if (this.topTextValue === "Configure Price Quote") {
            return [];
            }
            if (!this.hideCommonFeaturesValue) {
            return this.tableDataValue;
            }
            const filteredData = [];
            for (let i = 0; i < this.tableDataValue.length; i++) {
            let isUnique = true;
            for (let j = 0; j < this.tableDataValue.length; j++) {
                if (i !== j && areRowsIdentical(this.tableDataValue[i], this.tableDataValue[j])) {
                isUnique = false;
                break;
                }
            }
            if (isUnique) {
                filteredData.push(this.tableDataValue[i]);
            }
            }
            return filteredData;
        },
        toggleDropTable :function(){
          console.log("Clicked!!!");
        this.onDataSendValue = !this.tableShowValue;
        this.tableShowValue = !this.tableShowValue;

        if (this.topTextValue === "Configure Price Quote") {
          this.headersVisibleValue = !this.tableShowValue;
        }
      },
    }

}


</script>