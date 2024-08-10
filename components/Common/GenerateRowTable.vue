<template>
    <table class="centered-table">
      <tbody role="rowgroup" class="rowgroup">
        <!-- {data.map((row, rowIndex) => ( -->
          <tr v-for="(row,rowIndex) in tableDataValue" :key={rowIndex} role="row" class="sub_row">
            <th
              role="rowheader"
              scope="row"
              class="table__cell sticky-column"
            >
              <div class="table_column_header">
                <div class="table_column_header_icon">
                  <p class="table_row_heading">{{row.heading}} </p>
                  <p class="hover_message">
                
                    <p class="hover_message" v-if="row.icon">
                      <i class="ri-error-warning-line"></i>
                       <span v-if="row.message" class="tooltip_text">{{row.message}}</span>
                    </p>
                  </p>
                </div>

                <button class="tooltip">
                  <i class="ri-file-info-line"></i>
                  <span
                    class="tooltip_text"
                    role="tooltip"
                    id='tooltip-'{{ rowIndex }}
                  >
                    <p>{{row.tooltip}}</p>
                  </span>
                </button>
              </div>
            </th>
            <!-- {row.cells.map((cell, cellIndex) => ( -->
              <td v-for="(cell,cellIndex) in row.cells" :key={cellIndex} role="cell" class="table__cell1">
                  <i class="ri-checkbox-circle" v-if="cell === 'Included'"></i>
                <!-- ) : cell === "Not included" ? ( -->
                  <div class="dash" v-else-if="cell === 'Not included'"></div> 
                  <span v-else>cell</span>
                <!-- ) : (
                  cell
                )} -->
              </td>
            <!-- ))} -->
          </tr>
        <!-- ))} -->
      </tbody>
    </table>
</template>
<script>
export default {
    name: 'GenerateRowTable',
    props: ['tableData'],
    data: function () {
        return {
            tableDataValue : this.tableData
        }
    }
}
</script>