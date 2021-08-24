<template>
  <v-card flat tile>
    <v-app-bar color="deep-orange darken-4" height="60px" app elevation="12">
      <v-app-bar-nav-icon
        class="white--text  hidden-md-and-up"
        @click.stop="toggleMenu = !toggleMenu"
      ></v-app-bar-nav-icon>

      <!-- <v-dialog v-model="dialog" max-width="900">
        <v-card>
          <v-container>
            <v-app-bar color="white" flat>
              <h3>Matbakhi</h3>
              <v-spacer></v-spacer>
              <v-btn v-for="icon in icons" :key="icon" icon>
                <v-icon size="18px">
                  {{ icon }}
                </v-icon>
              </v-btn>
              <div text>
                <v-btn rounded to="/login" text @click.stop="dialog = false"
                  >Login</v-btn
                >/
                <v-btn rounded to="/signup" text @click.stop="dialog = false"
                  >Sign up</v-btn
                >
              </div>
            </v-app-bar>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row>
                <v-col cols="4">
                  <listN />
                </v-col>
              </v-row>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog> -->

      <v-toolbar-title class="white--text mr-auto">
        <router-link
          to="/"
          text
          class="white--text"
          style="text-decoration: none; font-size: 24px; font-weight:bold;"
        >
          <v-avatar>
            <v-img
              src="../assets/images/logo.png"
              style="background-color: #FFCCBC"
            ></v-img>
          </v-avatar>
          Matbakhi
        </router-link>
      </v-toolbar-title>

      <v-toolbar-text class="hidden-sm-and-down link">
        <!-- <v-btn
          text
          rounded
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          class="white--text"
        >
          {{ link.text }}
        </v-btn> -->
        <router-link v-for="link in links" :key="link.text" :to="link.route">
          {{ link.text }}
        </router-link>
      </v-toolbar-text>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="toggleMenu"
      class="deep-orange lighten-5"
      temporary
    >
      <v-list nav dense class="mt-16">
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-icon>
            <v-icon class="deep-orange--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title
            class="deep-orange--text "
            style="font-size:16px; font-weight:bold;"
            >{{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
// import listN from "../components/NavbarDialog.vue";

export default {
  data: () => ({
    //
    // dialog: false,
    toggleMenu: false,
    // drawer: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-folder", text: "Category", route: "/Category" },
      { icon: "mdi-post", text: "Blog", route: "/blog" },
      { icon: "mdi-login", text: "Login", route: "/login" },
      { icon: "mdi-account-box", text: "Signup", route: "/signup" },
    ],
  }),
  components: {
    // listN,
  },
  computed: {
    showMenu() {
      return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp;
    },
  },
  mounted() {
    this.$vuetify.breakpoint.width < 800 ? (this.toggleMenu = false) : "";
  },
};
</script>

<style>
.link {
  margin-right: 50px;
}
.link a {
  text-decoration: none;
  color: #fd8a68 !important;
  font-weight: bold;
  font-size: 18px;
  margin: 0.7rem;
}

.link a:hover,
.link a.router-link-exact-active {
  color: white !important;
  transition: 0.5s !important;
}
</style>
