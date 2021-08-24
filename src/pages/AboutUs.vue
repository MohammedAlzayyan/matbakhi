<template>
  <v-container>
    <h1>About us</h1>

    <v-card class="mt-10 ml-5" max-width="500px" elevation="16">
      <v-card-title>
        <h4>
          Name:
          <span style="color:#ed7e00; font-size:24px">{{ userInfo.name }}</span>
        </h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-title>
        <h4>the date of join: 18/8/2021</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-title>
        <h4>
          Number of recipes: <span>{{ data.length }}</span>
        </h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-card-title>
            <h4>Evaluation:</h4>
          </v-card-title>
        </v-col>
        <v-col cols="12" md="6" class="ml-16">
          <v-row no-gutters>
            <v-col cols="12" md="2">
              <h4 class="mt-5">4.5</h4>
            </v-col>
            <v-col cols="12" md="6" class="mt-2">
              <v-rating
                color="yellow darken-3"
                background-color="grey darken-1"
                half-increments
                hover
                size="26"
                value="4.5"
              ></v-rating>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <NavbarDash />
  </v-container>
</template>

<script>
import NavbarDash from "../components/NavbarDashboard.vue";

import { mapState, mapGetters } from "vuex";

export default {
  components: {
    NavbarDash,
  },
  computed: {
    userInfo() {
      let user = JSON.parse(window.localStorage.getItem("user_info"));
      return user;
    },
    data() {
      let userId = JSON.parse(window.localStorage.getItem("user_info")).id;

      let recipe = this.itemsRecipes.filter((v) => v.user_id == userId);
      return recipe;
    },
    ...mapState("items", ["categories", "itemsRecipes"]),
    ...mapGetters("items", ["allItemsRecipes"]),
  },
  mounted() {
    this.$store.dispatch("items/fetchCategory");
    this.$store.dispatch("items/fetchItemsRecipes");
  },
};
</script>

<style></style>
