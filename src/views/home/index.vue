<template>
  <div class="bg-white p-2">
    <form-group
      :inline="true"
      :model="model"
      :form="form"
      @on-click="onClick"
    ></form-group>
    <table-list
      :data="tableData"
      :columns="columns"
      align="center"
      :border="true"
      :stripe="true"
      @selection-change="change"
      @row-click="row"
    >
      <template #expand="{ items }">
        <table-list
          :data="tableData"
          :columns="columns"
          align="center"
          :border="true"
          :stripe="true"
          @selection-change="change"
          @row-click="row"
        >
          {{ items }}
        </table-list>
      </template>
      <template #op="{ items }">
        <el-button type="primary" @click="print(items)">删除</el-button>
      </template>
    </table-list>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    <el-dialog title="表单" :visible.sync="dialogVisible" width="25%">
      <form-group
        label-width="80px"
        :model="model"
        :form="form"
        @on-click="onClick"
      ></form-group>
    </el-dialog>
  </div>
</template>

<script>
import TableList from "@/components/tableList";
import FormGroup from "@/components/FormGroup";
export default {
  components: {
    TableList,
    FormGroup,
  },
  data() {
    return {
      dialogVisible: false,
      model: {
        key: 12,
        select: 2,
        check: [],
      },
      form: [
        {
          node: "input",
          prop: "key",
          label: "区块",
          placeholder: "请输入",
          rules: [{ required: true, message: "账号不能为空" }],
        },
        {
          node: "input",
          prop: "key1",
          label: "label",
          placeholder: "请输入",
          rules: [{ required: true, message: "账号不能为空" }],
        },
        {
          node: "input",
          prop: "key2",
          label: "label",
          placeholder: "请输入",
          rules: [{ required: true, message: "账号不能为空" }],
        },
        {
          node: "radio",
          prop: "s",
          options: [
            {
              label: "1",
              value: 1,
            },
          ],
        },
        {
          node: "select",
          prop: "select",
          options: [
            {
              label: "选择1",
              value: 1,
            },
            {
              label: "选择2",
              value: 2,
            },
            {
              label: "选择3",
              value: 3,
            },
          ],
        },

        {
          node: "switch",
          event: "switch",
        },
        {
          node: "check",
          prop: "check",
          options: [
            {
              value: "选项1",
              label: 1,
            },
            {
              value: "选项2",
              label: 2,
            },
            {
              value: "选项3",
              label: 3,
            },
          ],
        },
        {
          node: "buttons",
          buttons: [
            {
              type: "primary",
              label: "搜索",
              event: "search",
            },
            {
              type: "info",
              label: "重置",
              event: "reset",
              nativeType: "reset",
            },
          ],
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 号",
          zip: 200333,
        },
      ],
      columns: [
        {
          type: "selection",
        },
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "姓名",
          prop: "name",
          width: "200",
        },
        {
          label: "省份",
          prop: "province",
        },
        {
          label: "城市",
          prop: "city",
        },
        {
          label: "详细地址",
          prop: "address",
          align: "center",
        },
        {
          label: "邮编",
          prop: "zip",
        },
        {
          label: "操作",
          prop: "op",
          enableSlot: true,
        },
      ],
    };
  },
  methods: {
    onClick(e, data) {
      console.log(e, data);
    },
    print(item) {
      console.log(item);
    },
    change(e) {
      console.log(e);
    },
    row(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
