<template>
  <div
    class="w-full max-w-xs flex items-center justify-between bg-white rounded shadow p-6 mb-4 text-lg flex-wrap"
  >
    <span class="font-semibold">
      {{ appointment.name }}
    </span>
    <span>
      {{ date }}
    </span>
    <span v-if="appointment.notes" class="w-full mt-4 pt-2 border-t-2 border-blue-500 italic font-light">
      {{ appointment.notes }}
    </span>
  </div>
</template>

<script>
export default {
  name: "appointmentCard",

  props: {
    appointment: {
      type: Object,
      required: true,
    },
  },

  computed: {
    date() {
      return new Date(this.appointment.date).toLocaleDateString("en-US");
    },
  },
};
</script>
