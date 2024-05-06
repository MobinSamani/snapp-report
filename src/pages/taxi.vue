<template>
  <div class="bg-zinc-50 shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col sm:flex-row gap-8">
    <taxi-data v-if="user" :user="user" />

    <template v-else>
      <form-input
        v-if="otpSent"
        v-model="code"
        :label="`Code sent to ${phoneNumber}`"
        placeholder="xxxxxx"
        :maxlength="6"
        :loading="loading"
        @submit="login"
      />

      <form-input v-else v-model="phoneNumber" label="Phone Number" placeholder="09xxxxxxxxx" :maxlength="11" :loading="loading" @submit="sendOtp" />
    </template>
  </div>
</template>

<script>
import FormInput from "@/components/shared/form-input.vue";
import TaxiData from "@/components/taxi-data.vue";
import { useAuthStore } from "@/stores/auth";
import meta from "@/mixins/meta.js";

const authStore = useAuthStore();

export default {
  name: "Taxi",
  mixins: [meta],
  components: {
    FormInput,
    TaxiData
  },
  data() {
    return {
      phoneNumber: null,
      code: null,
      loading: false,
      otpSent: false
    };
  },
  computed: {
    user() {
      return authStore.getUser(this.$route.meta.auth, this);
    }
  },
  methods: {
    async sendOtp() {
      if (this.loading || this.phoneNumber?.length != 11) return;

      this.loading = true;

      try {
        await this.$taxiRepos.auth.sendOtp({ cellphone: this.phoneNumber });
        this.otpSent = true;
      } catch (error) {
        this.$toast.error(error);
      } finally {
        this.loading = false;
      }
    },
    async login() {
      if (this.loading || this.code?.length != 6) return;

      this.loading = true;

      try {
        const data = await this.$taxiRepos.auth.login({ cellphone: this.phoneNumber, token: this.code });

        const user = {
          token: data.access_token,
          phoneNumber: this.phoneNumber,
          fullName: data.fullname
        };

        authStore.setUser(this.$route.meta.auth, user, this);
      } catch (error) {
        this.$toast.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
