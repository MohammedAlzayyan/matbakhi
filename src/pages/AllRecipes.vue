<template>
  <v-container>
    <h1 class="mt-10 mb-10">All Recipes</h1>

    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="6"
        v-for="item in itemsRecipes"
        :key="item.id"
      >
        <router-link
          :to="`/recipePage/id=${item.id}`"
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
  methods: {
    ...mapActions("items", ["fetchItemsRecipes"]),
  },
  computed: {
    ...mapState("items", ["categories", "itemsRecipes"]),
    ...mapGetters("items", ["allItemsRecipes", "categoryID"]),
  },
  mounted() {
    this.$store.dispatch("items/fetchCategory");
    this.$store.dispatch("items/fetchItemsRecipes");
  },
};
</script>

<style></style>
