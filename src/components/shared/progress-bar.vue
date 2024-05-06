<template>
  <div class="bg-zinc-200 relative rounded-lg overflow-hidden" :style="backgroundStyle">
    <div class="absolute top-0 left-0 h-full duration-150" :class="progressClasses" :style="progressStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    total: Number,
    height: { type: Number, default: 8 }
  },
  computed: {
    progressPercentage() {
      return (this.value / this.total) * 100;
    },
    backgroundStyle() {
      return {
        height: `${this.height}px`
      };
    },
    progressClasses() {
      switch (this.$route.meta.auth) {
        case "taxi":
          return "bg-taxi";
        case "food":
          return "bg-food";
        default:
          return "bg-zinc-900";
      }
    },
    progressStyle() {
      return {
        width: this.progressPercentage + "%"
      };
    }
  }
};
</script>
