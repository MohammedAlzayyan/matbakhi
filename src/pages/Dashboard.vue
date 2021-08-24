<template>
  <div style="background-color: #FBE9E7;height:100%">
    <v-container>
      <NavbarDash :drawer="drawer" @closing="drawer = false" />
      <v-row no-gutters>
        <v-col cols="2" class=" hidden-md-and-up">
          <v-app-bar-nav-icon
            class="deep-orange--text "
            @click="switchDrawer"
          ></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="9" md="12">
          <h1 class="deep-orange--text">Dashboard</h1>
        </v-col>
      </v-row>
      <v-card
        elevation="12"
        max-height="800px"
        max-width="700px"
        class="ml-6 mt-6"
        color="deep-orange lighten-3"
      >
        <v-container>
          <v-form ref="form" v-model="valid" style="padding:50px 30px">
            <v-row no-gutters>
              <v-col cols="12" md="12" class="mb-5">
                <h2>Add Recipe</h2>
              </v-col>
              <v-col cols="12" md="6" class="pr-5">
                <v-text-field
                  v-model="recipe.name"
                  :rules="nameRules"
                  label="Name Recipe"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="recipe.imageURL"
                  :rules="imageURLRules"
                  label="imageURL"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="pr-5">
                <v-text-field
                  v-model="field_ingredients"
                  :rules="ingredientsRules"
                  label="Ingredients"
                  required
                >
                  <template v-slot:append>
                    <v-btn
                      :disabled="!field_ingredients"
                      @click="addNewIngredients"
                      icon
                    >
                      <v-icon> mdi-plus</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>

                <v-list ref="form" color="deep-orange lighten-3">
                  <v-card>
                    <div
                      v-for="(element, index) in recipe.ingredients"
                      :key="index"
                    >
                      <v-list-item>
                        <template v-slot:default>
                          <v-list-item-content>
                            <v-list-item-title
                              >{{ index + 1 }}- {{ element }}
                            </v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action
                            @click.stop="deleteIngredients(index)"
                            ><v-icon small
                              >mdi-close</v-icon
                            ></v-list-item-action
                          >
                        </template>
                      </v-list-item>
                      <v-divider></v-divider>
                    </div>
                  </v-card>
                </v-list>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="preparation"
                  :rules="preparationRules"
                  label="Preparation"
                  required
                >
                  <template v-slot:append>
                    <v-btn
                      :disabled="!preparation"
                      @click="addNewPreparation"
                      icon
                    >
                      <v-icon> mdi-plus</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
                <v-list ref="form" color="deep-orange lighten-3">
                  <v-card>
                    <div v-for="(element, index) in recipe.steps" :key="index">
                      <v-list-item>
                        <template v-slot:default>
                          <v-list-item-content>
                            <v-list-item-title
                              >{{ index + 1 }}- {{ element }}
                            </v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action
                            @click.stop="deletePreparation(index)"
                            ><v-icon small
                              >mdi-close</v-icon
                            ></v-list-item-action
                          >
                        </template>
                      </v-list-item>
                      <v-divider></v-divider>
                    </div>
                  </v-card>
                </v-list>
              </v-col>

              <v-col cols="12" md="6">
                <v-autocomplete
                  item-value="id"
                  item-text="name"
                  :items="categories"
                  v-model="recipe.category_id"
                  label="Category"
                  solo
                  full-width
                  style="width: 290px;"
                  dark
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" class="mt-3">
                <v-btn color="success" @click="reset">
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import NavbarDash from "../components/NavbarDashboard.vue";

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      valid: true,

      drawer: true,

      field_ingredients: "",
      preparation: "",
    };
  },

  props: {
    recipe: {
      type: Object,
      default() {
        return {
          steps: [],
          ingredients: [],
        };
      },
    },
  },

  components: {
    NavbarDash,
  },

  methods: {
    switchDrawer() {
      this.drawer = false;
      this.drawer = true;
    },
    addNewIngredients() {
      let newIngredients = this.field_ingredients.trim(" ");
      if (newIngredients === "") {
        console.log(newIngredients);
      } else {
        this.recipe.ingredients.push(this.field_ingredients);
      }
      this.field_ingredients = "";
    },
    addNewPreparation() {
      let newPreparation = this.preparation.trim(" ");
      if (newPreparation === "") {
        console.log(newPreparation);
      } else {
        this.recipe.steps.push(this.preparation);
      }
      this.preparation = "";
    },
    deleteIngredients(i) {
      this.recipe.ingredients.splice(i, 1);
    },
    deletePreparation(i) {
      this.recipe.steps.splice(i, 1);
    },
    async reset(i) {
      // this.recipe.field_ingredients.push(this.recipe.steps[0]);
      await this.$store.dispatch("items/addRecipe", this.recipe);
      this.$store.dispatch("items/addItemIdToCategory", this.recipe);
      this.$refs.form.reset();
      this.recipe.ingredients.splice(i);
      this.recipe.steps.splice(i);
    },

    ...mapActions("items", ["fetchItemsRecipes"]),
  },

  computed: {
    ...mapState("items", ["categories", "itemsRecipes"]),
    ...mapGetters("items", ["allItemsRecipes"]),
  },
  mounted() {
    this.$store.dispatch("items/fetchCategory");
    this.$store.dispatch("items/fetchItemsRecipes");
    this.$vuetify.breakpoint.width < 800 ? (this.drawer = false) : "";
  },
};
</script>

<style></style>
