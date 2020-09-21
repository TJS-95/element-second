<template>
  <div class="login-container" :style="loginContainerStyle">
    <pointwave :color="0x097bdb" :top="0" />
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
import Pointwave from "@/components/Pointwave";
import backgroundImg from "@/assets/img/background.png";
import loginForm from "@/components/loginForm";

export default {
  name: "Spacewaves",
  components: {
    Pointwave,
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
  computed: {
    loginContainerStyle() {
      return {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      };
    },
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
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

<style lang="scss" scoped>
$bg: #15255b;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}
</style>
