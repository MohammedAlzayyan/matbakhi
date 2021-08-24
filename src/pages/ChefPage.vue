<template>
  <v-container>
    <h1 class="mt-10 mb-10">Chef Page</h1>

    <v-card color="deep-orange lighten-5 " max-width="70%" style="left:170px; ">
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-card-text>
            <v-avatar size="200px">
              <v-img :src="chef.image"></v-img>
            </v-avatar>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-title
            style="color:orangered; font-weight:bold; font-size:24px"
          >
            {{ chef.name }}
          </v-card-title>
          <v-row no-gutters class="ml-4">
            <v-col class="12" md="1">
              <v-icon class="blue--text">mdi-thumb-up</v-icon>
            </v-col>
            <v-col cols="12" md="2" class="ml-2"><h4>1000</h4></v-col>
            <v-col cols="12" md="1"><h4>250</h4></v-col>
            <v-col cols="12" md="3" class="red--text"><h4>Subscribe</h4></v-col>
          </v-row>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="3">
                <h3>To Contact:</h3>
              </v-col>
              <v-col cols="12" md="1">
                <v-icon>mdi-email</v-icon>
              </v-col>
              <v-col cols="12" md="7">
                <h4>{{ chef.email }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="12" md="5">
                <h3>Number of Recipes:</h3>
              </v-col>
              <v-col cols="12" md="2">
                <h3>{{ myRecipe.length }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-6 mb-8">
      <v-card-title>
        <h4>My Recipes</h4>
      </v-card-title>

      <v-row class="mr-10 ml-10 text-center">
        <v-col
          v-for="recipe in myRecipe"
          :key="recipe"
          cols="12"
          md="3"
          sm="6"
          class=" text-center"
        >
          <router-link :to="`/recipePage/id=${recipe.id}`">
            <v-img :src="recipe.imageURL" class="imageR"></v-img>
          </router-link>
          <router-link
            :to="`/recipePage/id=${recipe.id}`"
            style="text-decoration: none;color: black;"
          >
            <h3 class="mt-3 text-center">{{ recipe.name }}</h3>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("items", ["fetchItemsRecipes", "fetchUser"]),
  },
  computed: {
    ...mapState("items", ["itemsRecipes", "users"]),
    ...mapGetters("items", ["allItemsRecipes", "allUsers"]),

    chef() {
      let user = this.users.find((v) => v.id == this.$route.params.id);
      return user;
    },
    myRecipe() {
      let recipe = this.itemsRecipes.filter(
        (v) => v.user_id == this.$route.params.id
      );

      return recipe;
    },
  },
  mounted() {
    this.$store.dispatch("items/fetchItemsRecipes");
    this.$store.dispatch("items/fetchUser");
  },
};
</script>

<style>
.imageR:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
</style>
