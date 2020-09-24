<template>
  <el-table
    :data="data"
    ref="multipleTable"
    style="width: 100%"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="item in columns">
      <el-table-column
        v-bind="[item]"
        :key="item.label"
        v-if="item.enableSlot || item.type == 'expand'"
      >
        <template slot-scope="scope">
          <slot :name="item.prop || item.type" :items="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        v-bind="[item]"
        :key="item.label"
        v-else
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    data: { type: Array, required: true, default: () => [] },
    columns: { type: Array, required: true, default: () => [] },
    selectionChange: Function,
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
