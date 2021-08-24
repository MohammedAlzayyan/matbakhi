<template>
  <v-content style="padding:0px">
    <div>
      <v-carousel cycle height="100%" show-arrows-on-hover hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in imageBackground"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
        >
          <v-row
            style=" margin-top:150px;"
            class="text-center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <h1 class="deep-orange--text" style="font-size: 35px">
                Matbakhi
              </h1>
              <br />
              <p style="max-width: 300%; font-size: 20px; font-weight: bold;">
                Providing you with many quick recipes, how to prepare all Arab
                and international recipes, how to make cheesecake and oriental
                and western sweets, with dieting cooks and recipes ...
              </p>
              <br />
              <v-btn
                rounded
                to="/signup"
                class="deep-orange--text font-weight-black "
                style="width: 200px; height: 50px; font-size: 20px"
                >Get Started</v-btn
              >
            </v-col>
            <!-- <v-col
            cols="6"
            style=""
            :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'"
          >
            <v-img src="../assets/images/hamburger.png" class="image1"></v-img>
          </v-col> -->
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <!-- <v-row>
      <v-col cols="12">
        <v-img
          src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          max-height="565px"
        >
          <v-row style=" margin-left:150px; margin-top:150px">
            <v-col cols="12">
              <h1 class="deep-orange--text" style="font-size: 35px">
                Matbakhi
              </h1>
              <br />
              <p
                style="width: 50%; font-size: 20px;"
                class="font-weight-medium"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                sunt nesciunt rem blanditiis nisi molestiae dolore voluptatibus
                qui? Pariatur distinctio ipsa quibusdam vero ut voluptatem
                libero! Sed asperiores voluptas recusandae.
              </p>
              <br />
              <v-btn
                rounded
                to="/signup"
                class="deep-orange--text font-weight-black "
                style="width: 200px; height: 50px; font-size: 20px"
                >Get Started</v-btn
              >
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row> -->

    <v-container class="mt-6">
      <h2 class="mb-8">Recipes</h2>
      <v-row>
        <v-col cols="12" md="8" class="mt-3">
          <v-card
            v-for="(recipe, i) in shuffleArray(allItemsRecipes)"
            :key="recipe.id"
            class="cardRecipe mb-9 "
            elevation="8"
            v-show="i < 6"
          >
            <router-link class="itemRecipe" :to="`/recipePage/id=${recipe.id}`">
              <v-row>
                <v-col cols="12" md="5" sm="12" class="testImg pa-5">
                  <v-img
                    class="img1"
                    max-height="100%"
                    :src="recipe.imageURL"
                  ></v-img>
                </v-col>
                <v-col>
                  <!-- {{ $vuetify.breakpoint.width }} -->
                  <v-col cols="6" md="12">
                    <h3>{{ recipe.name }}</h3>
                  </v-col>
                  <v-row no-gutters class="ml-2">
                    <v-col md="4">
                      <h4><v-icon>mdi-comment</v-icon>1000</h4>
                    </v-col>
                    <v-col md="4">
                      <h4><v-icon>mdi-eye</v-icon>1000</h4>
                    </v-col>
                    <v-col md="4">
                      <h4><v-icon>mdi-calendar-range</v-icon>1000</h4>
                    </v-col>
                  </v-row>

                  <v-col cols="12">
                    <p>{{ recipe.steps[0] }}{{ recipe.steps[3] }}</p>
                    <v-row no-gutters>
                      <v-col cols="12" md="3">
                        <h4>Name chef:</h4>
                      </v-col>
                      <v-col cols="12" md="4">
                        <h4 class="nameChef">
                          {{
                            allUsers.find((v) => v.id == recipe.user_id).name
                          }}
                        </h4>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-col>
              </v-row>
            </router-link>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card max-height="100%" class="card2">
            <v-card-title style="font-weight:bold">
              How to Make a Smoothie
            </v-card-title>
            <v-card-text>
              <v-img
                max-height="100%"
                src="https://food.fnr.sndimg.com/content/dam/images/food/plus/22/pouring-green-smoothie-into-a-glass-on-counter.jpg.rend.hgtvcom.616.347.suffix/1629649447443.jpeg"
              ></v-img>
            </v-card-text>
            <v-card-subtitle class="black--text" style="font-weight:bold">
              1- Start with a liquid base. <br />
              2- Add sweeteners or powders. <br />
              3- Add fresh, leafy greens. <br />
              4- Add other ingredients, ending with frozen ingredients.
            </v-card-subtitle>
            <v-divider class="mr-7 ml-4 mt-5"></v-divider>
            <v-divider class="mr-7 ml-4 mt-1"></v-divider>
            <v-card-title style="font-weight:bold" class="mt-5">
              Sweet and Sour Couscous-Stuffed Peppers
            </v-card-title>
            <v-card-text>
              <v-img
                max-height="100%"
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_Sweet-and-Sour-Couscous-Stuffed-Peppers_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371614449079.jpeg"
              ></v-img>
            </v-card-text>
            <v-card-subtitle class="black--text" style="font-weight:bold">
              Fill colorful (and antioxidant-rich) bell peppers with lean ground
              beef, whole-wheat couscous and a mix of vegetables and herbs for a
              healthy and satisfying meal.
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12">
          <router-link to="/allrecipes" class="allRecipes">
            <h4>
              Browse All Latest Recipes
            </h4>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="ml-3">
          <h2>Recipes</h2>
        </v-col>

        <v-col cols="6" sm="4" v-for="recipe in recipes" :key="recipe.id">
          <v-card class="ma-3" style="height: 320px; width: 280px">
            <v-img
              :src="`${recipe.image_recipe}`"
              style="height: 180px;"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title v-text="recipe.name"> </v-card-title>
            </v-img>
            <v-card-text style="height: 50px;">
              <p>{{ recipe.paragraphe.substring(0, 100) }}...</p>
            </v-card-text>
            <v-card-actions class="mt-9 ml-5">
              <v-btn text rounded style="width: 20px;font-size: 16px;"
                ><h5>Learn more</h5></v-btn
              >

              <v-rating
                color="yellow darken-3"
                background-color="grey darken-1"
                half-increments
                hover
                size="15"
                class="ml-8"
              ></v-rating>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    <!-- <div style="background: #e8e8e8; height:350px" class="mt-12 mb-6">
      <v-container>
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="3" class="mt-8">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              class="grey lighten-2"
            >
            </v-img>
            <h3 class="mt-3">Lorem</h3>
          </v-col>
          <v-col cols="12" class="text-center mt-3">
            <v-btn rounded style="width: 200px" class="deep-orange--text"
              ><h3>View All</h3></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div> -->

    <v-row
      class="mt-10 mb-10 text-center"
      style="background: #ffebde;  padding:20px"
    >
      <v-col
        v-for="(recipe, i) in allItemsRecipes"
        :key="recipe.id"
        cols="12"
        md="3"
        sm="6"
        class="mt-2"
        v-show="i < 4"
      >
        <v-img :src="recipe.imageURL" class="img3"> </v-img>
        <h3 class="mt-3 mb-3">{{ recipe.name }}</h3>

        <v-btn
          :to="`/recipePage/id=${recipe.id}`"
          rounded
          style="width: 100px; height: 30px;"
          class="deep-orange--text"
          ><h4>View</h4></v-btn
        >
      </v-col>
    </v-row>
    <v-row no-gutters class="mb-10">
      <v-col cols="12" md="12" class="text-center">
        <h2 class="mt-6 mb-8" style="font-size:34px">The Chefs</h2>
      </v-col>
      <v-col
        class="mt-10 text-center"
        v-for="(item, i) in allUsers"
        :key="i"
        cols="6"
        md="4"
      >
        <router-link :to="`/chefpage/id=${item.id}`">
          <v-avatar size="180px" class="imgChef">
            <v-img :src="item.image"></v-img>
          </v-avatar>
        </router-link>

        <h3 class="">
          {{ item.name }}
        </h3>
      </v-col>
    </v-row>
    <v-row style="background: #FFCCBC; padding:20px" class="mt-12 mb-10">
      <v-col cols="12" md="9" style="font-size:30px"
        ><h3>What's for Dinner?</h3></v-col
      >
      <v-col cols="12" md="3" style="font-size:12px" class="mt-5"
        ><h3>FAST PREP. BIG FLAVOURS!</h3></v-col
      >
      <v-col
        v-for="(recipe, i) in allItemsRecipes"
        :key="recipe"
        cols="12"
        md="3"
        sm="6"
        class=" text-center"
        v-show="i < 4"
      >
        <router-link :to="`/recipePage/id=${recipe.id}`">
          <v-img :src="recipe.imageURL" class="img4"> </v-img>
        </router-link>
        <router-link
          :to="`/recipePage/id=${recipe.id}`"
          style="text-decoration: none;color: black;"
        >
          <h3 class="mt-3 text-center">{{ recipe.name }}</h3>
        </router-link>
      </v-col>
    </v-row>

    <div class="" style=" height:250px; margin-top:100px">
      <v-row class="mr-10 ml-10 text-center">
        <v-col cols="12">
          <h3>NEVER MISS A RECIPE</h3>
        </v-col>
        <v-col>
          <v-btn
            rounded
            style="width: 150px; height: 50px; font-size:18px"
            class="deep-orange--text mr-5"
            to="/login"
            ><h4>Log In</h4></v-btn
          >
          <v-btn
            rounded
            style="width: 150px; height: 50px; font-size:18px"
            class="deep-orange--text"
            to="/signup"
            ><h4>Sign Up</h4></v-btn
          >
        </v-col>
      </v-row>
    </div>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      color="deep-orange lighten-2"
      @click="toTop"
    >
      <v-icon color="white" large>mdi-chevron-up</v-icon>
    </v-btn>
  </v-content>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Home",

  data: () => ({
    fab: false,
    imageBackground: [
      {
        src: require("../assets/images/r1.jpg"),
        title: "We are creative",
      },
      {
        src: require("../assets/images/r2.jpg"),
        title: "We are hard worker",
      },
      {
        src: require("../assets/images/r3.jpg"),
        title: "We are professional",
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
  }),
  components: {},
  methods: {
    ...mapActions("items", ["fetchItemsRecipes", "fetchUser"]),
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },
  },
  computed: {
    ...mapState("items", ["categories", "itemsRecipes", "users"]),
    ...mapGetters("items", ["allItemsRecipes", "allUsers"]),
  },
  mounted() {
    this.$store.dispatch("items/fetchItemsRecipes");
    this.$store.dispatch("items/fetchUser");
  },
};
</script>
<style>
.image1 {
  width: 100%;
  animation: float 3s linear infinite;
  bottom: 100px;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0rem);
  }
  50% {
    transform: translateY(3rem);
  }
}

.cardRecipe {
  background-color: #fbe9e7 !important;
}

.cardRecipe:hover {
  transform: scale(1.04);
  transition: 0.5s;
  background-color: #ffccbc !important;
}
/* .card2:hover {
  transform: scale(1.04);
  transition: 0.5s;
  background-color: #ffccbc !important;
} */

.nameChef {
  color: #e64a19;
}

.allRecipes {
  color: black !important;
  text-decoration: none;
  position: absolute;
  font-size: 18px;
}
.allRecipes:hover {
  color: orangered !important;
}

.img3:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
.imgChef {
  border: 10px solid #ffccbc;
  margin-bottom: 20px;
}
.imgChef:hover {
  transform: scale(1.1);
  transition: 0.5s;
  border: 10px solid #ff7043 !important;
}
.img4 {
  border: 5px solid rgb(253, 111, 59) !important;
}
.img4:hover {
  transform: scale(1.08);
  transition: 0.5s;
  border: 7px solid white !important;
}
.itemRecipe {
  text-decoration: none;
  color: black !important;
}
</style>
