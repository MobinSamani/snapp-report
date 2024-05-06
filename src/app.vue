<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${$config.appName} | ${content}` : $config.appName }}</template>
  </metainfo>

  <div class="min-h-screen bg-zinc-100 text-zinc-900 flex flex-col gap-y-8 items-center justify-center p-4 md:p-8">
    <logo />

    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>

    <SourceBtn />
  </div>
</template>

<script>
import Logo from "@/components/shared/logo.vue";
import SourceBtn from "@/components/shared/source-btn.vue";

export default {
  name: "App",
  components: {
    Logo,
    SourceBtn
  }
};
</script>
