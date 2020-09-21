<template>
  <el-table :data="data" ref="multipleTable" style="width: 100%" v-bind="$attrs" v-on="$listeners">
    <template v-for="item in columns">
      <el-table-column
        v-if="item.slot || item.type == 'expand'"
        :key="item.label"
        :prop="item.prop"
        :type="item.type"
        :label="item.label"
        :fixed="item.fixed"
        :align="item.align || align"
        :header-align="item.headerAlign"
        :column-key="item.columnKey"
        :sortable="item.sortable"
        :width="item.width || ''"
        :resizable="item.resizable"
      >
        <template slot-scope="scope">
          <slot :name="item.prop || item.type" :items="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="item.label"
        :prop="item.prop"
        :type="item.type"
        :label="item.label"
        :fixed="item.fixed"
        :align="item.align || align"
        :header-align="item.headerAlign"
        :column-key="item.columnKey"
        :sortable="item.sortable"
        :width="item.width || ''"
        :resizable="item.resizable"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    data: { type: Array, required: true, default: () => [] },
    columns: { type: Array, required: true, default: () => [] },
    // stripe: { tyep: Boolean, default: false },
    // border: { tyep: Boolean, default: false },
    // size: { type: String, default: "mini" },
    // defaultSort: { type: Object, default: () => {} },
    selectionChange: Function,
    align: { type: String, default: "left" },
    isAll: { type: Boolean, default: false },
    onRowClick: Function,
  },
  data() {
    return {
      listData: [], //当前的table的数据
      hasSelectList: [], //已经选择的id组成的数组
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.selectionChange && this.selectionChange(val);
    },
    rowClick(row) {
      this.onRowClick && this.onRowClick(row);
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.isAll) {
        this.data.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row, true);
        });
      }
    });
  },
  watch: {
    data: {
      handler() {
        this.$nextTick(() => {
          if (this.isAll) {
            this.data.forEach((row) => {
              this.$refs.multipleTable.toggleRowSelection(row, true);
            });
          }
        });
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style></style>
