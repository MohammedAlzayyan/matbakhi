<template>
  <div class="signup">
    <v-img
      src="https://image.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg"
    >
      <v-container fluid>
        <v-card class="mx-auto mt-10 mb-10" max-width="500">
          <v-card-text class="text-center black--text">
            <h1 class="mt-5">Matbakhi</h1>
          </v-card-text>

          <!-- <v-card-actions class="mt-7 mr-3 ml-5">
            <v-btn style="width: 217px; height: 40px; background: #fadbca; ">
              <v-icon class="mr-7">mdi-google</v-icon>
              <h3 style="font-size: 20px" class="font-weight-black">Google</h3>
            </v-btn>

            <v-btn style="width: 217px; height: 40px; background: #d9eaff;">
              <v-icon class="mr-7">mdi-facebook</v-icon>
              <h3 style="font-size: 20px" class="font-weight-black">
                Facebook
              </h3>
            </v-btn>
          </v-card-actions>

          <div class="mt-3 mr-3 ml-5 text-center">
            <h5>
              ــــــــــــــــــــــــــــــــــــــــــــــــــــــorــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
            </h5>
          </div> -->

          <v-form v-model="signupValidity">
            <v-row no-gutters justify="">
              <v-col cols="12" md="12">
                <v-text-field
                  :rules="nameRules"
                  required
                  v-model="user.name"
                  outlined
                  color="grey"
                  placeholder="Full Name"
                  class="mt-7 mr-7 ml-7"
                  solo-inverted
                  prepend-inner-icon="mdi-account"
                />
                <v-text-field
                  :rules="emailRules"
                  v-model="user.email"
                  outlined
                  color="grey"
                  placeholder="Email"
                  class="mr-7 ml-7"
                  solo-inverted
                  prepend-inner-icon="mdi-mail"
                />
                <v-text-field
                  :rules="passwordRules"
                  v-model="user.password"
                  outlined
                  color="grey"
                  placeholder="Password"
                  class="mr-7 ml-7"
                  solo-inverted
                  prepend-inner-icon="mdi-lock"
                  :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="value1 ? 'password' : 'text'"
                  @click:append="() => (value1 = !value1)"
                />
                <v-text-field
                  :rules="rePasswordRules"
                  outlined
                  color="grey"
                  placeholder="RePassword"
                  v-model="rePassword"
                  class="mr-7 ml-7"
                  solo-inverted
                  prepend-inner-icon="mdi-lock"
                  :append-icon="value2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="value2 ? 'password' : 'text'"
                  @click:append="() => (value2 = !value2)"
                />
                <!-- <v-col cols="12" md="6" class="mr-7">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col> -->

                <!-- <v-row justify="center">
                  <v-col cols="12" md="4">
                    <v-select :items="items2" label="Type"></v-select>
                  </v-col>
                </v-row> -->
              </v-col>
              <v-col cols="12" style="max-width: 200px; margin-left:170px">
                <v-select :items="items" label="Gender" class="mr-7"></v-select>
              </v-col>

              <v-col cols="12" style="max-width: 200px; margin-left:180px">
                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-row justify="center">
                  <v-btn
                    width="180"
                    height="45"
                    color="deep-orange darken-4 white--text"
                    rounded
                    @click="dialog = false"
                    class="mb-16 mt-8"
                    :disabled="!signupValidity"
                    v-on:click="c1"
                  >
                    <h3>Register</h3>
                  </v-btn>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SignUp",
  data() {
    return {
      signupValidity: false,
      num: 22,
      name: "",
      email: "",
      password: "",
      rePassword: "",
      value1: true,
      value2: true,
      items: ["Male", "Female"],
      items2: ["Chef", "Client"],
      nameRules: [
        (v) => !!v || "Name is Required.",
        (v) => v.length > 8 || "The name must be at least 8 characters",
      ],
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
      rePasswordRules: [
        (v) => !!v || "RePassword is Required.",
        (v) => v === this.user.password || "Not the same password",
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    };
  },

  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions("items", ["fetchUsers", "addUser"]),
    c1() {
      this.$store.dispatch("items/addUser", this.user);

      this.user.name = "";
      this.user.email = "";
      this.user.password = "";
      this.user.rePassword = "";

      this.$router.push({ name: "/Login" });
    },
  },
  computed: {
    ...mapGetters("items", ["allUsers"]),
  },
  mounted() {
    this.$store.dispatch("items/fetchUser");
  },
};
</script>

<style></style>
