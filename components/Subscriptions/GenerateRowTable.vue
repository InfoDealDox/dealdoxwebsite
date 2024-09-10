<template>
  <table class="centered-table">
    <tbody role="rowgroup" class="rowgroup">
      <tr class="tbl-new-row">
        <td class="tbl-sticky">Features</td>
        <!-- <td
          class="tbl-bl"
          v-for="(editionRow, index) in editionsRow"
          :key="index"
        >
          {{ editionRow.name }}<br />{{ editionRow.price }}
        </td> -->
        <!-- <td class="tbl-bl">PAY-AS-YOU-GO <br />₹0</td> -->
        <td class="tbl-bl">STANDARD<br />₹799</td>
        <td class="tbl-bl">PREMIUM<br />₹1399</td>
        <td class="tbl-bl">ENTERPRISE<br />Custom Pricing</td>
      </tr>

      <tr v-for="(row, rowIndex) in passTableData" :key="rowIndex" role="row" class="sub_row">
        <th role="rowheader" scope="row" class="table__cell sticky-column">
          <div class="table_column_header">
            <div class="table_column_header_icon">
              <p class="table_row_heading">{{ row.heading }}</p>
              <p class="hover_message" v-if="row.icon">
                <i class="ri-error-warning-line"></i>
                <span v-if="row.message" class="tooltip_text">{{
                  row.message
                }}</span>
              </p>
            </div>
            <button class="tooltip">
              <i class="ri-file-info-line"></i>
              <span class="tooltip_text" role="tooltip" :id="'tooltip-' + rowIndex">
                <p>{{ row.tooltip }}</p>
              </span>
            </button>
          </div>
        </th>
        <td v-for="(cell, cellIndex) in row.cells" :key="cellIndex" role="cell" class="table__cell1">
          <i class="ri-checkbox-circle-fill correct-button2" v-if="cell === 'Included'"></i>
          <div class="dash" v-else-if="cell === 'Not included'"></div>
          <span v-else>{{ cell }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "GenerateRowTable",
  props: {
    passTableData: {
      type: Array,
      required: true,
    },
    editionsRow: {
      type: Array,
      required: true,
    },
  },
};
</script>
