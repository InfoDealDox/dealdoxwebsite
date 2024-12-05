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

        <!-- Render headers and rows for Configure Price Quote -->
        <template v-if="
          sectiontableDataValue &&
          headersVisibleValue &&
          topTextValue === 'Configure Price Quote'
        ">
          <div class="headers-container">
            <div v-for="(section, index) in sectiontableDataValue" :key="index" @click="toggleHeader(section.header)">
              <div class="header-item">
                <span class="top">{{ section.header }}</span>
                <button style="background-color: #ececec" class="buttontopfeature">
                  <span style="font-weight: bold" class="plusminus">
                    {{ activeHeaders.includes(section.header) ? "-" : "+" }}
                  </span>
                </button>
              </div>
              <div class="table-container-sub" v-if="activeHeaders.includes(section.header)">
                <GenerateRowTable :passTableData="section.rows" />
              </div>
            </div>
          </div>
        </template>

        <!-- Render filtered table data for non Configure Price Quote cases -->
        <template v-if="tableShowValue && topTextValue !== 'Configure Price Quote'">
          <div class="table-container-sub">
            <GenerateRowTable :passTableData="filteredTableData" :editionsRow="editionsValue" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import GenerateRowTable from "./GenerateRowTable.vue";

export default {
  name: "FeaturedData",
  components: {
    GenerateRowTable,
  },
  props: {
    topText: String,
    editions: Array,
    tableData: Array,
    initialShow: Boolean,
    hideCommonFeatures: Boolean,
    sectiontableData: Array,
  },
  data() {
    return {
      topTextValue: this.topText,
      editionsValue: this.editions,
      tableDataValue: this.tableData,
      tableShowValue: this.initialShow,
      headersVisibleValue: this.initialShow,
      sectiontableDataValue: this.sectiontableData,
      activeHeaders: this.initialShow ? this.initializeAllHeaders() : [], // Initialize headers as active if initialShow is true
    };
  },
  computed: {
    filteredTableData() {
      return this.filterTableData();
    },
  },
  methods: {
    toggleDropTable() {
      this.tableShowValue = !this.tableShowValue;

      if (this.tableShowValue && this.topTextValue === "Configure Price Quote") {
        this.headersVisibleValue = true;
        this.activeHeaders = this.initializeAllHeaders(); // Open all headers
      } else {
        this.headersVisibleValue = false;
        this.activeHeaders = []; // Close all headers
      }
    },
    toggleHeader(header) {
      if (this.activeHeaders.includes(header)) {
        this.activeHeaders = this.activeHeaders.filter((h) => h !== header);
      } else {
        this.activeHeaders.push(header);
      }
    },
    initializeAllHeaders() {
      return this.sectiontableDataValue ? this.sectiontableDataValue.map((section) => section.header) : [];
    },
    filterTableData() {
      if (this.topTextValue === "Configure Price Quote") {
        return [];
      }

      if (!this.hideCommonFeatures) {
        return this.tableDataValue;
      }

      const uniqueRows = new Set();
      const filteredData = [];

      for (const row of this.tableDataValue) {
        const normalizedRow = row.cells
          .map((cell) => this.normalizeCellValue(cell))
          .join("|");

        if (!uniqueRows.has(normalizedRow)) {
          uniqueRows.add(normalizedRow);
          filteredData.push(row);
        }
      }

      return filteredData;
    },
    normalizeCellValue(cell) {
      const normalizedValues = {
        Included: "Included",
        "Not included": "Not included",
        "-": "-",
      };
      return normalizedValues[cell] || cell;
    },
  },
  watch: {
    initialShow(newValue) {
      this.tableShowValue = newValue;
      this.headersVisibleValue = newValue;
      this.activeHeaders = newValue && this.topTextValue === "Configure Price Quote" 
        ? this.initializeAllHeaders()
        : [];
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
