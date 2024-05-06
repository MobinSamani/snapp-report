<template>
  <div class="w-full flex flex-col gap-y-8 text-zinc-500">
    <div class="flex items-center justify-between gap-x-4">
      <div v-if="user.phoneNumber">
        {{ user.phoneNumber.replaceAll(" ", "") }}
      </div>

      <div v-if="user.firstName || user.lastName">
        {{ (user.firstName + " " + user.lastName).trim() }}
      </div>
    </div>

    <btn class="border border-food text-food hover:bg-food hover:text-zinc-100" @click="logout">Logout</btn>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

export default {
  name: "FoodData",
  components: {
    Btn
  },
  props: {
    user: Object
  },
  // data() {
  //   return {
  //     history: null
  //   };
  // },
  // mounted() {
  //   this.getHistory();
  // },
  methods: {
    // async getHistory() {
    //   if (this.history) return;

    //   try {
    //     const { data } = await this.$foodRepos.history.getAll({ page: 0, size: 100 });
    //     this.history = data;
    //   } catch (error) {
    //     this.$toast.error(error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    logout() {
      authStore.setUser(this.$route.meta.auth, null, this);
    }
  }
};
</script>
