<template>
  <v-navigation-drawer
    v-model="drawer"
    @click:outside="closed"
    app
    color="deep-orange lighten-3"
  >
    <v-list dense nav>
      <v-row class="mt-3">
        <v-list-item class="text-center">
          <v-col cols="12">
            <v-list-item-avatar width="100px" height="100px" class="ml-4">
              <v-img :src="userInfo.image"></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="mt-3">
              <h2 class="deep-orange--text ">{{ userInfo.name }}</h2>
            </v-list-item-title>
          </v-col>
        </v-list-item>
        <v-list-item class="text-center"> </v-list-item>
      </v-row>
      <v-divider class="mb-5"></v-divider>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-icon>
          <v-icon class="deep-orange--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="white--text">
          <v-list-item-title active-class="red--text">
            <h3 class="t1">{{ item.title }}</h3></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/dashboard/add",
        },
        {
          title: "My Recipes",
          icon: "mdi-image",
          route: "/dashboard/myrecipes",
        },
        {
          title: "About us",
          icon: "mdi-help-box",
          route: "/dashboard/aboutus",
        },
        { title: "Settings", icon: "mdi-cog", route: "/dashboard/settings" },
        { title: "Logout", icon: "mdi-logout", route: "/logout" },
      ],
    };
  },

  props: ["drawer"],
  methods: {
    closed() {
      this.drawer = false;
      this.$emit("closing");
    },
  },
  computed: {
    userInfo() {
      let user = JSON.parse(window.localStorage.getItem("user_info"));
      return user;
    },
  },

  mounted: {
    userInfo() {
      let user = JSON.parse(window.localStorage.getItem("user_info"));
      return user;
    },
  },
};
</script>

<style>
.t1 {
  color: white;
  font-size: 20px;
  height: 20px;
}

.t1:hover {
  color: orangered;
}
</style>
