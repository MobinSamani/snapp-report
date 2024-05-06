<template>
  <btn
    link
    to="https://github.com/MobinSamani/snapp-report"
    target="_blank"
    class="!fixed right-4 md:right-8 bottom-4 md:bottom-8 !p-0 text-zinc-500"
  >
    GitHub
  </btn>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
export default {
  name: "SourceBtn",
  components: {
    Btn
  }
};
</script>
