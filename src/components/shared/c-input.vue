<template>
  <div class="flex flex-col gap-y-4">
    <label v-if="label || $slots.label" :for="`input-${id}`" class="block text-zinc-600">
      <slot name="label"> {{ label }} : <span v-if="required" class="text-red-500">*</span> </slot>
    </label>

    <div class="flex flex-col gap-y-2">
      <div :class="classes">
        <input
          ref="input"
          :id="`input-${id}`"
          :placeholder="placeholder"
          class="grow bg-transparent py-2 outline-none h-[42px] w-full"
          :type="type"
          :readonly="readonly"
          :maxlength="maxlength"
          :inputmode="inputmode"
          v-model="model"
        />
      </div>

      <div v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import vModel from "@/mixins/v-model.js";

export default {
  name: "CInput",
  mixins: [vModel],
  props: {
    label: String,
    placeholder: String,
    required: { type: Boolean, default: false },
    numeric: { type: Boolean, default: false },
    type: { type: String, default: "text" },
    inputmode: String,
    readonly: { type: Boolean, default: false },
    wrapperClasses: String,
    maxlength: Number,
    autoFocus: { type: Boolean, default: false }
  },
  data() {
    return {
      id: String(Math.floor(Math.random() * 99999999)),
      error: null
    };
  },
  computed: {
    classes() {
      return [
        {
          "bg-zinc-100 border px-4 rounded-lg focus-within:border-zinc-500 duration-150": true,
          "!border-red-500": this.error
        },
        this.wrapperClasses
      ];
    }
  },
  mounted() {
    if (this.required || this.numeric) {
      this.$watch("model", (value) => {
        if (this.numeric && isNaN(value)) this.error = "Digits Only";
        else if (this.required && !value?.length) this.error = "Required";
        else this.error = "";
      });
    }

    if (this.autoFocus) this.$refs.input?.focus();
  }
};
</script>
