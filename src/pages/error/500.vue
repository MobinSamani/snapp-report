<template>
  <div class="bg-zinc-50 shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col gap-y-8 items-center justify-center text-center">
    <h1 class="text-9xl font-semibold text-zinc-200">500</h1>
    <h2 class="text-3xl font-semibold text-zinc-600">Oops!</h2>

    <div class="text-zinc-400 max-w-[350px]">Server is currently unavailable, try again later!</div>

    <btn router-link to="/" block class="bg-zinc-200 hover:bg-zinc-300">Back to Home</btn>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import meta from "@/mixins/meta.js";

export default {
  name: "ServerError",
  mixins: [meta],
  components: {
    Btn
  }
};
</script>
