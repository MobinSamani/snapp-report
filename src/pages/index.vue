<template>
  <div class="bg-zinc-50 shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col sm:flex-row gap-8">
    <btn router-link to="/taxi" class="border-taxi hover:bg-taxi" :class="btnClasses">Taxi Report</btn>

    <btn router-link to="/food" class="border-food hover:bg-food" :class="btnClasses">Food Report</btn>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import meta from "@/mixins/meta.js";

export default {
  name: "Home",
  mixins: [meta],
  components: {
    Btn
  },
  computed: {
    btnClasses() {
      return "bg-zinc-200 text-lg border-l-4 pr-7 hover:text-zinc-100 grow";
    }
  }
};
</script>
