// 用于维护外部和项目的ui组件
import {
  Button,
  Form,
  FormItem,
  Icon,
  Input,
  Image,
  Table,
  TableColumn,
  RadioGroup,
  Radio,
  Select,
  Option,
  Switch,
  Checkbox,
  CheckboxGroup,
  Pagination,
  Dialog
} from 'element-ui'

// import Header from '@/components/Header'
export default {
  install(Vue) {
    // Vue.component('Header', Header)
    Vue.use(Button)
      .use(Form)
      .use(FormItem)
      .use(Icon)
      .use(Input)
      .use(Image)
      .use(Table)
      .use(TableColumn)
      .use(RadioGroup)
      .use(Radio)
      .use(Checkbox)
      .use(CheckboxGroup)
      .use(Select)
      .use(Option)
      .use(Switch)
      .use(Pagination)
      .use(Dialog)
  }
}