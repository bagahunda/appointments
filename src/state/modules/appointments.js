export const state = {
  appointments: [],
};

export const getters = {
  appointments(state) {
    return state.appointments;
  },
};

export const mutations = {
  SET_APPOINTMENTS(state, payload) {
    state.appointments = payload;
  },

  ADD_APPOINTMENT(state, payload) {
    state.appointments.push(payload);
    localStorage.setItem("appointments", JSON.stringify(state.appointments));
  },
};

export const actions = {
  setAppointments({ commit }, payload) {
    commit("SET_APPOINTMENTS", payload);
  },

  addAppointment({ commit }, payload) {
    commit("ADD_APPOINTMENT", payload);
  },

  init({ commit }) {
    const payload = localStorage.getItem("appointments");
    console.log("init -> payload", payload)
    payload && commit("SET_APPOINTMENTS", JSON.parse(payload));
  },
};
