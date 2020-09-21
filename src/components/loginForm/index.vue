<template>
  <div class="login-form" :style="[style]">
    <h1 class="title" :style="[{'color': titleColor}]">{{title}}</h1>
    <el-form ref="form" :model="form" :label-width="model.labelWidth + 'px'">
      <el-form-item
        class="form-item"
        prop="account"
        :label="model.account.label"
        :required="model.account.required"
        :rules="model.account.rules"
      >
        <i :class="['icon', model.account.icon]" v-if="model.account.icon"></i>
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item
        class="form-item"
        prop="password"
        :label="model.password.label"
        :required="model.password.required"
        :rules="model.password.rules"
      >
        <i :class="['icon', model.password.icon]" v-if="model.password.icon"></i>
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          :style="[btnStyle]"
          @click.native="login('form')"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "登录",
    },
    titleColor: {
      type: String,
      default: "#333",
    },
    boxStyle: {
      type: Object,
      default: () => {},
    },
    width: {
      type: [String, Number],
      default: 400,
    },
    height: {
      type: [String, Number],
    },
    left: {
      type: [String, Number],
    },
    right: {
      type: [String, Number],
    },
    top: {
      type: [String, Number],
    },
    bottom: {
      type: [String, Number],
    },
    background: {
      type: String,
      default: "#FFF",
    },
    radius: {
      type: [Number, String],
      default: 8,
    },
    model: {
      type: Object,
      default: () => {
        return {
          labelWidth: 0,
          account: {
            label: "",
          },
          password: {
            label: "",
          },
        };
      },
    },
    btnStyle: {
      type: Object,
      default: () => {
        return {
          width: "100%",
        };
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {},
    };
  },
  computed: {
    style() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        background: this.background,
        borderRadius: this.radius + "px",
        ...this.boxStyle,
      };
    },
  },
  methods: {
    login(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.form);
          this.$emit("login", this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$cursor: #333;
.login-form {
  position: absolute;
  width: 500px;
  .title {
    color: #333;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  ::v-deep {
    @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
      .el-input input {
        color: $cursor;
      }
    }
    .el-form-item__content {
      display: flex;
      align-items: center;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-input__inner {
      border: 0;
    }
    .el-input {
      .input {
        color: #333;
      }
    }
  }
  .icon {
    margin: 0 20px;
  }
}
</style>