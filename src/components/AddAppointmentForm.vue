<template>
  <form
    class="w-full max-w-md bg-white rounded shadow p-6"
    @submit.prevent="onSubmit"
  >
    <h1 class="text-xl font-bold text-center">Create an appointment</h1>
    <div class="flex flex-col my-6">
      <label for="name" class="mb-1 font-semibold">Date:</label>
      <datepicker v-model="form.date" class="border rounded p-2 shadow-inner" />
    </div>
    <div class="flex flex-col my-6">
      <label for="name" class="mb-1 font-semibold">Full Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        class="border rounded p-2 shadow-inner"
        v-model="form.name"
      />
    </div>
    <div class="flex flex-col my-6">
      <label for="note" class="mb-1 font-semibold">Notes:</label>
      <textarea
        name="notes"
        id="note"
        class="border rounded p-2 shadow-inner"
        v-model="form.notes"
      ></textarea>
    </div>
    <div class="flex justtify-between my-6">
      <button
        type="button"
        class="inline-flex items-center mr-4"
        @click="$router.push('/')"
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
        :disabled="!isFormReady"
      >
        Next
      </button>
    </div>
  </form>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "addAppointmentForm",

  components: {
    Datepicker,
  },

  data() {
    return {
      form: {
        date: "",
        name: "",
        notes: "",
      },
    };
  },

  computed: {
    isFormReady() {
      return !!this.form.name.length && !!this.form.date;
    },
  },

  methods: {
    onSubmit() {
      this.$emit("formReady", this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .vdp-datepicker {
    input {
      width: 100%;
      outline: none;
    }
  }
}
</style>
