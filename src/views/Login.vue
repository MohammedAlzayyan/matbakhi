<template>
  <div class="login">
    <LoginPage />
    <v-img
      src="https://image.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg"
      max-height="600px"
    >
      <v-container fluid>
        <v-card class="mx-auto mt-10 mb-10" max-width="500">
          <v-card-text class="text-center black--text">
            <h1 class="mt-5">Matbakhi</h1>
          </v-card-text>

          <v-form v-model="loginValidity">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  :rules="emailRules"
                  outlined
                  color="grey"
                  placeholder="Email"
                  v-model="user.email"
                  class="mt-7 mr-7 ml-7"
                  solo-inverted
                  prepend-inner-icon="mdi-mail"
                />
                <v-text-field
                  :rules="passwordRules"
                  outlined
                  color="grey"
                  placeholder="Password"
                  v-model="user.password"
                  class="mr-7 ml-7"
                  solo-inverted
                  prepend-inner-icon="mdi-lock"
                />
                <v-row justify="end">
                  <router-link
                    to=""
                    class="grey--text mr-10"
                    style="text-decoration: none"
                  >
                    <p>Forgot Password</p>
                  </router-link>
                </v-row>
              </v-col>
              <v-col class="md-auto">
                <v-row justify="center">
                  <v-btn
                    width="180"
                    height="45"
                    color="deep-orange darken-4 white--text"
                    rounded
                    @click="dialog = false"
                    class="mb-5"
                    v-on:click="login"
                  >
                    <h3>Login</h3>
                  </v-btn>
                </v-row>
                <v-row justify="center" class="mb-5">
                  <router-link
                    to="/signup"
                    class="black--text"
                    style="text-decoration: none"
                  >
                    <h4>Register</h4>
                  </router-link>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data: () => {
    return {
      loginValidity: false,

      emailRules: [
        (v) => !!v || "Email is Required.",
        (v) => v.indexOf("@") !== 0 || "Email should have a username.",
        (v) => v.includes("@") || "Email should include an @ symbol.",
        (v) =>
          v.indexOf(".") - v.indexOf("@") > 5 ||
          "Email should contain a valid domain.",
        (v) =>
          v.indexOf(".") <= v.length - 3 ||
          "Email should contain a valid domain extention.",
      ],
      passwordRules: [
        (v) => !!v || "Password is Required.",
        (v) => v.indexOf("@") !== 0 || "Password should have a username.",
        (v) => v.indexOf("#") !== 0 || "Password should have a username.",
        (v) =>
          v.includes("@") ||
          v.includes("#") ||
          "Password should include an @ or # symbols.",
        (v) => v.length > 8 || "length less than 8",
        (v) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
          return (
            pattern.test(v) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        },
      ],
    };
  },

  components: {},

  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    ...mapActions("items", ["searchUser"]),
    login() {
      this.$store.dispatch("items/searchUser", this.user);

      this.$router.push({ name: "Dashboard" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user_info");
    console.log(user);
  },
};
</script>

<style></style>
