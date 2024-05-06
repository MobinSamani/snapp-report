<template>
  <div class="w-full flex flex-col gap-y-8 text-zinc-500">
    <div class="flex items-center justify-between gap-x-4">
      <div v-if="user.phoneNumber">
        {{ user.phoneNumber.replaceAll(" ", "") }}
      </div>

      <div v-if="user.fullName">
        {{ user.fullName }}
      </div>
    </div>

    <ProgressBar v-if="initializing" :value="progress" :total="items.rides.value" />

    <div class="flex flex-col gap-y-3 divide-y">
      <div v-for="(item, key) in items" :key="key" class="flex items-center justify-between gap-x-4" :class="{ 'pt-3': !isFirstItem(key) }">
        <div>{{ item.label }}:</div>

        <div v-if="!initializing" class="flex items-center gap-x-1">
          <div class="text-zinc-900">
            {{ item.separate ? item.value?.toLocaleString() : item.value }}
          </div>

          <div class="text-sm">{{ item.unit }}</div>
        </div>
      </div>
    </div>

    <btn class="border border-taxi text-taxi hover:bg-taxi hover:text-zinc-100" @click="logout">Logout</btn>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import ProgressBar from "@/components/shared/progress-bar.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

export default {
  name: "TaxiData",
  components: {
    Btn,
    ProgressBar
  },
  props: {
    user: Object
  },
  data() {
    return {
      initializing: true,
      progress: 0,
      items: {
        duration: {
          label: "Duration",
          unit: "Hours",
          separate: true,
          value: 0
        },
        mileage: {
          label: "Mileage",
          unit: "Kilometers",
          separate: true,
          value: 0
        },
        rides: {
          label: "Rides",
          unit: null,
          separate: true,
          value: 0
        },
        firstRide: {
          label: "First Ride",
          unit: null,
          separate: false,
          value: null
        },
        lastRide: {
          label: "Last Ride",
          unit: null,
          separate: false,
          value: null
        },
        total: {
          label: "Total",
          unit: "Toman",
          separate: true,
          value: 0
        }
      }
    };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    isFirstItem(key) {
      return key === Object.keys(this.items)[0];
    },
    async getHistory() {
      try {
        // Get first page
        const { data } = await this.$taxiRepos.history.getAll();
        let goForNextPage = !!data.rides?.length;
        let page = 1;
        let rides = null;

        if (!goForNextPage) return;

        this.items.duration.value = data.snapp_duration;
        this.items.mileage.value = data.snapp_mileage;
        this.items.rides.value = data.successful_snapp_rides;

        page++;
        rides = data.rides;
        this.progress = rides.length;

        // Get other pages
        while (goForNextPage) {
          const { data } = await this.$taxiRepos.history.getAll({ page });
          goForNextPage = !!data.rides?.length;

          if (goForNextPage) {
            page++;
            // Store success rides
            rides.push(...data.rides.filter((ride) => ride.latest_ride_status === 5));
            this.progress = rides.length;
          }
        }

        // Sort rides
        rides.reverse();

        this.items.firstRide.value = rides[0].created_at;
        this.items.lastRide.value = rides[rides.length - 1].created_at;
        this.items.total.value = rides.reduce((total, { final_price }) => total + final_price / 10, 0);

        this.initializing = false;
      } catch (error) {
        this.$toast.error(error);
      }
    },
    logout() {
      authStore.setUser(this.$route.meta.auth, null, this);
      this.$router.push("/");
    }
  }
};
</script>
