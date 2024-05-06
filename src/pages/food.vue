<template>
  <div class="bg-zinc-50 shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col sm:flex-row gap-8">
    <h2 class="w-full text-center text-xl text-zinc-400">Coming Soon...</h2>
    <!-- <food-data v-if="user" :user="user" />

    <template v-else>
      <form-input
        v-if="otpSent"
        v-model="code"
        :label="`Code sent to ${phoneNumber}`"
        placeholder="xxxxx"
        :maxlength="5"
        :loading="loading"
        @submit="login"
      />

      <form-input v-else v-model="phoneNumber" label="Phone Number" placeholder="09xxxxxxxxx" :maxlength="11" :loading="loading" @submit="sendOtp" />
    </template> -->
  </div>
</template>

<script>
// import FormInput from "@/components/shared/form-input.vue";
// import FoodData from "@/components/food-data.vue";
// import { useAuthStore } from "@/stores/auth";
import meta from "@/mixins/meta.js";

// const authStore = useAuthStore();

export default {
  name: "Food",
  mixins: [meta]
  // components: {
  //   FormInput,
  //   FoodData
  // },
  // data() {
  //   return {
  //     phoneNumber: null,
  //     code: null,
  //     loading: false,
  //     otpSent: false
  //   };
  // },
  // computed: {
  //   user() {
  //     return authStore.getUser(this.$route.meta.auth, this);
  //   }
  // },
  // methods: {
  //   async sendOtp() {
  //     if (this.loading || this.phoneNumber?.length != 11) return;

  //     this.loading = true;

  //     try {
  //       await this.$foodRepos.auth.sendOtp({ cellphone: this.phoneNumber });
  //       this.otpSent = true;
  //     } catch (error) {
  //       this.$toast.error(error);
  //     } finally {
  //       this.loading = false;
  //     }
  //   },
  //   async login() {
  //     if (this.loading || this.code?.length != 5) return;

  //     this.loading = true;

  //     try {
  //       const { data } = await this.$foodRepos.auth.login({ cellphone: this.phoneNumber, code: this.code });

  //       const user = {
  //         // token: data.oauth2_token.access_token,
  //         token: data.nested_jwt,
  //         phoneNumber: data.user.cellphone,
  //         firstName: data.user.firstname,
  //         lastName: data.user.lastname
  //       };

  //       authStore.setUser(this.$route.meta.auth, user, this);
  //     } catch (error) {
  //       this.$toast.error(error);
  //     } finally {
  //       this.loading = false;
  //     }
  //   }
  // }
};
</script>
