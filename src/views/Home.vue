<template>
  <div class="w-full flex items-center justify-center flex-col">
    <template v-if="appointments.length">
      <h1 class="mb-4 text-xl font-bold text-center uppercase">
        upcoming appointments
      </h1>
      <AppointmentCard
        v-for="appointment in appointments"
        :key="appointment.id"
        :appointment="appointment"
      />
    </template>
    <template v-else>
      <div class="text-center">
        <p class="p-4">
          There are no appointmens yet.
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          @click="$router.push('/addAppointment')"
        >
          Add one
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppointmentCard from "@/components/AppointmentCard";
export default {
  name: "home",

  components: {
    AppointmentCard,
  },

  computed: {
    ...mapGetters({
      appointments: "appointments/appointments",
    }),
  },
};
</script>
