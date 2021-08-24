<template>
  <v-container class="mt-6">
    <h5
      class="grey--text lighten-2"
      v-text="`Home>Category>${nameCategory.name}`"
    ></h5>

    <v-row class="mt-7" no-gutters>
      <v-col cols="12">
        <h1>{{ nameCategory.name }}</h1>
      </v-col>
      <v-col cols="12" class="mt-3" md="4" sm="6">
        <h4>Show results by:</h4>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <v-autocomplete
          item-value="id"
          item-text="name"
          :items="itemsRecipes"
          label="RecipeType Name"
          solo
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <v-autocomplete
          item-value="id"
          item-text="name"
          :items="itemsRecipes"
          label="Chef"
          solo
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <v-autocomplete
          item-value="id"
          item-text="name"
          :items="itemsRecipes"
          label="Kitchen"
          solo
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="item in new_items" :key="item.id">
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
  name: "recipeType",
  data: () => {
    return {};
  },
  methods: {
    ...mapActions("items", ["fetchItemsRecipes"]),
  },
  computed: {
    ...mapState("items", ["categories", "itemsRecipes"]),
    ...mapGetters("items", ["allItemsRecipes", "categoryID"]),
    new_items() {
      let category = this.categories.find((v) => v.id == this.$route.params.id);
      let items_ids = category.items_ids;
      let related_item = this.itemsRecipes.filter((v) =>
        items_ids.find((e) => e == v.id)
      );
      return related_item;
    },
    nameCategory() {
      let category = this.categories.find((v) => v.id == this.$route.params.id);
      return category;
    },
  },
  mounted() {
    this.$store.dispatch("items/fetchCategory");
    this.$store.dispatch("items/fetchItemsRecipes");
  },
};
</script>

<style></style>
