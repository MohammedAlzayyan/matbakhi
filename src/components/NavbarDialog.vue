<template>
  <div>
    <v-card height="400" width="256" class="mx-auto">
      <v-navigation-drawer>
        <v-list-item>
          <v-list-item-content>
            <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item v-for="item in itemsList" :key="item.id" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
    itemsList: [
      { id: 1, title: "Explore" },
      { id: 2, title: "Lunch Recipes" },
      { id: 3, title: "Deinner Recipes" },
      { id: 4, title: "Snack Recipes" },
      { id: 5, title: "Bread Recipes" },
      { id: 5, title: "Dessert Recipes" },
      { id: 6, title: "Drink Recipes" },
      { id: 7, title: "Main Dish Recipes" },
      { id: 8, title: "Salad Recipes" },
    ],
  }),
};
</script>

<style></style>
