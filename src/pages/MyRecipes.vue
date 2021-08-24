<template>
  <div style="background-color: #FBE9E7;height:100%">
    <v-container style="background-color: #FBE9E7;">
      <h1>My Recipes</h1>

      <v-container class="mt-5">
        <v-row no-gutters class="text-center">
          <v-col cols="12" md="3">
            <v-autocomplete
              item-value="id"
              item-text="name"
              :items="categories"
              v-model="category_id"
              label="Category"
              solo
              full-width
              style="width: 300px;"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="3" class="mt-1 ml-10 text-center">
            <v-btn
              @click="reset"
              style="width: 120px;height:50px; color:orangered"
            >
              <h3>View All</h3>
            </v-btn>
          </v-col>
          <v-col cols="12" md="3" class="mt-4">
            Number of Recipes:
            <h4>{{ data.length }}</h4>
          </v-col>
        </v-row>
        <v-row>
          <RecipeDialog :clicked="clicked" @closing="clicked = false" />
          <v-col
            cols="12"
            md="6"
            v-for="recipe in returns == true ? data : filterdItems"
            :key="recipe.id"
          >
            <v-card full-width style="background-color: #FFCCBC">
              <v-card-title>
                <v-btn style="color: #ed7e00;" @click="clicked = true"
                  ><h3>{{ recipe.name }}</h3>
                </v-btn>
                <v-spacer></v-spacer>
                <h5 class="mr-5"><v-icon class="mr-2">mdi-eye</v-icon>1000</h5>
                <h5>
                  <v-icon class="mr-2" color="blue">mdi-thumb-up</v-icon>1000
                </h5>
              </v-card-title>
              <v-divider></v-divider>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <NavbarDash />
    </v-container>
  </div>
</template>

<script>
import NavbarDash from "../components/NavbarDashboard.vue";
import RecipeDialog from "../components/RecipeDialog.vue";

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data: () => {
    return {
      number: 10,
      category_id: null,
      clicked: false,
      returns: false,
      newRecipes: Object,
    };
  },
  components: {
    NavbarDash,
    RecipeDialog,
  },

  methods: {
    ...mapActions("items", ["fetchItemsRecipes", "filterRecipe"]),
    reset() {
      this.category_id = null;
      this.returns = true;
    },
  },

  computed: {
    filterdItems() {
      let category = this.categories.find((v) => v.id == this.category_id);
      console.log(category);
      let items = category ? category.items_ids : [];
      let related_item = this.data.filter((v) => items.find((e) => e == v.id));
      console.log(related_item);
      console.log("related_item");
      return related_item.length == 0 ? this.data : related_item;
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
  watch: {
    category_id() {
      this.returns = false;
    },
    new_items(id) {
      let category = this.categories.find((v) => v.id == id);
      console.log(id);
      let items_ids = category.items_ids;
      console.log(items_ids);
      let related_item = this.itemsRecipes.filter((v) =>
        items_ids.find((e) => e == v.id)
      );
      return related_item;
    },
  },
};
</script>

<style></style>
