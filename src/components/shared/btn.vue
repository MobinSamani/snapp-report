<template>
  <router-link v-if="routerLink" :to="to" :target="target" :class="classes" :disabled="disabled">
    <slot></slot>
  </router-link>

  <a v-else-if="link" :href="to" :target="target" :class="classes" :disabled="disabled">
    <slot></slot>
  </a>

  <button v-else type="button" :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    to: { type: String, default: null },
    block: { type: Boolean, default: false },
    routerLink: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    target: { type: String, default: "_self" }
  },
  computed: {
    classes() {
      return {
        [`py-3 px-6 rounded-lg flex justify-center items-center relative gap-x-2 duration-150 outline-none whitespace-nowrap`]: true,
        "w-full": this.block,
        "!bg-zinc-100 !text-zinc-300": this.disabled
      };
    }
  }
};
</script>
