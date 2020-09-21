<template>
  <div class="relative w-full max-w-md bg-white rounded shadow p-6">
    <p class="text-xl font-bold text-center">Check if information is correct</p>
    <div class="flex flex-col mb-4">
      <p class="mb-1 font-semibold">Date:</p>
      <div class="bg-gray-200 rounded py-1 px-2">{{ date }}</div>
    </div>
    <div class="flex flex-col mb-4">
      <p class="mb-1 font-semibold">Full Name:</p>
      <div class="bg-gray-200 rounded py-1 px-2">{{ form.name }}</div>
    </div>
    <div class="flex flex-col mb-4">
      <p class="mb-1 font-semibold">Notes:</p>
      <div class="bg-gray-200 rounded py-1 px-2">{{ form.notes }}</div>
    </div>
    <div class="flex justify-between">
      <button
        type="button"
        class="inline-flex items-center mr-4"
        @click="onBack"
      >
        <svg
          class="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
      <button
        class="w-full bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        @click="onSubmit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "appoinmentSubmit",

  props: {
    form: {
      type: Object,
      required: true,
    },
  },

  computed: {
    date() {
      return this.form.date
        ? new Date(this.form.date).toLocaleDateString("en-US")
        : "";
    },
  },

  methods: {
    ...mapActions({
      addAppointment: "appointments/addAppointment",
    }),

    onBack() {
      this.$emit("back");
    },

    onSubmit() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
