<template>
  <el-form :model="model" v-bind="$attrs" v-on="$listeners" ref="form">
    <el-form-item
      v-for="(item, index) in form"
      :label="item.label"
      :key="index"
      :prop="item.prop"
      :rules="item.rules"
      :style="'width:' + item.width + 'px'"
      :size="item.size"
      :label-width="item.labelWidth"
    >
      <el-input
        v-if="item.node === 'input'"
        v-model="model[item.prop]"
        :type="item.type"
        :size="item.size"
        :maxlength="item.maxlength"
        :minlength="item.minlength"
        :placeholder="item.placeholder"
      ></el-input>
      <el-radio-group v-if="item.node === 'radio'" v-model="model[item.prop]" :size="item.size">
        <el-radio :label="radio.label" v-for="(radio, i) in item.options" :key="i">{{radio.value}}</el-radio>
      </el-radio-group>
      <el-checkbox-group v-if="item.node === 'check'" v-model="model[item.prop]" :size="item.size">
        <el-checkbox
          :label="radio.label"
          v-for="(radio, i) in item.options"
          :key="i"
        >{{radio.value}}</el-checkbox>
      </el-checkbox-group>
      <el-select
        v-if="item.node === 'select'"
        v-model="model[item.prop]"
        :multiple="item.multiple"
        :size="item.size"
        :placeholder="item.placeholder"
      >
        <el-option
          :label="it.label"
          :key="index2"
          :value="it.value"
          v-for="(it, index2) in item.options"
        ></el-option>
      </el-select>
      <el-switch
        v-if="item.node === 'switch'"
        v-model="model[item.prop]"
        :disabled="item.disabled"
        :width="item.width"
        :active-text="item.activeText"
        :inactive-text="item.inactiveText"
        :active-value="item.activeValue"
        :inactive-value="item.inactiveValue"
        :active-color="item.activeColor"
        :inactive-color="item.inactiveColor"
        :name="item.name"
        :validate-event="item.validateEvent"
        @change="e => switchChange(e, item.event)"
      ></el-switch>
      <template v-if="item.node === 'buttons'">
        <el-button
          :size="it.size"
          :type="it.type"
          :circle="it.circle"
          :plain="it.plain"
          :round="it.round"
          :loading="item.loading"
          :icon="item.icon"
          :disabled="it.disabled"
          :autofocus="it.autofocus"
          :native-type="it.nativeType || 'button'"
          v-for="(it, index3) in item.buttons"
          :key="index3"
          @click="onClick(it.event)"
        >{{it.label}}</el-button>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
    form: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(event) {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.$emit("on-click", event, this.model);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    switchChange(e, event) {
      console.log(e, event);
    },
  },
};
</script>

<style>
</style>