# element 二次组件封装

## 登录组件

```vue
<template>
  <div class="login-container" :style="loginContainerStyle">
    <login-form
      :boxStyle="style"
      background="#FFF"
      left="40%"
      top="35%"
      :width="300"
      :loading="loading"
      :model="model"
      @login="login"
    ></login-form>
  </div>
</template>

<script>
import loginForm from "@/components/loginForm";

export default {
  name: "Spacewaves",
  components: {
    loginForm,
  },
  data() {
    return {
      style: {
        padding: "20px",
      },
      loading: false,
      model: {
        // labelWidth: 80,
        account: {
          // label: "账号",
          icon: "el-icon-user",
          rules: [{ required: true, message: "账号不能为空" }],
        },
        password: {
          // label: "密码",
          icon: "el-icon-lock",
          rules: [{ required: true, message: "密码不能为空" }],
        },
      },
    };
  },
  methods: {
    login(form) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.replace("/");
      }, 2000);
      console.log(form);
    },
  },
};
</script>
```

### Attributes

|    参数    | 说明                  |     类型      |   可选值   | 默认  |
| :--------: | :-------------------- | :-----------: | :--------: | :---: |
|   model    | 账号和密码的配置      |    Object     |     -      |   -   |
|   title    | 组件标题              |    String     |     -      | 登录  |
| titleColor | 标题颜色              |    String     |     -      | #333  |
| background | 背景设置              |    String     |     -      |   -   |
|    left    | 组件左边距离          |    String     |     -      |   -   |
|   right    | 组件右边距离          |    String     |     -      |   -   |
|    top     | 组件顶部距离          |    String     |     -      |   -   |
|   bottom   | 组件底部距离          |    String     |     -      |   -   |
|   width    | 组件宽度              | String/Number |    500     |   -   |
|   height   | 组件高度              | String/Number |     -      |   -   |
|  loading   | 登录按钮 loading 状态 |    Boolean    | false/true | false |
|   radius   | 圆角                  | String/Number |     -      |   8   |
|  boxStyle  | 自定义组件外部样式    |    Object     |     -      |   -   |
|  btnStyle  | 自定义登录按钮样式    |    Object     |     -      |   -   |

### model Attributes

|   参数    | 说明     |  类型  | 可选值 | 默认 |
| :-------: | :------- | :----: | :----: | :--: |
| labelWith | 标签宽度 | Number |   -    |  -   |
|  account  | 账号配置 | Object |   -    |  -   |
| password  | 密码配置 | Object |   -    |  -   |

### account/password Attributes

| 参数  | 说明                         |  类型  | 可选值 | 默认 |
| :---: | :--------------------------- | :----: | :----: | :--: |
| icon  | 文本前的图标，默认为空不显示 | String |   -    |  -   |
| rules | 校验规则                     | Array  |   -    |  -   |

### Event

## table 封装

```vue
<template>
  <table-list
    :data="tableData"
    :columns="columns"
    align="center"
    :stripe="true"
	>
    <template #expand="{items}">
      <el-button type="primary" @click="print(items)">删除</el-button>
    </template>
    <template #op="{items}">
      <el-button type="primary" @click="print(items)">删除</el-button>
    </template>
   </table-list>
</template>

import TableList from "@/components/tableList";
export default {
  components: {
    TableList,
  },
  data() {
    return {
      tableData: [ //数据
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
      columns: [ //列字段配置
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
          slot: true,
        },
      ],
    };
  },
  methods: {
    print(item) {
      console.log(item);
    },
  },
};
</script>

```

### TableList Attributes （继承了 element 的 Table 的属性和方法，详细可参考 element 官方文档）

|  参数   | 说明                                                      |  类型   |        可选值         | 默认  |
| :-----: | :-------------------------------------------------------- | :-----: | :-------------------: | :---: |
|  data   | 列表数据                                                  |  Array  |           -           |   -   |
| columns | 列表字段配置                                              |  Array  |           -           |   -   |
| border  | 纵向边框                                                  | Boolean |      true/false       | false |
|  align  | 对齐方式，表格所有项的对齐方式，优先级比字段设置 align 低 | String  |   left/center/rigth   | left  |
| stripe  | 是否为斑马纹 table                                        | boolean |           —           | false |
|  size   | Table 的尺寸                                              | string  | medium / small / mini |   —   |

### columns 字段说明：（大部分字段与 element-ui 一样）

| 参数  | 说明                                                                                              |  类型   |       可选值       | 默认  |
| :---: | :------------------------------------------------------------------------------------------------ | :-----: | :----------------: | :---: |
| type  | 为空时是正常列表渲染，默认为空， 可选值和 element 一样 section/expand， expand 需要配合 slot 使用 | Stirng  | -/selection/expand |   -   |
| prop  | 对应要显示的当前列的数据字段                                                                      | String  |         -          |   -   |
| label | 当前列的表头名称                                                                                  | String  |         -          |   -   |
| width | width 大小，当前的宽度                                                                            | Number  |         -          |   -   |
| align | 对齐方式                                                                                          | String  | left/center/right  | left  |
| slot  | 是否启用插槽,主要针对与自定义内容，如操作，对应插槽跟该列的 prop 的值对应                         | Boolean |     true/false     | false |
| fixed | 固定列                                                                                            | Boolean |     true/false     | false |

### Event

## 表单组件

重复性的写每一个表单项页面 html 过多，不利于观看和管理

```vue
<template>
  <div>
    <form-group
      :inline="true"
      :model="model"
      :form="form"
      @on-click="onClick"
    ></form-group>
  </div>
</template>

<script>
import FormGroup from "@/components/FormGroup";
export default {
  components: {
    FormGroup,
  },
  data() {
    return {
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
      ],
    };
  },
  methods: {
    onClick(e, data) {
      console.log(e, data);
    },
  },
};
</script>
```

### formGroup Attributes （继承了 element 的 Form 的属性和方法不一一列出，详细可参考 element 官方文档）

| 参数  | 说明         |  类型  | 可选值 | 默认 |
| :---: | :----------- | :----: | :----: | :--: |
| form  | 表单配置     | Object |   -    |  -   |
| model | 表单数据对象 | Object |   -    |  -   |

### form Attributes

|    参数     | 说明                                                                         |  类型   |                  可选值                  | 默认  |
| :---------: | :--------------------------------------------------------------------------- | :-----: | :--------------------------------------: | :---: |
|    node     | 节点类型，当前项表单类型                                                     | String  | input /select / radio / switch / buttons |   -   |
|    prop     | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | String  |                    -                     |   -   |
|    label    | 标签文本                                                                     | String  |                    -                     |   -   |
|    size     | 用于控制该表单域下组件的尺寸                                                 | String  |          medium / small / mini           |   -   |
|    rules    | 表单校验规则                                                                 |  Array  |                    -                     |   -   |
| labelWidth  | 表单域标签的的宽度，例如 '50px'。支持 auto                                   | String  |                    -                     |   -   |
|   options   | 针对 select/check/radio 选择项的配置                                         |  Array  |                    -                     |   -   |
|   buttons   | 准对 button 组的配置                                                         |  Array  |                    -                     |   -   |
| placeholder | 文本域内提示文字                                                             | String  |                    -                     |   -   |
|  multiple   | select 是否多选                                                              | Boolean |               true / false               | false |

### check / radio options Attributes

| 参数  | 说明     |      类型       | 可选值 | 默认 |
| :---: | :------- | :-------------: | :----: | :--: |
| label | 选中值   | String / Number |   -    |  -   |
| value | 标签文本 |     String      |   -    |  -   |

### select options Attributes

| 参数  | 说明     |      类型       | 可选值 | 默认 |
| :---: | :------- | :-------------: | :----: | :--: |
| label | 标签文本 |     String      |   -    |  -   |
| value | 选中值   | String / Number |   -    |  -   |

注意： 在选用 check 或者 select 开启多选表单数据对象对应的字段值必须为数组格式

### buttons Attributes

|    参数    | 说明           |  类型   |                       可选值                       |  默认  |
| :--------: | :------------- | :-----: | :------------------------------------------------: | :----: |
|    type    | 类型           | String  | primary / success / warning / danger / info / text |   —    |
|   label    | 按钮文本       | String  |                         -                          |   -    |
|   event    | 事件标记       | String  |                         -                          |   -    |
|   plain    | 是否朴素按钮   | boolean |                         —                          | false  |
|   round    | 是否圆角按钮   | boolean |                         —                          | false  |
|   circle   | 是否圆形按钮   | boolean |                         —                          | false  |
|  loading   | 是否加载中状态 | boolean |                         —                          | false  |
|  disabled  | 是否禁用状态   | boolean |                         —                          | false  |
|    icon    | 图标类名       | string  |                         —                          |   —    |
| autofocus  | 是否默认聚焦   | boolean |                         —                          | false  |
| nativeType | 原生 type 属性 | string  |              button / submit / reset               | button |

### Event

on-click

