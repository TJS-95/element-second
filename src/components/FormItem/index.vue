<template>
  <el-form-item :label="label" :rules="rules" prop="prop" :required="required">
    <!-- <span class="icon">
      <el-image v-if="setting.icon.src" :style="setting.icon.size" :src="setting.icon.src"></el-image>
      <i v-else :class="setting.icon.icon" :size="setting.icon.size"></i>
    </span>-->
    <el-input
      v-model="value"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value)"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    setting: {
      type: Object,
      default: () => {
        return {};
      },
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      },
    },
    prop: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      myValue: this.value,
    };
  },
  methods: {},
  watch: {
    // value(val) {
    //   this.myValue = val;
    // },
    // myValue(val) {
    //   this.$emit("input", val);
    // },
  },
};
</script>

<style>
</style>