<template>
  <div class="font-sans flex flex-col h-screen">
    <nav class="bg-white flex items-center justify-center p-4">
      <router-link
        to="/"
        exact
        class="py-1 mx-2 border-b-4 border-transparent	"
        active-class="border-blue-500	"
        >Appointments</router-link
      >
      <router-link
        to="/addAppointment"
        exact
        class="py-1 mx-2 border-b-4 border-transparent	"
        active-class="border-blue-500	"
        >Create Apointment</router-link
      >
    </nav>
    <main class="flex flex-1 bg-gray-200 p-4 flex items-center justify-center">
      <router-view />
    </main>
  </div>
</template>
