<template>
  <form class="flex flex-col gap-y-4 w-full" @submit.prevent="submit">
    <c-input
      v-model="model"
      auto-focus
      :label="label"
      :placeholder="placeholder"
      class="grow"
      :maxlength="maxlength"
      :wrapper-classes="inputWrapperClasses"
      inputmode="numeric"
    />

    <btn :disabled="model?.length != maxlength" class="text-zinc-100 grow" :class="[{ 'opacity-25': loading }, btnClasses]" type="submit">
      <template v-if="loading">Loading...</template>
      <template v-else>Login</template>
    </btn>
  </form>
</template>

<script>
import vModel from "@/mixins/v-model.js";
import Btn from "@/components/shared/btn.vue";
import CInput from "@/components/shared/c-input.vue";

export default {
  name: "FormLogin",
  mixins: [vModel],
  components: {
    Btn,
    CInput
  },
  props: {
    label: String,
    placeholder: String,
    maxlength: Number,
    loading: { type: Boolean, default: false }
  },
  computed: {
    inputWrapperClasses() {
      switch (this.$route.meta.auth) {
        case "taxi":
          return "focus-within:!border-taxi";
        case "food":
          return "focus-within:!border-food";
        default:
          return "focus-within:border-zinc-500";
      }
    },
    btnClasses() {
      switch (this.$route.meta.auth) {
        case "taxi":
          return "bg-taxi";
        case "food":
          return "bg-food";
        default:
          return "bg-zinc-900";
      }
    }
  },
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
