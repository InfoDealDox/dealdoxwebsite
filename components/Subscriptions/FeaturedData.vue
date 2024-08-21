<template>
  <div class="border_table">
    <div class="border_table2">
      <div>
        <div class="topfeature" @click="toggleDropTable">
          <button class="buttontopfeature">
            <span class="top">
              <span class="plusminus">{{ tableShowValue ? "-" : "+" }}</span>
            </span>
          </button>
          <span class="top">{{ topTextValue }}</span>
        </div>

        <template v-if="sectiontableDataValue && headersVisibleValue && topTextValue === 'Configure Price Quote'">
          <div class="headers-container">
            <div v-for="(section, index) in sectiontableDataValue" :key="index">
              <div class="header-item" @click="toggleHeader(section.header)" style="cursor: pointer">
                <span class="top">{{ section.header }}</span>
                <button style="background-color: #ececec" class="buttontopfeature">
                  <span style="font-weight:bold" class="plusminus">
                    {{ activeHeader === section.header ? "-" : "+" }}
                  </span>
                </button>
              </div>
              <div class="table-container-sub" v-if="activeHeader === section.header">
                <GenerateRowTable :passTableData="section.rows" />
              </div>
            </div>
          </div>
        </template>

        <template v-if="tableShowValue && topTextValue !== 'Configure Price Quote'">
          <div class="table-container-sub">
            <GenerateRowTable :passTableData="filteredTableData" />
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
  components: {
    GenerateRowTable
  },
  props: {
    topText: String,
    editions: Array,
    tableData: Array,
    initialShow: Boolean,
    hideCommonFeatures: Boolean,
    sectiontableData: Array
  },
  data() {
    return {
      topTextValue: this.topText,
      editionsValue: this.editions,
      tableDataValue: this.tableData,
      tableShowValue: this.initialShow,
      headersVisibleValue: this.initialShow,
      sectiontableDataValue: this.sectiontableData,
      activeHeader: null,
    };
  },
  computed: {
    filteredTableData() {
      return this.filterTableData();
    }
  },
  methods: {
    toggleDropTable() {
      this.tableShowValue = !this.tableShowValue;
      if (this.topTextValue === "Configure Price Quote") {
        this.headersVisibleValue = this.tableShowValue;
      }
    },
    toggleHeader(header) {
      this.activeHeader = this.activeHeader === header ? null : header; // Toggle active header
    },
    areRowsIdentical(row1, row2) {
      if (row1.cells.length !== row2.cells.length) {
        return false; // Different number of cells
      }

      return row1.cells.every((cell, index) => {
        return this.normalizeCellValue(cell) === this.normalizeCellValue(row2.cells[index]);
      });
    },
    filterTableData() {
      if (this.topTextValue === "Configure Price Quote") {
        return []; // Return empty if top text is "Configure Price Quote"
      }

      if (!this.hideCommonFeatures) {
        return this.tableDataValue; // Return full data if common features are not hidden
      }

      const uniqueRows = new Set();
      const filteredData = [];

      for (const row of this.tableDataValue) {
        const normalizedRow = row.cells.map(cell => this.normalizeCellValue(cell)).join('|');

        if (!uniqueRows.has(normalizedRow)) {
          uniqueRows.add(normalizedRow);
          filteredData.push(row);
        }
      }

      return filteredData; // Return filtered data
    },
    normalizeCellValue(cell) {
      const normalizedValues = {
        'Included': 'Included',
        'Not included': 'Not included',
        '-': '-',
      };
      return normalizedValues[cell] || cell; // Return normalized value or original cell
    },
  },
  watch: {
    initialShow(newValue) {
      this.tableShowValue = newValue; // Sync initialShow prop with tableShowValue
    },
  }
};
</script>