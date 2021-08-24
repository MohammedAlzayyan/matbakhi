<template>
  <v-app>
    <Navbar v-if="!$route.meta.hideNavbar" />

    <v-main>
      <router-view />
    </v-main>

    <Footer v-if="!$route.meta.hideFooter" />
  </v-app>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
  },
};
</script>
