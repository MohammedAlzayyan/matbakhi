<template>
  <v-container class="mt-6">
    <h5 class="grey--text lighten-2" v-text="`Home>Category`"></h5>

    <h2 class="mt-6">Recipes by Category</h2>

    <p class="mt-3" style="width:80%">
      Search over 500+ whole food recipes by course, meat, or cuisine. Or scroll
      to discover the latest recipes from my best, most popular categories! From
      home cooking to healthy treats and more, you’ll find everything you need
      to cook up some wholesome and healthy dinners for tonight.
    </p>

    <h2 class="mt-8">POPULAR CATEGORIES</h2>

    <v-row class="mt-3" justify="center" justify-sm="center">
      <v-col
        cols="12"
        md="4"
        sm="6"
        class="d-inline"
        v-for="item in allCategories"
        :key="item.id"
      >
        <router-link
          :to="`/recipeType/id=${item.id}`"
          class="nameRecipe black--text"
        >
          <v-img :src="item.imageURL" width="800px" height="300px"></v-img>
        </router-link>
        <v-col cols="12" class="text-center">
          <h3>{{ item.name }}</h3>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "category",
  methods: {
    ...mapActions("items", ["fetchCategory"]),
  },
  computed: {
    ...mapGetters("items", ["allCategories"]),
    ...mapState("items", ["categories"]),
  },
  mounted() {
    this.$store.dispatch("items/fetchCategory");
    this.$store.dispatch("items/fetchItemsRecipes");
  },
};
</script>

<style>
.nameRecipe {
  text-decoration: none;
}
</style>
