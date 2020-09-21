<template>
  <keep-alive>
    <component
      :style="{ transitionDuration: '0.1s' }"
      :is="activeComponent"
      :form="form"
      @formReady="onFormReady"
      @back="onBack"
      @submit="onSubmit"
    />
  </keep-alive>
</template>

<script>
import { mapActions } from "vuex";
import addAppointmentForm from "@/components/AddAppointmentForm";
import addAppointmentSubmit from "@/components/AddAppointmentSubmit";
export default {
  name: "createAppointment",

  components: {
    addAppointmentForm,
    addAppointmentSubmit,
  },

  data() {
    return {
      activeTab: "form",
      form: {},
    };
  },

  computed: {
    activeComponent() {
      let componentsMap = {
        form: addAppointmentForm,
        submit: addAppointmentSubmit,
      };
      return componentsMap[this.activeTab];
    },
  },

  methods: {
    ...mapActions({
      addApointment: "appointments/addAppointment",
    }),

    onFormReady($event) {
      this.activeTab = "submit";
      this.form = $event;
    },

    onBack() {
      this.activeTab = "form";
    },

    onSubmit() {
      this.addApointment(this.form);
      this.$router.push("/");
    },
  },
};
</script>
