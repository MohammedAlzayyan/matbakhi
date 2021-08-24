<template>
  <v-content>
    <v-container>
      <h5
        class="grey--text lighten-2"
        v-text="`Home>Category>RecipeType>${recipe.name}`"
      ></h5>

      <v-row class="mt-7" no-gutters>
        <v-col cols="12" md="12">
          <h1>{{ recipe.name }}</h1>
        </v-col>
        <v-col cols="5" md="2">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey"
            empty-icon="$ratingFull"
            half-increments
            hover
            size="22"
          ></v-rating>
        </v-col>
        <v-col cols="2" md="1" class="mt-2 ml-4">
          <h4>4.5</h4>
        </v-col>
        <v-col cols="3" md="2" class="mt-2">
          <h4>(3 Evaluation)</h4>
        </v-col>
        <v-col cols="4" md="2" class="mt-2">
          <h4>2021-08-10</h4>
        </v-col>

        <v-col cols="12" class="mt-4">
          <v-img :src="recipe.imageURL" width="700px"> </v-img>
        </v-col>
        <v-col class="mt-7">
          <v-card width="200px" color="grey">
            <v-row>
              <v-col cols="4" class="pl-6 pt-4">
                <v-icon x-large>mdi-clock</v-icon>
              </v-col>
              <v-col cols="8">
                <v-row>
                  <v-col>
                    <h5>Cooking Time</h5>
                    <h5 class="mt-2">40 min</h5>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider width="700px" class="test1 mt-8"></v-divider>

      <v-content class="mt-7">
        <h2 class="deep-orange--text">Ingredients</h2>
        <v-divider width="700px" class="test2 mt-2"></v-divider>

        <ul class="mt-4 ml-8" v-for="r in recipe.ingredients" :key="r">
          <li>
            <h4>{{ r }}</h4>
          </li>
        </ul>
      </v-content>

      <v-content class="mt-7">
        <h2 class="deep-orange--text">Preparation</h2>
        <v-divider width="700px" class="test2 mt-2"></v-divider>
        <ol
          class="mt-4"
          style="list-style-type: none; "
          v-for="(r, i) in recipe.steps"
          :key="r"
        >
          <li>
            <v-avatar color="#f7724a" size="28" style="  float: left;"
              ><h4 class="white--text">{{ i + 1 }}</h4>
            </v-avatar>
            <v-spacer></v-spacer>
            <h4 style="padding-left:40px; padding-top:4px; ">
              {{ r }}
            </h4>
          </li>
        </ol>
      </v-content>
    </v-container>

    <v-row
      style="background: #ffebde; padding-left: 20px; padding-right: 20px "
      class="mt-12 mb-10"
    >
      <v-col cols="12" md="12">
        <h2 class="mt-6">You may also like:</h2>
      </v-col>
      <v-col
        v-for="(recipe, i) in allItemsRecipes"
        :key="recipe"
        cols="12"
        md="4"
        sm="6"
        v-show="i < 3"
        class="text-center"
      >
        <v-img :src="recipe.imageURL" class="imgRecipes"></v-img>

        <h3 class="mt-5 mb-3">
          {{ recipe.name }}
        </h3>
      </v-col>
    </v-row>

    <v-row no-gutters class="mb-10" justify="center">
      <v-col cols="12" md="12" class=" text-center">
        <h2 class="mt-6 mb-8" style="font-size:34px">The Chefs</h2>
      </v-col>
      <v-col
        class="mt-10 text-center"
        v-for="(item, i) in allUsers"
        :key="i"
        cols="6"
        md="3"
      >
        <router-link :to="`/chefpage/id=${item.id}`">
          <v-avatar size="180px" class="imgChef">
            <v-img :src="item.image"></v-img>
          </v-avatar>
        </router-link>

        <router-link
          :to="`/chefpage/id=${item.id}`"
          style="text-decoration:none; color:black"
        >
          <h3 class="">
            {{ item.name }}
          </h3>
        </router-link>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "recipePage",
  data: () => ({
    items: [
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
    ],
    itemsChefs: [
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
      {
        src:
          "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "We are creative",
      },
    ],
    rating: 4.5,
  }),
  methods: {
    ...mapActions("items", ["fetchItemsRecipes", "fetchUser"]),
  },
  computed: {
    ...mapState("items", ["categories", "itemsRecipes", "users"]),
    ...mapGetters("items", ["allItemsRecipes", "allUsers"]),

    recipe() {
      let recipe = this.itemsRecipes.find((v) => v.id == this.$route.params.id);
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
.test1 {
  border-color: rgb(151, 151, 151) !important;
}
.test2 {
  border-width: 4px !important;
  border-color: #ff5722 !important;
  height: 100%;
}

.imgRecipes {
  border: 5px solid rgb(253, 111, 59) !important;
}
.imgRecipes:hover {
  transform: scale(1.08);
  transition: 0.5s;
  border: 7px solid white !important;
}
</style>
